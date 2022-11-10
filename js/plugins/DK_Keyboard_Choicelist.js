/*
Название: Выбор Ответа с Клавиатуры (Keyboard Choicelist)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Сайт: http://dk-plugins.ru/
Версия: 1.1
Релиз: 20.02.2016
Первый релиз: 04.02.2016
*/

/*:
 * @plugindesc v.1.1 Позволяет клавишами 1-6 выбирать ответ из списка
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DK_Keyboard_Choicelist
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 1.1
 Релиз: 20.02.2016
 Первый релиз: 04.02.2016
 
 ### Требования к плагину ###
 Наличие включенного плагина DK_Full_Input версии 1.1 или выше
 
 ### Важная информация ###
 Плагин DK_Full_Input требуется, потому что для выбора ответа
 используются символы клавиш '1', '2', '3', '4', '5', '6'
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 */
 
 var Imported = Imported || {};
Imported.DK_Keyboard_Choicelist = true;

var DKVersion = DKVersion || {};
DKVersion.DK_Keyboard_Choicelist = 1.1;

//===========================================================================
// Window ChoiceList
//===========================================================================

var Choicelist_Window_ChoiceList_maxChoiceWidth = Window_ChoiceList.prototype.maxChoiceWidth;
Window_ChoiceList.prototype.maxChoiceWidth = function() {
	var choices = $gameMessage._choices;
	if (!choices) return Choicelist_Window_ChoiceList_maxChoiceWidth.call(this);
	for(var i = 0; i < choices.length; i++)
	{
		var choice = choices[i];
		var text = (i + 1) + '. ';
		if (choice.indexOf(text) === 0) continue;
		choices[i] = text + choice;
	}
	return Choicelist_Window_ChoiceList_maxChoiceWidth.call(this);
};

var Choicelist_Window_ChoiceList_update = Window_ChoiceList.prototype.update;
Window_ChoiceList.prototype.update = function() {
	Choicelist_Window_ChoiceList_update.call(this);
	this.processKeyboardInput();
};

Window_ChoiceList.prototype.processKeyboardInput = function() {
	var choices = $gameMessage.choices();
	var selected = this.index();
	for(var i = 0; i < choices.length; i++)
	{
		var key = (i + 1) + '';
		if (Input.isTriggered(key))
		{
			if (selected === i)
				return this.processOk();
			else
				return this.select(i);
		}
	}
};