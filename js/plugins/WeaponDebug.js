/*:
@target MV
@plugindesc Debug weapon instances & durability in battle and menus v1.0.0
@author You
@help
Плагин только для отладки. Подключай ВЫШЕ моего плагина прочности.
Открывай консоль (F8) и смотри вывод.
*/

(function() {
    'use strict';

    function dbgHeader(title) {
        console.log('========================');
        console.log('[DUR-DEBUG] ' + title);
        console.log('========================');
    }

    function dumpWeapon(label, item) {
        if (!item) {
            console.log(label + ': null');
            return;
        }
        console.log(label + ':', {
            obj: item,
            name: item.name,
            id: item.id,
            baseItemId: item.baseItemId,
            dataClass: item._dataClass,
            nonIndependent: item.nonIndependent || item.nonIndepdent,
            durUid: item._durUid,
            durability: item._durability,
            durabilityMax: item._durabilityMax
        });
    }

    function dumpActorEquips(actor, when) {
        if (!actor) return;
        dbgHeader('Actor equips (' + when + ') actorId=' + actor.actorId());
        var equips = actor.equips();
        for (var i = 0; i < equips.length; i++) {
            var it = equips[i];
            dumpWeapon('slot[' + i + ']', it);
        }
    }

    function dumpPartyWeapons() {
        dbgHeader('Party weapons list');
        var arr = $gameParty.weapons();
        for (var i = 0; i < arr.length; i++) {
            dumpWeapon('party.weapons()[' + i + ']', arr[i]);
        }
    }

    // Лог в начале хода актёра (когда выбираешь команду)
    var _BattleManager_startActorInput = BattleManager.startActorInput;
    BattleManager.startActorInput = function() {
        _BattleManager_startActorInput.call(this);
        var actor = this.actor();
        dumpActorEquips(actor, 'startActorInput');
        dumpPartyWeapons();
    };

    // Лог при применении действия
    var _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        var subject = this.subject();
        dbgHeader('Game_Action.apply BEFORE');
        if (subject && subject.isActor && subject.isActor()) {
            dumpActorEquips(subject, 'before apply');
            dumpPartyWeapons();
        }
        _Game_Action_apply.call(this, target);
        dbgHeader('Game_Action.apply AFTER');
        if (subject && subject.isActor && subject.isActor()) {
            dumpActorEquips(subject, 'after apply');
            dumpPartyWeapons();
        }
    };

    // Лог в меню при построении списка оружия
    var _Window_ItemList_makeItemList = Window_ItemList.prototype.makeItemList;
    Window_ItemList.prototype.makeItemList = function() {
        _Window_ItemList_makeItemList.call(this);
        dbgHeader('Window_ItemList.makeItemList (scene=' + SceneManager._scene.constructor.name + ')');
        if (this._category === 'weapon') {
            var data = this._data;
            for (var i = 0; i < data.length; i++) {
                dumpWeapon('ItemList[' + i + ']', data[i]);
            }
        }
    };

})();
