/*
Title: Skip Title Screen
Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
Site: http://dk-plugins.ru/
Group in VK: http://vk.com/dkplugins
Version: 1.2
Release: 09.06.2016
First release: 23.11.2015
Supported languages: Russian, English
*/

/*ru
Название: Пропуск Титульного Экрана
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Сайт: http://dk-plugins.ru/
Группа ВК: http://vk.com/dkplugins
Версия: 1.2
Релиз: 09.06.2016
Первый релиз: 23.11.2015
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.1.2 Skip the title screen
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DK_Skip_Title_Screen
 Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
 Site: http://dk-plugins.ru/
 VK Group: http://vk.com/dkplugins
 Version: 1.2
 Release: 09.06.2016
 First release: 23.11.2015
 Supported languages: Russian, English
 
 ### License and terms of use plugin ###
 You can:
 -Free to use this plugin for non-commercial and commercial projects
 -Translate the plugin on other languages (please advise if you have translated the plugin into another language)
 
 You can't:
 -Remove or change any information about the plugin (name, author, contact information, version, and release date)
 -Change the code plugin outside of "plugin settings" and "End of the plugin settings" (if you find a bug, write to me about it)

 * @param Scene Name
 * @desc Name of scene which will be launched instead the title screen. Standard: Scene_Map
 * @default Scene_Map

 * @param Skip Saves
 * @desc Does it need skip the title screen if save files has exist? (true or false)
 * @default false
*/

/*:ru
* @plugindesc v.1.2 Пропуск титульного экрана
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DK_Skip_Title_Screen
 Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
 Сайт: http://dk-plugins.ru/
 Группа ВК: http://vk.com/dkplugins
 Версия: 1.2
 Релиз: 09.06.2016
 Первый релиз: 23.11.2015
 Поддерживаемые языки: Русский, Английский
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)

 * @param Scene Name
 * @desc Название сцены, которая запускается вместо титульного экрана. Стандартно: Scene_Map
 * @default Scene_Map

 * @param Skip Saves
 * @desc Пропускать титульный экран, если есть сохранения ?
 (true - да, false - нет)
 * @default false

*/

var Imported = Imported || {};
Imported.DK_Skip_Title_Screen = true;

var DKVersion = DKVersion || {};
DKVersion.DK_Skip_Title_Screen = 1.2;

var SkipTitleScreenParam = {};
SkipTitleScreenParam.param = PluginManager.parameters('DK_Skip_Title_Screen');

SkipTitleScreenParam.scene_name = SkipTitleScreenParam.param['Scene Name'];
SkipTitleScreenParam.skip_saves = SkipTitleScreenParam.param['Skip Saves'] === 'true';


var Skip_Scene_Title_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	Skip_Scene_Title_Scene_Boot_start.call(this);
	var save_exists = DataManager.isAnySavefileExists();
	if (!DataManager.isBattleTest() && !DataManager.isEventTest() && ((save_exists && SkipTitleScreenParam.skip_saves) || !save_exists))
		SceneManager.goto(window[SkipTitleScreenParam.scene_name]);
};