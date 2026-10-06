//=============================================================================
// PersuasionSystem.js
// Версия: 2.3
// Автор: Phantasma Hotel
//=============================================================================

/*:
 * @plugindesc Добавляет команду "Убеждение" в бой.
 * @author Phantasma Hotel
 *
 * @param Persuasion Command Name
 * @type string
 * @default Убеждение
 *
 * @param Command Position
 * @type number
 * @default 2
 *
 * @param Base Chance
 * @type number
 * @default 30
 *
 * @param Charisma Stat
 * @type select
 * @option 0 - HP
 * @option 1 - MP
 * @option 2 - ATK
 * @option 3 - DEF
 * @option 4 - MAT
 * @option 5 - MDF
 * @option 6 - AGI
 * @option 7 - LUK
 * @default 7
 *
 * @param Stat Multiplier
 * @type number
 * @default 2
 *
 * @param Enemy Luck Penalty
 * @type number
 * @default 1
 *
 * @param Persuasion Skill ID
 * @type skill
 * @default 1
 *
 * @help
 * Persuasion System
 */

var Imported = Imported || {};
Imported.PersuasionSystem = true;

var PS = PS || {};

var parameters = PluginManager.parameters('PersuasionSystem');
PS.PersuasionCommandName = String(parameters['Persuasion Command Name'] || 'Убеждение');
PS.CommandPosition = Number(parameters['Command Position'] || 2);
PS.BaseChance = Number(parameters['Base Chance'] || 30);
PS.CharismaStat = Number(parameters['Charisma Stat'] || 7);
PS.StatMultiplier = Number(parameters['Stat Multiplier'] || 2);
PS.EnemyLuckPenalty = Number(parameters['Enemy Luck Penalty'] || 1);
PS.PersuasionSkillId = Number(parameters['Persuasion Skill ID'] || 1);

//=============================================================================
// Window_ActorCommand
//=============================================================================

PS.Window_ActorCommand_addAttackCommand = Window_ActorCommand.prototype.addAttackCommand;
Window_ActorCommand.prototype.addAttackCommand = function() {
    PS.Window_ActorCommand_addAttackCommand.call(this);
    
    var alreadyAdded = this._list.some(function(item) {
        return item.symbol === 'persuasion';
    });
    
    if (!alreadyAdded) {
        this._list.splice(2, 0, {
            name: PS.PersuasionCommandName,
            symbol: 'persuasion',
            ext: null,
            enabled: true
        });
    }
};

//=============================================================================
// BattleManager - Патч update
//=============================================================================

// ← ← ← ВАЖНО: Патчим update для обработки убеждения
PS.BattleManager_update = BattleManager.update;
BattleManager.update = function() {
    // ← ← ← Если есть флаг persuading - обрабатываем
    if (this._persuading) {
        this._persuading = false;
        
        var actor = this.actor();
        var target = this.persuasionTarget;
        var success = this._persuasionSuccess;
        
        // Показываем сообщение
        if (success) {
            $gameMessage.add("Враг поддаётся убеждению и убегает!");
            target.die();
            target.hide();
            
            if ($gameTroop.isAllDead()) {
                this.endBattle(0);
                return;
            }
        } else {
            $gameMessage.add("Убеждение не удалось! Враг атакует в ответ!");
            target.addBuff(11, 1);
        }
        
        // Передаём ход
        this._phase = 'turn';
        this.endTurn();
        return;
    }
    
    PS.BattleManager_update.call(this);
};

//=============================================================================
// Scene_Battle
//=============================================================================

PS.Scene_Battle_createCommandWindow = Scene_Battle.prototype.createCommandWindow;
Scene_Battle.prototype.createCommandWindow = function() {
    PS.Scene_Battle_createCommandWindow.call(this);
    this._commandWindow.setHandler('persuasion', this.onPersuasion.bind(this));
};

// ← ← ← ПОЛНОСТЬЮ ПЕРЕПИСАНО
Scene_Battle.prototype.onPersuasion = function() {
    var actor = BattleManager.actor();
    var target = $gameTroop.aliveMembers()[0];
    
    if (!target) {
        SoundManager.playBuzzer();
        this._commandWindow.activate();
        return;
    }
    
    // Рассчитываем шанс
    var baseChance = PS.BaseChance;
    var statValue = actor.param(PS.CharismaStat);
    var statBonus = statValue * PS.StatMultiplier;
    var enemyLuckPenalty = target.luk * PS.EnemyLuckPenalty;
    var finalChance = Math.max(5, Math.min(95, baseChance + statBonus - enemyLuckPenalty));
    
    // Бросок
    var roll = Math.random() * 100;
    var success = roll < finalChance;
    
    // Переменные
    $gameVariables.setValue(1, actor.actorId());
    $gameVariables.setValue(2, target.enemyId());
    $gameVariables.setValue(3, finalChance);
    $gameVariables.setValue(4, Math.floor(roll));
    $gameVariables.setValue(5, success ? 1 : 0);
    $gameVariables.setValue(6, actor.luk);
    $gameVariables.setValue(7, actor.level);
    $gameVariables.setValue(8, target.luk);
    
    // Проверяем общее событие
    var commonEventId = this.getPersuasionEventId(target);
    
    if (commonEventId > 0) {
        BattleManager.persuasionTarget = target;
        $gameTemp.reserveCommonEvent(commonEventId);
        this.endCommandSelection();
    } else {
        // ← ← ← СТАНДАРТНАЯ ЛОГИКА ЧЕРЕЗ ФЛАГ
        BattleManager._persuading = true;
        BattleManager._persuasionSuccess = success;
        BattleManager.persuasionTarget = target;
        
        // Закрываем меню
        this.endCommandSelection();
    }
};

Scene_Battle.prototype.getPersuasionEventId = function(target) {
    var enemy = $dataEnemies[target.enemyId()];
    var note = enemy.note;
    
    var match = note.match(/<PersuasionEvent:[ ]*(\d+)>/i);
    if (match) {
        return parseInt(match[1]);
    }
    
    match = note.match(/<Убеждение:[ ]*(\d+)>/i);
    if (match) {
        return parseInt(match[1]);
    }
    
    return 0;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

PS.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    PS.Game_Interpreter_pluginCommand.call(this, command, args);
    
    if (command === 'SetPersuasionSkill') {
        PS.PersuasionSkillId = parseInt(args[0]);
    }
    
    if (command === 'PersuasionSuccess') {
        var target = BattleManager.persuasionTarget;
        if (target) {
            target.die();
            target.hide();
            if ($gameTroop.isAllDead()) {
                BattleManager.endBattle(0);
            }
        }
    }
    
    if (command === 'PersuasionFail') {
        var target = BattleManager.persuasionTarget;
        if (target) {
            target.addBuff(11, 1);
        }
    }
};