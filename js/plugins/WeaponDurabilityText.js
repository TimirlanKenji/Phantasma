/*:
@target MV
@plugindesc v3.0.0 Simple Weapon Durability + BattleLog warning v3.0.0
@author You
@help
Простая система прочности оружия без отображения процентов в меню.
Игрок видит только предупреждение в боевом логе, когда прочность почти на нуле.

Notetags (Weapons, Note):
  <DurabilityMax: 100>   // максимум прочности (по умолчанию 100)
  <DurabilityDrain: 5>   // сколько снимается за одно действие (по умолчанию 5)

Plugin Commands:
  RestoreWeapon actorId slotIndex amount
  Пример: RestoreWeapon 1 0 20
  // актёр 1, слот 0 (обычно первое оружие), +20 прочности

Совместимость:
- SRD_BattleLogUpgrade: плагин использует стандартные вызовы battle log
  (this._logWindow.addText), поэтому Upgrade просто красиво отрисует текст.
*/

(function() {
    'use strict';

    var pluginName = 'WeaponDurabilityCore';
    var params = PluginManager.parameters(pluginName);

    // базовые настройки (можешь оформить как plugin params при желании)
    var DefaultDrain       = Number(params['DefaultDrain'] || 5) || 5;
    var WarningThreshold   = Number(params['WarningThreshold'] || 10) || 10; // в процентах
    var BreakSEName        = String(params['BreakSEName'] || 'SE_MetalSheetFall');
    var BreakSEVolume      = Number(params['BreakSEVolume'] || 90) || 90;
    var BreakSEPitch       = Number(params['BreakSEPitch'] || 100) || 100;

    // текст предупреждения в боевом логе
    // %1 = имя актёра, %2 = имя оружия, %3 = процент прочности
    var WarningText = String(params['WarningText'] ||
        '"%2" {WeaponBreak1}');

    // === Notetags по оружию (чистый, безопасный вариант) ===
    var _DataManager_extractMetadata = DataManager.extractMetadata;
    DataManager.extractMetadata = function(data) {
        _DataManager_extractMetadata.call(this, data);
        if (!data || typeof data !== 'object') return;
        if (!data.meta) return;
        // "похоже на оружие": есть тип оружия и слот экипировки = 1
        var looksLikeWeapon = (data.wtypeId !== undefined && data.etypeId === 1);
        if (!looksLikeWeapon) return;
        data.durabilityMax   = Number(data.meta.DurabilityMax || 0) || 100;
        data.durabilityDrain = Number(data.meta.DurabilityDrain || 0) || DefaultDrain;
    };

    // === Хранилище прочности: по weaponId + actorId ===
    // Да, это значит общая прочность для всех копий одного ID у актёра,
    // но по твоему новому ТЗ это приемлемо (один тип оружия железно).
    var DurMap = {}; // weaponId -> actorId -> { max, cur }

    function ensureDurRecord(actorId, weaponId) {
        if (!weaponId || !$dataWeapons[weaponId] || !actorId) return null;
        if (!DurMap[weaponId]) DurMap[weaponId] = {};
        if (!DurMap[weaponId][actorId]) {
            var tpl = $dataWeapons[weaponId];
            var max = (tpl && tpl.durabilityMax) || 100;
            DurMap[weaponId][actorId] = { max: max, cur: max, warned: false };
        }
        return DurMap[weaponId][actorId];
    }

    function durPercent(actorId, weaponId) {
        var rec = ensureDurRecord(actorId, weaponId);
        if (!rec || rec.max <= 0) return 0;
        return Math.round(rec.cur / rec.max * 100);
    }

    function changeDur(actorId, weaponId, delta) {
        var rec = ensureDurRecord(actorId, weaponId);
        if (!rec) return;
        rec.cur = Math.max(0, Math.min(rec.max, rec.cur + delta));
    }

    function isBroken(actorId, weaponId) {
        var rec = ensureDurRecord(actorId, weaponId);
        if (!rec) return false;
        return rec.cur <= 0;
    }

    // === Поломка оружия ===
    function breakWeapon(actor, weaponId) {
        if (!actor || !weaponId || !$dataWeapons[weaponId]) return;

        // снимаем оружие из всех слотов, где оно стоит
        var equips = actor.equips();
        for (var i = 0; i < equips.length; i++) {
            var it = equips[i];
            if (it && it.id === weaponId) {
                actor.changeEquip(i, null);
            }
        }

        // убираем одну копию этого оружия из инвентаря
        $gameParty.loseItem($dataWeapons[weaponId], 1, false);

        // чистим хранилище прочности для этого оружия и актёра
        if (DurMap[weaponId] && DurMap[weaponId][actor.actorId()]) {
            delete DurMap[weaponId][actor.actorId()];
        }

        AudioManager.playSe({
            name: BreakSEName,
            volume: BreakSEVolume,
            pitch: BreakSEPitch,
            pan: 0
        });

        // сообщение о поломке можно тоже кинуть в battle log
        var scene = SceneManager._scene;
        if (scene && scene._logWindow) {
            scene._logWindow.addText(actor.name() + ' сломал оружие "' +
                                     $dataWeapons[weaponId].name + '"!');
        } else {
            $gameMessage.add('{WeaponBreak}');
        }
    }

    // === Plugin Command: RestoreWeapon actorId slotIndex amount ===
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'RestoreWeapon') {
            var actorId   = Number(args[0] || 0);
            var slotIndex = Number(args[1] || 0);
            var amount    = Number(args[2] || 0);
            var actor     = $gameActors.actor(actorId);
            if (actor) {
                var item = actor.equips()[slotIndex];
                if (item && item.wtypeId !== undefined) {
                    changeDur(actor.actorId(), item.id, amount);
                    if (isBroken(actor.actorId(), item.id)) {
                        breakWeapon(actor, item.id);
                    }
                }
            }
        }
    };

    // === Drain + предупреждение в боевом логе ===
    var _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.call(this, target);
        var subject = this.subject();
        if (subject && subject.isActor && subject.isActor() && subject.equips) {
            var actor = subject;
            var equips = actor.equips();
            var weaponInstance = null;
            for (var i = 0; i < equips.length; i++) {
                if (equips[i] && equips[i].wtypeId !== undefined) {
                    weaponInstance = equips[i];
                    break;
                }
            }
            if (weaponInstance) {
                var weaponId = weaponInstance.id;
                var tpl   = $dataWeapons[weaponId];
                var rec   = ensureDurRecord(actor.actorId(), weaponId);
                if (!rec) return;
                var drain = (tpl && tpl.durabilityDrain != null) ? tpl.durabilityDrain : DefaultDrain;
                rec.cur = Math.max(0, rec.cur - drain);

                // предупреждение: один раз, когда процент <= порога
                var percent = Math.round(rec.max > 0 ? rec.cur / rec.max * 100 : 0);
                if (!rec.warned && percent > 0 && percent <= WarningThreshold) {
                    rec.warned = true;
                    var text = WarningText
                        .replace('%1', actor.name())
                        .replace('%2', tpl.name)
                        .replace('%3', String(percent));
                    var scene = SceneManager._scene;
                    if (scene && scene._logWindow) {
                        scene._logWindow.addText(text);
                    } else {
                        $gameMessage.add(text);
                    }
                }

                // поломка
                if (rec.cur <= 0) {
                    setTimeout(function() {
                        breakWeapon(actor, weaponId);
                    }, 16);
                }
            }
        }
    };

    // === Ограничение экипировки и ATK ===
    var _Game_Actor_canEquip = Game_Actor.prototype.canEquip;
    Game_Actor.prototype.canEquip = function(item) {
        if (item && item.wtypeId !== undefined) {
            if (isBroken(this.actorId(), item.id)) return false;
        }
        return _Game_Actor_canEquip.call(this, item);
    };

    var _Game_BattlerBase_param = Game_BattlerBase.prototype.param;
    Game_BattlerBase.prototype.param = function(paramId) {
        var v = _Game_BattlerBase_param.call(this, paramId);
        if (this.isActor && this.isActor() && paramId === 2 && this.equips) { // ATK
            var equips = this.equips();
            var w = null;
            for (var i = 0; i < equips.length; i++) {
                if (equips[i] && equips[i].wtypeId !== undefined) {
                    w = equips[i];
                    break;
                }
            }
            if (w && isBroken(this.actorId(), w.id)) v = 0;
        }
        return v;
    };

    // === Save/Load DurMap ===
    var _DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function() {
        var contents = _DataManager_makeSaveContents.call(this);
        contents._weaponDurMap = DurMap;
        return contents;
    };

    var _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        _DataManager_extractSaveContents.call(this, contents);
        DurMap = contents._weaponDurMap || {};
    };

})();
