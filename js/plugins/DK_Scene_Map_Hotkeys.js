/*
Название: Горячие Клавиши на Карте (Scene Map Hotkeys)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Сайт: http://dk-plugins.ru/
Версия: 2.0
Релиз: 25.03.2016
Первый релиз: 03.02.2016
*/

//===========================================================================
// Настройка плагина
//===========================================================================

// Настройка горячих клавиш

// Доступные команды:
// actions - список совершаемых действий (указываются в кавычках через запятую)
// filters - список условий, при которых срабатывают действия (указываются в кавычках через запятую)
// map_filters - список карт, на которых не работает клавиша (указываются без кавычек через запятую)
// active - активна команда или нет (true/false)


// Actions:
// scene: название_сцены
// Пример: scene: Scene_Menu

// common_event: номер_общего_события
// Пример: common_event: 1

// switch_номер_переключателя: switch (переключить) или on (включить), или off (выключить)
// Пример: switch_1: on
// Пример: switch_2: switch
// Пример: switch_3: off

// variable_номер_переменной: режим_значение
// Режимы:
// set - установить 
// add - сложение
// sub - вычитание
// mul - умножение
// div - деление
// mod - остаток от деления
// Значения:
// Постоянное значение
// Пример: variable_1: set_1 (установит 1 переменной значение 1)
// Другая переменная
// Пример: variable_1: add_variable_2 (добавит 1 переменной значение 2 переменной)
// Случайное значение
// Пример: variable_1: sub_random_2_5 (вычесть из 1 переменной случайное значение из диапазона 2 - 5)
// Скрипт
// Пример: variable_1: mul_$gameMap.mapId() (умножит 1 переменную на номер карты)

// self_switch_переключатель: map_номер_карты_event_номер_события_режим
// Переключатель: А, B, C, D
// Режим: on (включить), off (выключить)
// Пример: self_switch_A: map_1_event_5_on
// Пример: self_switch_B: map_2_event_3_off

// script: script
// Пример: script: console.log('Hello, World!')


// Filters:
// 2 переключателя
// switch_номер_переключателя == switch_номер_переключателя
// Пример: switch_1 == switch_2

// 1 переключатель и постоянное значение
// switch_номер_переключателя == true/false
// Пример: switch_1 == true

// 1 переключатель и скрипт
// switch_номер_переключателя == script
// Пример: switch_1 == ($gameParty.gold() == 100)

// 2 переменные
// variable_номер_переменной условие variable_номер_переменной
// Условия: >, >=, ==, !=, <, <=
// Пример: variable_1 > variable_2
// Пример: variable_1 == variable_3

// 1 переменная и постоянное значение
// variable_номер_переменной условие значние
// Пример: variable_1 < 100

// 1 переменная и скрипт
// variable_номер_переменной условие скрипт
// Пример: variable_1 > $gameParty.gold()

// 2 скрипта
// script условие script
// Пример: $gameParty.gold() != $gameMap.mapId()


// Map filters:
// Номера карт указываются через запятую
// Пример: map_filters: [1, 2, 3] - на картах 1, 2, 3 клавиша выключена

// Active
// Логическое значение true или false
// Если false - клавиша выключена

// Скрипт для включения клавиши
// this.activateMapHotkey(key);
// key - символ клавиши, код клавиши клавиатуры или геймпада
// Пример: this.activateMapHotkey('i')

// Скрипт для выключения клавиши
// this.deactivateMapHotkey(key);
// key - символ клавиши, код клавиши клавиатуры или геймпада
// Пример: this.deactivateMapHotkey('i')

// Скрипт для проверки состояния клавиши
// this.mapHotkeyIsActive(key);
// key - символ клавиши, код клавиши клавиатуры или геймпада
// Пример: this.mapHotkeyIsActive('i')
// Возвращает логическое true или false

// Готовый пример:
// 'i': { actions: ['common_event: 1', 'switch_1: on'], filters: ['switch_1 == false'], map_filters: [], active: true }
// Клавиша - 'i'
// actions - вызов общего события 1, включить переключатель 1
// filters - сработает, если переключатель 1 выключен
// map_filters - пусто (доступно на любой карте)
// active - клавиша включена


// Можно использовать символ клавиши, код клавиши клавиатуры или геймпада
// символ клавиши : { actions: [список действий], filters: [список фильтров], map_filters: [список карт], active: true или false }
// keyboard_ + код клавиши (клавиатуры): { actions: [список действий], filters: [список фильтров], map_filters: [список карт], active: true или false }
// gamepad_ + код клавиши (геймпада): { actions: [список действий], filters: [список фильтров], map_filters: [список карт], active: true или false }
// filters и map_filters могут быть пустыми: filters: [], map_filters: []
// Если у Вас более одной клавиши, не забудьте в конце фигурной скобки } поставить запятую
// Пример:
// var SCENE_MAP_HOTKEYS = {
// 'q': { actions: [], filters: [], map_filters: [], active: true },
// 'w': { actions: [], filters: [], map_filters: [], active: true }
// };

