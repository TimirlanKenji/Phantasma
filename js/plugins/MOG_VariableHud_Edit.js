/*:
@target MV
@plugindesc Fix for MOG_VariableHud v1.1 - HUD visible in battle and during dialogues
@author You
@help
Плагин-надстройка для MOG_VariableHud.js (v1.1).

Делает HUD видимым:
- во время диалогов (текстовых сообщений);
- в бою;
- на карте.

HUD скрывается ТОЛЬКО когда включён указанный переключатель.

=== Параметры ===

@param Hide Switch ID
@desc ID переключателя, при включении которого HUD скрывается (0 = не использовать).
@default 0

=== Пример ===
Hide Switch ID = 5
→ Пока Switch 5 выключен, HUD виден всегда.
→ Когда включаешь Switch 5, HUD становится прозрачным.
*/

(function() {
    'use strict';

    var parameters = PluginManager.parameters('MOG_VariableHud_Fix');
    var HIDE_SWITCH_ID = Number(parameters['Hide Switch ID'] || 0);

    // === 1. Отключаем скрытие HUD во время диалогов ===
    // Переопределяем VariableHud.prototype.needHide, если MOG уже загружен
    var _VariableHud_needHide = VariableHud.prototype.needHide;
    VariableHud.prototype.needHide = function() {
        // Игнорируем $gameMessage.isBusy() - диалоги больше не скрывают HUD
        // Проверяем только: выключен ли HUD через plugin command MOG
        if ($gameSystem._variableHudData && $gameSystem._variableHudData[this._index]) {
            if (!$gameSystem._variableHudData[this._index][0]) {
                return true;
            }
        }
        // Проверяем переключатель скрытия
        if (HIDE_SWITCH_ID > 0 && $gameSwitches.value(HIDE_SWITCH_ID)) {
            return true;
        }
        return false;
    };

    // === 2. Убеждаемся, что HUD создаётся и в бою ===
    // MOG создаёт HUD только в Scene_Map, добавим создание в Scene_Battle
    var _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function() {
        _Scene_Battle_createAllWindows.call(this);
        this.createVariableHudField();
        this._variableHud = [];
        for (var i = 0; i < Moghunter.variableHud_Max; i++) {
            if (!Moghunter.variableHud_Visible || 
                String(Moghunter.variableHud_Visible[i]) !== 'true') {
                continue;
            }
            if (!$gameSystem._variableHudData[i]) {
                var vis = String(Moghunter.variableHud_VisibleInt[i]) === "true" ? true : false;
                $gameSystem._variableHudData[i] = [vis, 0];
            }
            this._variableHud[i] = new VariableHud(i);
            this._variableField.addChild(this._variableHud[i]);
        }
    };

    Scene_Battle.prototype.createVariableHudField = function() {
        this._variableField = new Sprite();
        this.addChild(this._variableField);
    };

    // === 3. Обновляем HUD в бою ===
    var _Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        _Scene_Battle_update.call(this);
        if (this._variableHud) {
            for (var i = 0; i < this._variableHud.length; i++) {
                if (this._variableHud[i]) {
                    this._variableHud[i].update();
                }
            }
        }
    };

})();