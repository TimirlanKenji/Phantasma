/*
Название: Настройки Новой Игры (New Game Settings)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Версия: 1.1
Релиз: 26.11.2015
Первый релиз: 25.11.2015
*/

//===========================================================================
// Настройка плагина
//===========================================================================

// Настройка переменных
// номер или название переменной : значение
var New_Game_Variables = {
};

// Настройка переключателей
// номер или название переключателя : значение (true - вкл., false - выкл.)
var New_Game_Switches = {
};

// Настройка локальных переключателей
// [ номер карты, номер события, переключатель, значение (true - вкл., false - выкл.) ]
var New_Game_SelfSwitches = [
];

// Настройка денег партии
var New_Game_Gold = 50000;

// Настройка предметов
// номер или название предмета : количество
var New_Game_Items = {
	'Настойка' : 20,
	2 : 10
};

// Настройка брони
// номер или название брони : количество
var New_Game_Armors = {
	1 : 2,
	2 : 3,
	5 : 6
};

// Настройка оружия
// номер или название оружия : количество
var New_Game_Weapons = {
	1 : 22,
	3 : 44
};

//===========================================================================
// Конец настройки плагина
//===========================================================================

/*:
* @plugindesc Позволяет настроить различные параметры новой игры
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DK_New_Game_Settings
 Автор: DK
 Сайт: http://vk.com/rpgmakervxaceandmv
 Версия: 1.1
 Релиз: 26.11.2015
 Первый релиз: 25.11.2015
 
 ### Инструкция ###
 Открыть js файл плагина и настроить параметры
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
*/

var Imported = Imported || {};
Imported.DK_New_Game_Settings = true;

DataManager.initNewGameVariables = function() {
	var keys = Object.keys(New_Game_Variables);
	keys.forEach(function(id) {
		if (Number(id))
			$gameVariables.setValue(id, New_Game_Variables[id]);
		else
		{
			var index = $dataSystem.variables.indexOf(id);
			if (index !== -1)
				$gameVariables.setValue(index, New_Game_Variables[id]);
		}
	}, this);
};

DataManager.initNewGameSwitches = function() {
	var keys = Object.keys(New_Game_Switches);
	keys.forEach(function(id) {
		if (Number(id))
			$gameSwitches.setValue(id, New_Game_Switches[id]);
		else
		{
			var index = $dataSystem.switches.indexOf(id);
			if (index !== -1)
				$gameSwitches.setValue(index, New_Game_Switches[id]);
		}
	}, this);
};

DataManager.initNewGameSelfSwitches = function() {
	for(var i = 0; i < New_Game_SelfSwitches.length; i++)
	{
		var key = New_Game_SelfSwitches[i];
		var preset = [ key[0], key[1], key[2] ];
		$gameSelfSwitches.setValue(preset, key[3]);
	}
};

DataManager.initNewGameAllItems = function(items, database) {
	var keys = Object.keys(items);
	var names = database.map(function(obj) { if (obj) return obj.name; else return null; });
	keys.forEach(function(id) {
		if (Number(id))
		{
			var item = database[id];
			var amount = items[id];
			$gameParty.gainItem(item, amount);
		}
		else
		{
			var index = names.indexOf(id);
			if (index !== -1)
			{
				var item = database[index];
				var amount = items[id];
				$gameParty.gainItem(item, amount);
			}
		}
	}, this);
};

DataManager.initNewGameSettings = function() {
	this.initNewGameVariables();
	this.initNewGameSwitches();
	this.initNewGameSelfSwitches();
	$gameParty.gainGold(New_Game_Gold);
	this.initNewGameAllItems(New_Game_Items, $dataItems);
	this.initNewGameAllItems(New_Game_Armors, $dataArmors);
	this.initNewGameAllItems(New_Game_Weapons, $dataWeapons);
};

var New_Game_Settings_DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function() {
	New_Game_Settings_DataManager_setupNewGame.call(this);
	this.initNewGameSettings();
};