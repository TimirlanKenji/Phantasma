/*
Title: Game Time. Switches
Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
Site: http://dk-plugins.ru/
Group in VK: http://vk.com/dkplugins
Version: 1.0
Release: 08.06.2016
First release: 08.06.2016
Supported languages: Russian, English
*/

/*ru
Название: Время. Переключатели
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Сайт: http://dk-plugins.ru/
Группа ВК: http://vk.com/dkplugins
Версия: 1.0
Релиз: 08.06.2016
Первый релиз: 08.06.2016
Поддерживаемые языки: Русский, Английский
*/

var Game_Time_Switches = [];
var DKLocalization = DKLocalization || {};

//===========================================================================
// Настройки плагина
// Plugin settings
//===========================================================================

// Настройка переключателей
// Switches settings

// Инструкция
// Instruction

/*
// Game_Time_Switches[ID] = { switch: switch_id, mode: mode, start_hour: hour, end_hour: hour, active: active };
// ID - Number of the settings of switch (strictly in order, starting with 0)
// switch_id - switch number
// mode - Working mode. 'on' - turn on the switch, 'off' - turn off the switch 
// start_hour - Hour when switch start working 
// end_hour - Hour when switch end of work
// active - Activity of setting. true - work, false - not work

// Example1: Game_Time_Switches[0] = { switch: 1, mode: 'on', start_hour: 18, end_hour: 20, active: true };
// ID = 0
// Switch with number 1 will turned on from 18 and will work to 20 hour. At 20 hour will turned off.

// Example2: Game_Time_Switches[1] = { switch: 3, mode: 'off', start_hour: 10, end_hour: 18, active: true };
// ID = 1
// Switch with number 3 will turned off from 10 and will work to 18 hour. At 18 hour will turned on. 
*/

/*ru
// Game_Time_Switches[ID] = { switch: switch_id, mode: mode, start_hour: hour, end_hour: hour, active: active };
// ID - Номер настройки переключателя (строго по порядку, начиня с 0)
// switch_id - Номер переключателя
// mode - Режим работы. 'on' - включить переключатель, 'off' - выключить переключатель
// start_hour - С какого часа начинается работа переключателя
// end_hour - До какого часа длится работа переключателя
// active - Активность настройки. true - работает, false - не работает

// Пример1: Game_Time_Switches[0] = { switch: 1, mode: 'on', start_hour: 18, end_hour: 20, active: true };
// ID = 0
// Переключатель с номером 1 будет включаться с 18 часов и будет работать до 20 часов. В 20 часов включится

// Пример2: Game_Time_Switches[1] = { switch: 3, mode: 'off', start_hour: 10, end_hour: 18, active: true };
// ID = 1
// Переключатель с номером 3 будет выключаться с 10 часов и будет выключен до 18 часов. В 18 часов включится
*/

Game_Time_Switches[0] = { switch: 1, mode: 'on', start_hour: 18, end_hour: 20, active: true };
//Game_Time_Switches[1] = { switch: 2, mode: 'on', start_hour: 20, end_hour: 6, active: true };
//Game_Time_Switches[2] = { switch: 3, mode: 'off', start_hour: 10, end_hour: 18, active: true };

// Настройки перевода
// Translation settings

// Инструкция
// Instruction

// Язык плагина: перевод
// Plugin language: translation

DKLocalization.DKCore_Game_Time_Switches = {
    DKCore_imported_error: {
        ru: 'Отсутствует плагин "DKCore"! Плагин "DKCore_Game_Time_Switches" не будет работать!',
        en: 'No plugin "DKCore"! Plugin "DKCore_Game_Time_Switches" will not work!'
    },
    DKCore_Game_Time_imported_error: {
        ru: 'Отсутствует плагин "DKCore_Game_Time"! Плагин "DKCore_Game_Time_Switches" не будет работать!',
        en: 'No plugin "DKCore_Game_Time"! Plugin "DKCore_Game_Time_Switches" will not work!'
    }
};

//===========================================================================
// Конец настройки плагина
// End of plugin settings
//===========================================================================

/*:
 * @plugindesc v.1.0 Allow to control the switches depending on game time
 * @author DK (Denis Kuznetsov)
 * @help

 ### Info about plugin ###
 Title: DKCore_Game_Time_Switches
 Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
 Site: http://dk-plugins.ru/
 Group in VK: http://vk.com/dkplugins
 Version: 1.0
 Release: 08.06.2016
 First release: 08.06.2016
 Supported languages: Russian, English

 ### Requirement for plugin ###
 Availability of working plugin DKCore version 1.71 or above
 Availability of working plugin DKCore_Game_Time version 1.5 or above

 ### Warning ###
 The plugin contains the translation settings in the file

 Be careful with downloading plugins to the project folder
 Some plugins have settings in his file
 At update this settings can be overwritten

 ### Instruction ###
 Open the DKCore_Game_Time_Switches.js and customize switches within the field "Plugin settings"

 Plugin commands:
 1. Turn on the switch operation
 EnableGameTimeSwitch [ID]
 ID - Number of the settings of switch from Game_Time_Switches[ID]

 2. Turn off switch operation
 DisableGameTimeSwitch [ID]
 ID - Номер настройки переключателя из Game_Time_Switches[ID]

 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 * @param Plugin Language
 * @desc Plugin language (ru - russian, en - english)
 * @default en
*/

