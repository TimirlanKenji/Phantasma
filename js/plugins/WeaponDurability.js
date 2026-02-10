/*:
@target MV
@plugindesc v1.3.2 Weapon Durability % in Equip Name + Break SE (YEP/MOG compat) v1.3.2
@author Perplexity
@help
- Для Weapons: прочность 0–100%.
- В окне экипировки Weapon показывается как "Имя (XX%)".
- Расход % за боевое действие.
- При 0% – звук, сообщение, снятие оружия.

Notetags (в Weapons, Note поля):
<DurabilityMax: 100>
<DurabilityDrain: 5>

Plugin Command:
RestoreWeapon actorId weaponId amount
Пример: RestoreWeapon 1 5 20

Расположи плагин ПОСЛЕ YEP_CoreEngine и боевых плагинов.
*/

/* ПАРАМЕТРЫ ПЛАГИНА */
(function() {
    'use strict';

    var pluginName = 'WeaponDurabilityText';
    var params = PluginManager.parameters(pluginName);

    var DefaultDrain  = Number(params['DefaultDrain'] || 5) || 5;
    var DurTextFormat = String(params['DurTextFormat'] || '%1 (%2%)');
    var BreakSEName   = String(params['BreakSEName'] || 'Collapse1');
    var BreakSEVolume = Number(params['BreakSEVolume'] || 90) || 90;
    var BreakSEPitch  = Number(params['BreakSEPitch'] || 100) || 100;

    // Хранилище прочности: Map<weaponId, Map<actorId, value>>
    var weaponDurabilities = new Map();

    /* === Notetags === */
    var _DataManager_extractMetadata = DataManager.extractMetadata;
    DataManager.extractMetadata = function(data) {
        _DataManager_extractMetadata.call(this, data);
        if (data && typeof data === 'object' && DataManager.isWeapon(data)) {
            data.durabilityMax   = Number(data.meta.DurabilityMax || 0) || 100;
            data.durabilityDrain = Number(data.meta.DurabilityDrain || 0) || DefaultDrain;
        }
    };

    /* === Core durability get/set === */

    function durabilityFor(actorId, weaponId) {
        if (!weaponId || !$dataWeapons[weaponId]) return 100;
        if (!weaponDurabilities.has(weaponId)) {
            weaponDurabilities.set(weaponId, new Map());
        }
        var m = weaponDurabilities.get(weaponId);
        if (!m.has(actorId)) {
            m.set(actorId, $dataWeapons[weaponId].durabilityMax || 100);
        }
        return m.get(actorId);
    }

    function setDurability(actorId, weaponId, value) {
        if (!weaponId || !$dataWeapons[weaponId]) return;
        var max = $dataWeapons[weaponId].durabilityMax || 100;
        var clamped = Math.max(0, Math.min(max, value));
        if (!weaponDurabilities.has(weaponId)) {
            weaponDurabilities.set(weaponId, new Map());
        }
        var m = weaponDurabilities.get(weaponId);
        m.set(actorId, clamped);

        if (clamped <= 0) {
            // Чуть позже, чтобы не ломать боевые цепочки
            setTimeout(function() {
                breakWeapon(actorId, weaponId);
            }, 16);
        }
    }

    function breakWeapon(actorId, weaponId) {
        var actor = $gameActors.actor(actorId);
        if (!actor) return;

        // снять из всех слотов, где экипировано это оружие
        var equips = actor.equips();
        for (var i = 0; i < equips.length; i++) {
            var eq = equips[i];
            if (eq && DataManager.isWeapon(eq) && eq.id === weaponId) {
                actor.changeEquip(i, null);
            }
        }

        AudioManager.playSe({
            name: BreakSEName,
            volume: BreakSEVolume,
            pitch: BreakSEPitch,
            pan: 0
        });
        $gameMessage.add('Оружие сломано!');
    }

    /* === Plugin Command === */

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'RestoreWeapon') {
            var actorId  = Number(args[0] || 0);
            var weaponId = Number(args[1] || 0);
            var amount   = Number(args[2] || 0);
            var cur = durabilityFor(actorId, weaponId);
            setDurability(actorId, weaponId, cur + amount);
        }
    };

    /* === Drain при действии (совместимо с YEP_BattleEngineCore/YEP_SkillCore) === */

    var _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.call(this, target);
        var subject = this.subject();
        if (subject && subject.isActor && subject.isActor() && subject.weapons) {
            var weapon = subject.weapons()[0];
            if (weapon) {
                var drain  = weapon.durabilityDrain || DefaultDrain;
                var curDur = durabilityFor(subject.actorId(), weapon.id);
                if (curDur > 0) {
                    setDurability(subject.actorId(), weapon.id, curDur - drain);
                }
            }
        }
    };

    /* === Ограничение экипировки и статов === */

    var _Game_Actor_canEquip = Game_Actor.prototype.canEquip;
    Game_Actor.prototype.canEquip = function(item) {
        if (item && DataManager.isWeapon(item)) {
            var dur = durabilityFor(this.actorId(), item.id);
            if (dur <= 0) return false;
        }
        return _Game_Actor_canEquip.call(this, item);
    };

    var _Game_BattlerBase_param = Game_BattlerBase.prototype.param;
    Game_BattlerBase.prototype.param = function(paramId) {
        var v = _Game_BattlerBase_param.call(this, paramId);
        if (this.isActor && this.isActor() && paramId === 2) { // ATK
            var w = this.weapons()[0];
            if (w) {
                var dur = durabilityFor(this.actorId(), w.id);
                if (dur <= 0) v = 0;
            }
        }
        return v;
    };

    /* === Имя "Оружие (XX%)" в окне экипировки === */

    var _Window_EquipItem_drawItemName = Window_EquipItem.prototype.drawItemName;
    Window_EquipItem.prototype.drawItemName = function(item, x, y, width) {
        width = width || 312;
        if (item && DataManager.isWeapon(item) && this._actor) {
            var actor   = this._actor;
            var maxDur  = item.durabilityMax || 100;
            var curDur  = durabilityFor(actor.actorId(), item.id);
            var percent = Math.round(curDur / maxDur * 100);

            var name = DurTextFormat
                .replace('%1', item.name)
                .replace('%2', String(percent));

            var iconY = y + (this.lineHeight() - Window_Base._iconHeight) / 2;
            this.resetTextColor();
            this.drawIcon(item.iconIndex, x, iconY);
            this.drawText(name, x + Window_Base._iconWidth + 4, y,
                          width - Window_Base._iconWidth - 4);
        } else {
            _Window_EquipItem_drawItemName.call(this, item, x, y, width);
        }
    };

    /* === Сохранение/загрузка === */

    var _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function() {
        var info = _DataManager_makeSavefileInfo.call(this);
        try {
            info.durabilityData = JSON.stringify(Array.from(weaponDurabilities.entries()));
        } catch (e) {
            info.durabilityData = '[]';
        }
        return info;
    };

    var _DataManager_extractSavefileInfo = DataManager.extractSavefileInfo;
    DataManager.extractSavefileInfo = function(info) {
        _DataManager_extractSavefileInfo.call(this, info);
        weaponDurabilities = new Map();
        if (info && info.durabilityData) {
            try {
                var arr = JSON.parse(info.durabilityData);
                weaponDurabilities = new Map(arr);
            } catch (e) {
                weaponDurabilities = new Map();
            }
        }
    };

})();