var SCENE_MAP_HOTKEYS = {
	'i': { actions: ['scene: Scene_Item'], filters: [], map_filters: [], active: true },
};

//===========================================================================
// Конец настройки плагина
//===========================================================================

/*:
* @plugindesc v.2.0 Настройка горячих клавиш для вызова сцен, событий, скриптов, изменения переменных и переключателей на карте игры
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DK_Scene_Map_Hotkeys
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 2.0
 Релиз: 25.03.2016
 Первый релиз: 03.02.2016
 
 ### Требования к плагину ###
 Наличие включенного плагина DK_Full_Input версии 1.1 или выше
 
 ### Инструкция ###
 Открыть js файл и настроить горячие клавиши
 
 Скрипт для включения клавиши
 this.activateMapHotkey(key);
 key - символ клавиши, код клавиши клавиатуры или геймпада
 Пример: this.activateMapHotkey('i')

 Скрипт для выключения клавиши
 this.deactivateMapHotkey(key);
 key - символ клавиши, код клавиши клавиатуры или геймпада
 Пример: this.deactivateMapHotkey('i')

 Скрипт для проверки состояния клавиши
 this.mapHotkeyIsActive(key);
 key - символ клавиши, код клавиши клавиатуры или геймпада
 Пример: this.mapHotkeyIsActive('i')
 Возвращает логическое true или false
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
*/

var Imported = Imported || {};
Imported.DK_Scene_Map_Hotkeys = true;

var DKVersion = DKVersion || {};
DKVersion.DK_Scene_Map_Hotkeys = 2.0;

//=============================================================================
// Scene Map
//=============================================================================

var Scene_Map_Hotkeys_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	Scene_Map_Hotkeys_Scene_Map_update.call(this);
	if (Imported.DK_Full_Input && DKVersion.DK_Full_Input >= 1.1) this.checkSceneMapHotkeys();
};

Scene_Map.prototype.checkSceneMapHotkeys = function() {
	var keys = Object.keys(SCENE_MAP_HOTKEYS);
	for(var i = 0; i < keys.length; i++)
	{
		var key = keys[i];
		var properties = SCENE_MAP_HOTKEYS[key];
		var map_id = $gameMap.mapId();
		if (!properties['active']) continue;
		if (!this.checkHotkeyTriggered(key)) continue;
		if (properties['map_filters'].contains(map_id)) continue;
		if (!this.checkHotkeyFilters(properties['filters'])) continue;
		this.makeHotkeyActions(properties['actions']);
	}
};

Scene_Map.prototype.checkHotkeyTriggered = function(key) {
	var keyboard_regexp = /[\s]*keyboard_(\d+)[\s]*/i;
	var gamepad_regexp = /[\s]*gamepad_(\d+)[\s]*/i;
	if (key.match(keyboard_regexp))
	{
		if (Input.keyTriggered(RegExp.$1))
			return true;
	}
	else if (key.match(gamepad_regexp))
	{
		if (Input.keyTriggered(null, RegExp.$1))
			return true;
	}
	else
	{
		if (Input.isTriggered(key))
			return true;
	}
	return false;
};

Scene_Map.prototype.checkHotkeyFilters = function(filters) {
	if (filters == null) return true;
	var two_switches_regexp = /[\s]*switch_(\d+)[\s]*==[\s]*switch_(\d+)[\s]*/i;
	var one_switch_regexp = /[\s]*switch_(\d+)[\s]*==[\s]*(.[^\s]+)[\s]*/i;
	var two_variables_regexp = /[\s]*variable_(\d+)[\s]*(.{1,2})[\s]*variable_(\d+)[\s]*/i;
	var one_variable_regexp = /[\s]*variable_(\d+)[\s]*(.{1,2})[\s]*(.[^\s]+)[\s]*/i;
	var scripts_regexp = /[\s]*(.[^\s]+)[\s]*(.{1,2})[\s]*(.[^\s]+)[\s]*/i;
	var equal = '===';
	for(var i = 0; i < filters.length; i++)
	{
		var filter = filters[i];
		var text = 'false';
		if (filter.match(two_switches_regexp))
		{
			var switch1 = Number(RegExp.$1);
			var switch2 = Number(RegExp.$2);
			text = '$gameSwitches.value(' + switch1 + ')' + equal + '$gameSwitches.value(' + switch2 + ')';
		}
		else if (filter.match(one_switch_regexp))
		{
			var id = RegExp.$1;
			var value = RegExp.$2;
			text = '$gameSwitches.value(' + id + ')' + equal + value;
		}
		else if (filter.match(two_variables_regexp))
		{
			var var1 = Number(RegExp.$1);
			var value = RegExp.$2;
			var var2 = Number(RegExp.$3);
			text = '$gameVariables.value(' + var1 + ')' + value + '$gameVariables.value(' + var2 + ')';
		}
		else if (filter.match(one_variable_regexp))
		{
			var id = Number(RegExp.$1);
			var value = RegExp.$2;
			var text1 = RegExp.$3;
			text = '$gameVariables.value(' + id + ')' + value + text1;
			p(text);
		}
		else if (filter.match(scripts_regexp))
		{
			var text1 = RegExp.$1;
			var value = RegExp.$2;
			var text2 = RegExp.$3;
			text = text1 + value + text2;
		}
		if (!eval(text)) return false;
	}
	return true;
};

