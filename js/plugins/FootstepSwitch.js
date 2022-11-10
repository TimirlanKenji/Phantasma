//=============================================================================
// FootstepSwitch.js
//=============================================================================

/*:
 * @plugindesc Allow disabling footstep sounds
 * @author Garbata Team
 * @help This plugin adds a switch that allows to disable
 * any footsteps added by the YEP_FootstepSounds plugin.
 *
 * This plugin is placed into public domain according to the CC0 public domain
 * dedication. See https://creativecommons.org/publicdomain/zero/1.0/ for more
 * information.
 *
 * @param Option Name
 * @desc Name of the param on the config screen
 * @default Disable Footstep Sounds
 */
/*:ru
 * @plugindesc Разрешает отключать звуки шагов
 * @author Команда Гарбата
 * @help Данный плагин добавляет опцию в настройки, чтобы отключить все звуки
 * плагина YEP_FootstepSounds.
 *
 * Этот плагин передан в общественное достояние согласно CC0. Подробнее см. на
 * странице https://creativecommons.org/publicdomain/zero/1.0/deed.ru
 *
 * @param Option Name
 * @text Название опции
 * @desc Название параметра на экране настроек
 * @default Убрать звуки шагов
 */
/*:uk
 * @plugindesc Дозволяє вимикати звуки кроків
 * @author Команда Гарбата
 * @help Цей плагін додає опцію в налаштування, щоб вимкнути всі звуки плагіна
 * YEP_FootstepSounds.
 *
 * Цей плагін передано до суспільного надбання згідно з CC0. Детальніше див.
 * на сторінці https://creativecommons.org/publicdomain/zero/1.0/deed.uk
 *
 * @param Option Name
 * @text Назва опції
 * @desc Назва параметра на екрані налаштувань
 * @default Забрати звуки кроків
 */
/*:be
 * @plugindesc Дазваляе адключаць гукі крокаў
 * @author Каманда Гарбата
 * @help Гэты плагін дадае опцыю ў налады, каб выключыць усе гукі
 * плагіна YEP_FootstepSounds.
 *
 * Гэты плагін пярэданы ў грамадскі набытак згодна з CC0. Падрабязней гл. на
 * старонцы https://creativecommons.org/publicdomain/zero/1.0/deed.be
 *
 * @param Option Name
 * @text Назва опцыі
 * @desc Назва параметра на экране налад
 * @default Забраць гукі крокаў
 */

(function () {

rawParams = PluginManager.parameters('FootstepSwitch');
var optionName = String(rawParams['Option Name']);

/**
 * Adds sound-related options. Overwritten to add a switch for
 * footsteps.
 */
var Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
Window_Options.prototype.addVolumeOptions = function() {
	Window_Options_addVolumeOptions.call(this);
	this.addCommand(optionName, 'disableFootstepSounds');
};

/**
 * Returns true if the footsteps can be heard.
 */
var Game_System_canHearFootsteps = Game_System.prototype.canHearFootsteps;
Game_System.prototype.canHearFootsteps = function () {
	var result = false;
	if (Game_System_canHearFootsteps) {
		result = Game_System_canHearFootsteps.call(this);
	}
	
	return ConfigManager.disableFootstepSounds ? false : result;
}

/**
 * Reads the saved config info.
 */
var ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
  this.disableFootstepSounds = this.readFlag(config, 'disableFootstepSounds');
  ConfigManager_applyData.call(this, config);
}

/**
 * Writes the config info into the saved data
 */
ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
  var config = ConfigManager_makeData.call(this);
  config.disableFootstepSounds = this.disableFootstepSounds;
  return config;
}


})();