/*:ru
 * @plugindesc v.1.0 Позволяет управлять переключателями в зависимости от игрового времени
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DKCore_Game_Time_Switches
 Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
 Сайт: http://dk-plugins.ru/
 Группа ВК: http://vk.com/dkplugins
 Версия: 1.0
 Релиз: 08.06.2016
 Первый релиз: 08.06.2016
 Поддерживаемые языки: Русский, Английский

 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.71 или выше
 Наличие включенного плагина DKCore_Game_Time версии 1.5 или выше

 ### Внимание ###
 Плагин содержит настройки перевода внутри файла

 Будьте внимательны при скачивании плагинов в папку проекта
 Некоторые плагины имеют настройки в самом файле
 При обновлении эти настройки могут быть перезаписаны

 ### Инструкция ###
 Открыть DKCore_Game_Time_Switches.js и настроить переключатели внутри поля "Настройки плагина"

 Команды плагина:
 1. Включить работу переключателя
 EnableGameTimeSwitch [ID]
 ID - Номер настройки переключателя из Game_Time_Switches[ID]

 2. Выключить работу переключателя
 DisableGameTimeSwitch [ID]
 ID - Номер настройки переключателя из Game_Time_Switches[ID]

 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Plugin Language
 * @desc Язык плагина (ru - русский, en - английский)
 * @default ru
*/

var Imported = Imported || {};
Imported.DKCore_Game_Time_Switches = true;

var DKVersion = DKVersion || {};
DKVersion.DKCore_Game_Time_Switches = 1.0;

var DKLocale = DKLocale || {};

var GameTimeSwitchesParam = {};
GameTimeSwitchesParam.param = PluginManager.parameters('DKCore_Game_Time_Switches');

DKLocale.DKCore_Game_Time_Switches = GameTimeSwitchesParam.param['Plugin Language'];

if (!Imported.DKCore)
    throw new Error(DKLocalization['DKCore_Game_Time_Switches']['DKCore_imported_error'][DKLocale.DKCore_Game_Time_Switches]);

if (!Imported.DKCore_Game_Time)
    throw new Error(DKLocalization['DKCore_Game_Time_Switches']['DKCore_Game_Time_imported_error'][DKLocale.DKCore_Game_Time_Switches]);

//===========================================================================
// Scene Map
//===========================================================================

var Game_Time_Switches_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    Game_Time_Switches_Scene_Map_update.call(this);
    this.checkGameTimeSwitches();
};

Scene_Map.prototype.checkGameTimeSwitches = function() {
    if (!$Game_Time) return;
    for(var i = 0; i < Game_Time_Switches.length; i++)
    {
        var object = Game_Time_Switches[i];
        if (!object) continue;
        if (!object.active) continue;
        if (object.switch < 1) continue;
        var state = $gameSwitches.value(object.switch);
        var hour = $Game_Time.hour;
        var condition;
        if (object.start_hour > object.end_hour)
            condition = hour >= object.start_hour || hour < object.end_hour;
        else
            condition = hour >= object.start_hour && hour < object.end_hour;
        if (condition)
        {
            if ((state && object.mode === 'on') || (!state && object.mode === 'off')) continue;
            if (!state && object.mode === 'on') $gameSwitches.setValue(object.switch, true);
            if (state && object.mode === 'off') $gameSwitches.setValue(object.switch, false);
        }
        else
        {
            if ((!state && object.mode === 'on') || (state && object.mode === 'off')) continue;
            if (!state && object.mode === 'off') $gameSwitches.setValue(object.switch, true);
            if (state && object.mode === 'on') $gameSwitches.setValue(object.switch, false);
        }
    }
};

//===========================================================================
// Game Interpreter
//===========================================================================

var Game_Time_Switches_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Game_Time_Switches_Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'EnableGameTimeSwitch') Game_Time_Switches[Number(args[0])].active = true;
    if (command === 'DisableGameTimeSwitch') Game_Time_Switches[Number(args[0])].active = false;
};

//=============================================================================
// Data Manager
//=============================================================================

var Game_Time_Switches_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	var contents = Game_Time_Switches_DataManager_makeSaveContents.call(this);
	contents.Game_Time_Switches = Game_Time_Switches;
	return contents;
};

var Game_Time_Switches_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	Game_Time_Switches_DataManager_extractSaveContents.call(this, contents);
	if (contents.Game_Time) Game_Time_Switches = contents.Game_Time_Switches;
};