Scene_Map.prototype.makeHotkeyActions = function(actions) {
	if (actions == null) return;
	var regexp = [/[\s]*scene:[\s]*(\w+)[\s]*/i, /[\s]*common_event:[\s]*(\w+)[\s]*/i, /[\s]*switch_(\d+):[\s]*(\w+)[\s]*/i, /[\s]*variable_(\d+):[\s]*(.[^\s]+)[\s]*/i, /[\s]*self_switch_(\w+):[\s]*(.[^\s]+)[\s]*/i, /[\s]*script:[\s]*(.+)/i];
	for(var i = 0; i < actions.length; i++)
	{
		var action = actions[i];
		for(var j = 0; j < regexp.length; j++)
		{
			if (action.match(regexp[j]))
			{
				switch(j)
				{
					case 0: // scene
					{
						SceneManager.push(window[RegExp.$1]);
						break;
					}
					case 1: // common event
					{
						$gameTemp.reserveCommonEvent(Number(RegExp.$1));
						break;
					}
					case 2: // switches
					{
						var id = Number(RegExp.$1);
						var mode = RegExp.$2;
						switch(mode)
						{
							case 'switch':
							{
								var last_value = $gameSwitches.value(id);
								$gameSwitches.setValue(id, !last_value);
								break;
							}
							case 'on':
							{
								$gameSwitches.setValue(id, true);
								break;
							}
							case 'off':
							{
								$gameSwitches.setValue(id, true);
								break;
							}
						} // switch(mode)
						break;
					}
					case 3: // variables
					{
						var id = Number(RegExp.$1);
						var action_properties = RegExp.$2;
						var action_properties_regexp = /(set|add|sub|mul|div|mod)_(\d|.[^\s]+)/i;
						if (action_properties.match(action_properties_regexp))
						{
							var variable_regexp = /variable_(\d+)/i;
							var random_regexp = /random_(\d+)_(\d+)/i;
							var last_value = $gameVariables.value(id);
							var value_for_set = last_value;
							var regexp_value = last_value;
							var operation = RegExp.$1;
							var value = RegExp.$2;
							var number_value = Number(value);
							try
							{
								var eval_value = Number(eval(value));
							}
							catch(e)
							{
								var eval_value = NaN;
							}
							if (!Number.isNaN(number_value))
								regexp_value = number_value;
							else if (value.match(variable_regexp))
								regexp_value = $gameVariables.value(Number(RegExp.$1));
							else if (value.match(random_regexp))
							{
								var min = Number(RegExp.$1);
								var max = Number(RegExp.$2);
								regexp_value = min + Math.randomInt(max - min + 1);
							}
							else if (!Number.isNaN(eval_value))
								regexp_value = eval_value;
							switch(operation)
							{
								case 'set':
								{
									value_for_set = regexp_value;
									break;
								}
								case 'add':
								{
									value_for_set += regexp_value;
									break;
								}
								case 'sub':
								{
									value_for_set -= regexp_value;
									break;
								}
								case 'mul':
								{
									value_for_set *= regexp_value;
									break;
								}
								case 'div':
								{
									value_for_set /= regexp_value;
									break;
								}
								case 'mod':
								{
									value_for_set %= regexp_value;
									break;
								}
							} // switch(operation)
							$gameVariables.setValue(id, value_for_set);
						}
						break;
					}
					case 4: // self switches
					{
						var self_switch = RegExp.$1;
						var properties = RegExp.$2;
						var properties_regexp = /[\s]*map_(\d+)_event_(\d+)_(on|off)[\s]*/i;
						if (properties.match(properties_regexp))
						{
							var info = [Number(RegExp.$1), Number(RegExp.$2), self_switch];
							$gameSelfSwitches.setValue(info, RegExp.$3 === 'on');
						}
						break;
					}
					case 5: // scripts
					{
						eval(RegExp.$1);
						break;
					}
				}
			}
		}
	}
};

//=============================================================================
// Game Interpreter
//=============================================================================

Game_Interpreter.prototype.activateMapHotkey = function(key) {
	if (!SCENE_MAP_HOTKEYS.hasOwnProperty(key)) return;
	SCENE_MAP_HOTKEYS[key].active = true;
};

Game_Interpreter.prototype.deactivateMapHotkey = function(key) {
	if (!SCENE_MAP_HOTKEYS.hasOwnProperty(key)) return;
	SCENE_MAP_HOTKEYS[key].active = false;
};

Game_Interpreter.prototype.mapHotkeyIsActive = function(key) {
	if (!SCENE_MAP_HOTKEYS.hasOwnProperty(key)) return false;
	return SCENE_MAP_HOTKEYS[key].active;
};