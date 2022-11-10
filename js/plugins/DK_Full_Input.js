/*
Title: Full Input
Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
Site: http://dk-plugins.ru/
Group in VK: http://vk.com/dkplugins
Version: 2.0
Release: 15.07.2016
First release: 30.01.2016
Supported languages: Russian, English
*/

/*ru
Название: Полный Ввод
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Сайт: http://dk-plugins.ru/
Группа ВК: http://vk.com/dkplugins
Версия: 2.0
Релиз: 15.07.2016
Первый релиз: 30.01.2016
Поддерживаемые языки: Русский, Английский
*/

//===========================================================================
// Настройка плагина
// Plugin settings
//===========================================================================

// Настройка кодов клавиш клавиатуры
// Keyboard key codes settings

// Код клавиши: символ в кавычках
// Key code: symbol in quotes
Input.keyMapper = {
	8: 'backspace',	// backspace
    9: 'tab',		// tab
    13: 'ok',		// enter
    16: 'shift',	// shift
    17: 'control',	// control
    18: 'alt',  	// alt
	19: 'pause',	// pause
	20: 'capslock',	// capslock
    27: 'escape',   // escape
    32: 'space',	// space
    33: 'pageup',   // pageup
    34: 'pagedown', // pagedown
	35: 'end',		// end
	36: 'home',		// home
    37: 'left',     // left arrow
    38: 'up',       // up arrow
    39: 'right',    // right arrow
    40: 'down',     // down arrow
	44: 'printscreen',	// printscreen
    45: 'insert',   // insert
	46: 'delete',	// delete
	48: '0',		// 0
	49: '1',		// 1
	50: '2',		// 2
	51: '3',		// 3
	52: '4',		// 4
	53: '5',		// 5
	54: '6',		// 6
	55: '7',		// 7
	56: '8',		// 8
	57: '9',		// 9
	65: 'a',		// a ф
	66: 'b',		// b и
	67: 'c',		// c с
	68: 'd',		// d в
	69: 'e',		// e у
	70: 'f',		// f а
	71: 'g',		// g п
	72: 'h',		// h р
	73: 'i',		// i ш
	74: 'j',		// j о
	75: 'k',		// k л
	76: 'l',		// l д
	77: 'm',		// m ь
	78: 'n',		// n т
	79: 'o',		// o щ
	80: 'p',		// p з
    81: 'q',		// q й
	82: 'r',		// r к
	83: 's',		// s ы
	84: 't',		// t е
	85: 'u',		// u г
	86: 'v',		// v м
    87: 'w',		// w ц
    88: 'x',		// x ч
    90: 'z',		// z я
    96: 'escape',   // numpad 0
	97: 'numpad1',	// numpad 1
    98: 'down',     // numpad 2
	99: 'numpad3',	// numpad 3
    100: 'left',    // numpad 4
	101: 'numpad5',	// numpad 5
    102: 'right',   // numpad 6
	103: 'numpad7',	// numpad 7
    104: 'up',      // numpad 8
	105: 'numpad9', // numpad 9
	106: '*',		// *
	107: '+',		// +
	109: '-',		// -
	110: '.',		// .
	111: '/',		// /
	112: 'f1',		// F1
	113: 'f2',		// F2
	114: 'f3',		// F3
	115: 'f4',		// F4
	116: 'f5',		// F5
	117: 'f6',		// F6
	118: 'f7',		// F7
	119: 'f8',		// F8
    120: 'debug',   // F9
	121: 'f10',		// F10
	122: 'f11',		// F11
	123: 'f12',		// F12
	144: 'numlock',	// numlock
	145: 'scrolllock',	// scrolllock
	186: ';',		// :;ж
	187: '=',		// +=
	188: '<',		// <,Б
	189: '-',		// -_
	190: '>',		// >.Ю
	191: '?',		// /?,/.
	192: '`',		// ~`ё
	219: '[',		// {[х
	220: '|',		// |
	221: ']',		// }]ъ
	222: '"'		// "'э
};

// Настройка кодов клавиш геймпада
// Gamepad key codes settings

// Код клавиши: символ в кавычках
// Key code: symbol in quotes
Input.gamepadMapper = {
    0: 'ok',        // A
    1: 'cancel',    // B
    2: 'shift',     // X
    3: 'menu',      // Y
    4: 'pageup',    // LB (L1)
    5: 'pagedown',  // RB (R1)
	6: 'lt',		// LT (L2)
	7: 'rt',		// RT (R2)
	8: 'select',	// Select
	9: 'start',		// Start
	10: 'l3',		// L3 (Left Stick pressed)
	11: 'r3',		// R3 (Right Stick pressed)
    12: 'up',       // up arrow (D-pad)
    13: 'down',     // down arrow (D-pad)
    14: 'left',     // left arrow (D-pad)
    15: 'right',    // right arrow (D-pad)
	16: 'l_up',		// Left Stick up
	17: 'l_down',	// Left Stick down
	18: 'l_left',	// Left Stick left
	19: 'l_right',	// Left Stick right
	20: 'r_up',		// Right Stick up
	21: 'r_down',	// Right Stick down
	22: 'r_left',	// Right Stick left
	23: 'r_right'	// Right Stick right
};

//===========================================================================
// Конец настройки плагина
// End of plugin settings
//===========================================================================

/*:
* @plugindesc v.2.0 All keys on the keyboard and gamepad
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DK_Full_Input
 Author: DK (Denis Kuznetsov) (http://vk.com/id8137201)
 Site: http://dk-plugins.ru/
 VK Group: http://vk.com/dkplugins
 Version: 2.0
 Release: 15.07.2016
 First release: 30.01.2016
 Supported languages: Russian, English
 
 ### Changelog ###
 1.0 - Release
 1.1 - Changed the names of the functions
 2.0 - Added support for gamepad right stick,
 left stick separated from arrow keys and added a lot of function for keys check

 ### Warning ###
 The plugin contains the settings in the file

 Be careful with downloading plugins to the project folder
 Some plugins have settings in his file
 At update this settings can be overwritten
 
 ### Important information ###
 Default RPG Maker MV values for Alt, Space, Insert, Q, W, X, Z
 Alt: 'control'
 Space: 'ok'
 Insert: 'escape'
 Q: 'pageup'
 W: 'pagedown'
 X: 'escape'
 Z: 'ok'
 
 The values of this plugin for Alt, Space, Insert, Q, W, X, Z
 Alt: 'alt'
 Space: 'space'
 Insert: 'insert'
 Q: 'q'
 W: 'w'
 X: 'x'
 Z: 'z'

 Left stick of gamepad separated from keys of controls (arrows) and have him own settings
 Default values for left stick at RPG Maker MV: up, down, left, right
 Values for left stick at this plugin: l_up, l_down, l_left, l_right

 Values for right stick at this plugin: r_up, r_down, r_left, r_right

 ### Instruction ###
 Open DK_Full_Input.js and customize keys
 
 ### For developers ###
 All functions return name of pressed button
 If button was don't pressed, then function returns null

 return_code - return key code ? true or false
 If return_code is false, then will return name of button

 Added functions for check pressed key code:

 Input.keyPressed(code, gamepad_code, return_code)
 Input.keyTriggered(code, gamepad_code, return_code)
 Input.keyRepeated(code, gamepad_code, return_code)
 Input.keyLongPressed(code, gamepad_code, return_code)
 
 code - keyboard key code
 gamepad_code - gamepad key code

 If need check only gamepad, write null instead the codes

 Functions to check any directions of moving buttons:
 Checking is carried out for the symbols: up, down, left, right
 Input.anyDirectionPressed(return_code)
 Input.anyDirectionTriggered(return_code)
 Input.anyDirectionRepeated(return_code)
 Input.anyDirectionLongPressed(return_code)

 Functions to check deflection of left stick to any direction:
 Checking is carried out for the symbols: l_up, l_down, l_left, l_right
 Input.anyLDirectionPressed(return_code)
 Input.anyLDirectionTriggered(return_code)
 Input.anyLDirectionRepeated(return_code)
 Input.anyLDirectionLongPressed(return_code)

 Functions to check deflection of right stick to any direction:
 Checking is carried out for the symbols: r_up, r_down, r_left, r_right
 Input.anyRDirectionPressed(return_code)
 Input.anyRDirectionTriggered(return_code)
 Input.anyRDirectionRepeated(return_code)
 Input.anyRDirectionLongPressed(return_code)

 Functions to check one of many buttons with key codes:
 Input.anyKeyPressed(codes, gamepad_codes, return_code)
 Input.anyKeyTriggered(codes, gamepad_codes, return_code)
 Input.anyKeyRepeated(codes, gamepad_codes, return_code)
 Input.anyKeyLongPressed(codes, gamepad_codes, return_code)

 codes - array of codes keyboard buttons
 gamepad_codes - array of codes gamepad buttons

 If need check only gamepad, write null instead the code

 Functions to check one of many buttons with key names:
 Input.anyPressed(keys, return_code)
 Input.anyTriggered(keys, return_code)
 Input.anyRepeated(keys, return_code)
 Input.anyLongPressed(keys, return_code)

 keys - array of buttons name

 Functions to check pressing of any numbers:
 Input.anyNumberPressed(return_code)
 Input.anyNumberTriggered(return_code)
 Input.anyNumberRepeated(return_code)
 Input.anyNumberLongPressed(return_code)

 Functions to check pressing of any Numpad buttons:
 Input.anyNumpadPressed(return_code)
 Input.anyNumpadTriggered(return_code)
 Input.anyNumpadRepeated(return_code)
 Input.anyNumpadLongPressed(return_code)

 Functions to check pressing of any alphabet letters:
 Input.anyAlphabetPressed(return_code)
 Input.anyAlphabetTriggered(return_code)
 Input.anyAlphabetRepeated(return_code)
 Input.anyAlphabetLongPressed(return_code)

 Functions to check pressing of any F1-F12 button:
 Input.anyFPressed(return_code)
 Input.anyFTriggered(return_code)
 Input.anyFRepeated(return_code)
 Input.anyFLongPressed(return_code)
 
 Also added functions for checking pressed Backspace, Tab, Enter, Shift, Ctrl, Alt, Escape, Space

 Backspace:
 Input.BackspacePressed()
 Input.BackspaceTriggered()
 Input.BackspaceRepeated()
 Input.BackspaceLongPressed()

 Tab:
 Input.TabPressed()
 Input.TabTriggered()
 Input.TabRepeated()
 Input.TabLongPressed()

 Enter:
 Input.EnterPressed()
 Input.EnterTriggered()
 Input.EnterRepeated()
 Input.EnterLongPressed()

 Shift:
 Input.ShiftPressed()
 Input.ShiftTriggered()
 Input.ShiftRepeated()
 Input.ShiftLongPressed()

 Ctrl:
 Input.CtrlPressed()
 Input.CtrlTriggered()
 Input.CtrlRepeated()
 Input.CtrlLongPressed()

 Alt:
 Input.AltPressed()
 Input.AltTriggered()
 Input.AltRepeated()
 Input.AltLongPressed()

 Escape:
 Input.EscapePressed()
 Input.EscapeTriggered()
 Input.EscapeRepeated()
 Input.EscapeLongPressed()

 Space:
 Input.SpacePressed()
 Input.SpaceTriggered()
 Input.SpaceRepeated()
 Input.SpaceLongPressed()
 
 If you create a plugin based on this:
 Before using any function, make sure that the user has installed the plugin:
 if (Imported.DK_Full_Input)

 Get plugin version:
 var version = DKVersion.DK_Full_Input;

 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

*/

/*:ru
 * @plugindesc v.2.0 Использование всех кнопок клавиатуры и геймпада
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DK_Full_Input
 Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
 Сайт: http://dk-plugins.ru/
 Группа ВК: http://vk.com/dkplugins
 Версия: 2.0
 Релиз: 15.07.2016
 Первый релиз: 30.01.2016
 Поддерживаемые языки: Русский, Английский
 
 ### Что нового ###
 1.0 - Релиз
 1.1 - Сокращено название функций для облегчения работы с ними
 2.0 - Добавлена поддержка правого стика геймпада, отделен левый стик от стрелок геймпада
 и добавлено множество функций для проверки клавиш

 ### Внимание ###
 Плагин содержит настройки внутри файла

 Будьте внимательны при скачивании плагинов в папку проекта
 Некоторые плагины имеют настройки в самом файле
 При обновлении эти настройки могут быть перезаписаны

 ### Важная информация ###
 Изменено назначение следующих клавиш:
 Alt, Space, Insert, Q, W, X, Z
 
 Стандартные значения клавиш в RPG Maker MV для Alt, Space, Insert, Q, W, X, Z
 Alt: 'control'
 Space: 'ok'
 Insert: 'escape'
 Q: 'pageup'
 W: 'pagedown'
 X: 'escape'
 Z: 'ok'
 
 Значения для клавиш в этом плагине Alt, Space, Insert, Q, W, X, Z
 Alt: 'alt'
 Space: 'space'
 Insert: 'insert'
 Q: 'q'
 W: 'w'
 X: 'x'
 Z: 'z'

 Левый стик геймпада отделен от клавиш управления (стрелочек) и имеет свои настройки
 Стандартные значения для левого стика в RPG Maker MV: up, down, left, right
 Значения для левого стика в этом плагине: l_up, l_down, l_left, l_right

 Значения для правого стика в этом плагине: r_up, r_down, r_left, r_right
 
 ### Инструкция ###
 Открыть DK_Full_Input.js и изменить клавиши
 
 ### Для разработчиков ###
 Все функции возвращают название нажатой клавиши
 Если клавиша не была нажата, то функция возвращает null

 return_code - вернуть код клавиши ? true или false
 Если false, то будет возвращено название клавиши

 Добавлены функции проверки нажатия клавиш по коду:
 
 Input.keyPressed(code, gamepad_code, return_code)
 Input.keyTriggered(code, gamepad_code, return_code)
 Input.keyRepeated(code, gamepad_code, return_code)
 Input.keyLongPressed(code, gamepad_code, return_code)
 
 code - код клавиши клавиатуры
 gamepad_code - код клавиши геймпада

 Если нужно проверить только геймпад, то вместо code напишите null

 Функции проверки нажатия любого из направлений движения:
 Проверка осуществляется для символов: up, down, left, right
 Input.anyDirectionPressed(return_code)
 Input.anyDirectionTriggered(return_code)
 Input.anyDirectionRepeated(return_code)
 Input.anyDirectionLongPressed(return_code)

 Функции проверки отклонения левого стика в какую-либо сторону:
 Проверка осуществляется для символов: l_up, l_down, l_left, l_right
 Input.anyLDirectionPressed(return_code)
 Input.anyLDirectionTriggered(return_code)
 Input.anyLDirectionRepeated(return_code)
 Input.anyLDirectionLongPressed(return_code)

 Функции проверки отклонения правого стика в какую-либо сторону:
 Проверка осуществляется для символов: r_up, r_down, r_left, r_right
 Input.anyRDirectionPressed(return_code)
 Input.anyRDirectionTriggered(return_code)
 Input.anyRDirectionRepeated(return_code)
 Input.anyRDirectionLongPressed(return_code)

 Функции проверки нажатия одной из нескольких клавиш по коду клавиш:
 Input.anyKeyPressed(codes, gamepad_codes, return_code)
 Input.anyKeyTriggered(codes, gamepad_codes, return_code)
 Input.anyKeyRepeated(codes, gamepad_codes, return_code)
 Input.anyKeyLongPressed(codes, gamepad_codes, return_code)

 codes - массив кодов клавиш клавиатуры
 gamepad_codes - массив кодов клавиш геймпада

 Если нужно проверить только геймпад, то вместо codes напишите null

 Функции проверки нажатия одной из нескольких клавиш по названию клавиш:
 Input.anyPressed(keys, return_code)
 Input.anyTriggered(keys, return_code)
 Input.anyRepeated(keys, return_code)
 Input.anyLongPressed(keys, return_code)

 keys - массив названий клавиш

 Функции проверки нажатия любой цифры:
 Input.anyNumberPressed(return_code)
 Input.anyNumberTriggered(return_code)
 Input.anyNumberRepeated(return_code)
 Input.anyNumberLongPressed(return_code)

 Функции проверки нажатия любой клавиши Numpad:
 Input.anyNumpadPressed(return_code)
 Input.anyNumpadTriggered(return_code)
 Input.anyNumpadRepeated(return_code)
 Input.anyNumpadLongPressed(return_code)

 Функции проверки нажатия любой буквы алфавита:
 Input.anyAlphabetPressed(return_code)
 Input.anyAlphabetTriggered(return_code)
 Input.anyAlphabetRepeated(return_code)
 Input.anyAlphabetLongPressed(return_code)

 Функции проверки нажатия любой клавиши F1-F12:
 Input.anyFPressed(return_code)
 Input.anyFTriggered(return_code)
 Input.anyFRepeated(return_code)
 Input.anyFLongPressed(return_code)

 Также добавлены функции проверки нажатия клавиш Backspace, Tab, Enter, Shift, Ctrl, Alt, Escape, Space

 Backspace:
 Input.BackspacePressed()
 Input.BackspaceTriggered()
 Input.BackspaceRepeated()
 Input.BackspaceLongPressed()

 Tab:
 Input.TabPressed()
 Input.TabTriggered()
 Input.TabRepeated()
 Input.TabLongPressed()

 Enter:
 Input.EnterPressed()
 Input.EnterTriggered()
 Input.EnterRepeated()
 Input.EnterLongPressed()

 Shift:
 Input.ShiftPressed()
 Input.ShiftTriggered()
 Input.ShiftRepeated()
 Input.ShiftLongPressed()

 Ctrl:
 Input.CtrlPressed()
 Input.CtrlTriggered()
 Input.CtrlRepeated()
 Input.CtrlLongPressed()

 Alt:
 Input.AltPressed()
 Input.AltTriggered()
 Input.AltRepeated()
 Input.AltLongPressed()
 
 Escape:
 Input.EscapePressed()
 Input.EscapeTriggered()
 Input.EscapeRepeated()
 Input.EscapeLongPressed()
 
 Space:
 Input.SpacePressed()
 Input.SpaceTriggered()
 Input.SpaceRepeated()
 Input.SpaceLongPressed()
 
 Если Вы создаете свой плагин на основе этого:
 Перед использованием любых функций убедитесь, что у пользователя установлен данный плагин:
 if (Imported.DK_Full_Input)

 Получить версию плагина:
 var version = DKVersion.DK_Full_Input;
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
*/

var Imported = Imported || {};
Imported.DK_Full_Input = true;

var DKVersion = DKVersion || {};
DKVersion.DK_Full_Input = 2.0;

Input._updateGamepadState = function(gamepad) {
	var lastState = this._gamepadStates[gamepad.index] || [];
	var newState = [];
	var buttons = gamepad.buttons;
	var axes = gamepad.axes;
	var threshold = 0.5;
	for (var i = 0; i < buttons.length; i++)
		newState[i] = buttons[i].pressed;
	newState[16] = axes[1] < -threshold; // l_up
	newState[17] = axes[1] > threshold; // l_down
	newState[18] = axes[0] < -threshold; // l_left
	newState[19] = axes[0] > threshold; // l_right
	newState[20] = axes[3] < -threshold; // r_up
	newState[21] = axes[3] > threshold; // r_down
	newState[22] = axes[2] < -threshold; // r_left
	newState[23] = axes[2] > threshold; // r_right
	for(var j = 0; j < newState.length; j++)
	{
		if (newState[j] === lastState[j]) continue;
		var buttonName = this.gamepadMapper[j];
		if (buttonName)
			this._currentState[buttonName] = newState[j];
	}
	this._gamepadStates[gamepad.index] = newState;
};

Input.keyNameByCode = function(code) {
	return this.keyMapper[code] || this.gamepadMapper[code];
};

Input.keyCodeByName = function(name) {
	for(var code in this.keyMapper)
	{
		if (this.keyMapper[code] === name)
			return code;
	}
	for(var code in this.gamepadMapper)
	{
		if (this.gamepadMapper[code] === name)
			return code;
	}
	return null;
};

Input.anyArrayNameHandler = function(array, method, return_code) {
	array = array || [];
	for(var i = 0; i < array.length; i++)
	{
		var name = array[i];
		if (method(name))
			return return_code ? this.keyCodeByName(name) : name;
	}
	return null;
};

Input.anyArrayCodeHandler = function(array, method, return_code) {
	array = array || [];
	for(var i = 0; i < array.length; i++)
	{
		var code = array[i];
		if (method(code))
			return return_code ? code : this.keyNameByCode(code);
	}
	return null;
};

Input.anyForCodeHandler = function(start, finish, method, return_code) {
	for(var code = start; code < finish + 1; code++)
	{
		var result = method(code, null, return_code);
		if (result) return result;
	}
	return null;
};

// Key Code

Input.keyHandler = function(code, gamepad_code, method, return_code) {
	var keyboard_name = this.keyMapper[code];
	var gamepad_name = this.gamepadMapper[gamepad_code];
	if (!keyboard_name && !gamepad_name) return null;
	if (method(keyboard_name))
		return return_code ? code : keyboard_name;
	if (method(gamepad_name))
		return return_code ? gamepad_code : gamepad_name;
	return null;
};

Input.keyPressed = function(code, gamepad_code, return_code) {
	return this.keyHandler(code, gamepad_code, this.isPressed.bind(this), return_code);
};

Input.keyTriggered = function(code, gamepad_code, return_code) {
	return this.keyHandler(code, gamepad_code, this.isTriggered.bind(this), return_code);
};

Input.keyRepeated = function(code, gamepad_code, return_code) {
	return this.keyHandler(code, gamepad_code, this.isRepeated.bind(this), return_code);
};

Input.keyLongPressed = function(code, gamepad_code, return_code) {
	return this.keyHandler(code, gamepad_code, this.isLongPressed.bind(this), return_code);
};

// any Direction (symbols: up, down, left, right)

Input.anyDirectionHandler = function(method, return_code) {
	var array = ['up', 'down', 'left', 'right'];
	return this.anyArrayNameHandler(array, method, return_code);
};

Input.anyDirectionPressed = function(return_code) {
	return this.anyDirectionHandler(this.isPressed.bind(this), return_code);
};

Input.anyDirectionTriggered = function(return_code) {
	return this.anyDirectionHandler(this.isTriggered.bind(this), return_code);
};

Input.anyDirectionRepeated = function(return_code) {
	return this.anyDirectionHandler(this.isRepeated.bind(this), return_code);
};

Input.anyDirectionLongPressed = function(return_code) {
	return this.anyDirectionHandler(this.isLongPressed.bind(this), return_code);
};

// only Left Stick (symbols: l_up, l_down, l_left, l_right)

Input.anyLDirectionHandler = function(method, return_code) {
	var array = ['l_up', 'l_down', 'l_left', 'l_right'];
	return this.anyArrayNameHandler(array, method, return_code);
};

Input.anyLDirectionPressed = function(return_code) {
	return this.anyLDirectionHandler(this.isPressed.bind(this), return_code);
};

Input.anyLDirectionTriggered = function(return_code) {
	return this.anyLDirectionHandler(this.isTriggered.bind(this), return_code);
};

Input.anyLDirectionRepeated = function(return_code) {
	return this.anyLDirectionHandler(this.isRepeated.bind(this), return_code);
};

Input.anyLDirectionLongPressed = function(return_code) {
	return this.anyLDirectionHandler(this.isLongPressed.bind(this), return_code);
};

// only Right Stick (symbols: r_up, r_down, r_left, r_right)

Input.anyRDirectionHandler = function(method, return_code) {
	var array = ['r_up', 'r_down', 'r_left', 'r_right'];
	return this.anyArrayNameHandler(array, method, return_code);
};

Input.anyRDirectionPressed = function(return_code) {
	return this.anyRDirectionHandler(this.isPressed.bind(this), return_code);
};

Input.anyRDirectionTriggered = function(return_code) {
	return this.anyRDirectionHandler(this.isTriggered.bind(this), return_code);
};

Input.anyRDirectionRepeated = function(return_code) {
	return this.anyRDirectionHandler(this.isRepeated.bind(this), return_code);
};

Input.anyRDirectionLongPressed = function(return_code) {
	return this.anyRDirectionHandler(this.isLongPressed.bind(this), return_code);
};

// any Key Code

Input.anyKeyHandler = function(codes, gamepad_codes, method, return_code) {
	gamepad_codes = gamepad_codes || [];
	var result = this.anyArrayCodeHandler(codes, method, return_code);
	if (result) return result;
	for(var i = 0; i < gamepad_codes.length; i++)
	{
		var code = gamepad_codes[i];
		result = method(null, code, return_code);
		if (result) return result;
	}
	return null;
};

Input.anyKeyPressed = function(codes, gamepad_codes, return_code) {
	return this.anyKeyHandler(codes, gamepad_codes, this.keyPressed.bind(this), return_code);
};

Input.anyKeyTriggered = function(codes, gamepad_codes, return_code) {
	return this.anyKeyHandler(codes, gamepad_codes, this.keyTriggered.bind(this), return_code);
};

Input.anyKeyRepeated = function(codes, gamepad_codes, return_code) {
	return this.anyKeyHandler(codes, gamepad_codes, this.keyRepeated.bind(this), return_code);
};

Input.anyKeyLongPressed = function(codes, gamepad_codes, return_code) {
	return this.anyKeyHandler(codes, gamepad_codes, this.keyLongPressed.bind(this), return_code);
};

// any Key Name

Input.anyPressed = function(keys, return_code) {
	return this.anyArrayNameHandler(keys, this.isPressed.bind(this), return_code);
};

Input.anyTriggered = function(keys, return_code) {
	return this.anyArrayNameHandler(keys, this.isTriggered.bind(this), return_code);
};

Input.anyRepeated = function(keys, return_code) {
	return this.anyArrayNameHandler(keys, this.isRepeated.bind(this), return_code);
};

Input.anyLongPressed = function(keys, return_code) {
	return this.anyArrayNameHandler(keys, this.isLongPressed.bind(this), return_code);
};

// any Number (codes: 48-57)

Input.anyNumberPressed = function(return_code) {
	return this.anyForCodeHandler(48, 57, this.keyPressed.bind(this), return_code); // 0 - 48, 9 - 57
};

Input.anyNumberTriggered = function(return_code) {
	return this.anyForCodeHandler(48, 57, this.keyTriggered.bind(this), return_code); // 0 - 48, 9 - 57
};

Input.anyNumberRepeated = function(return_code) {
	return this.anyForCodeHandler(48, 57, this.keyRepeated.bind(this), return_code); // 0 - 48, 9 - 57
};

Input.anyNumberLongPressed = function(return_code) {
	return this.anyForCodeHandler(48, 57, this.keyLongPressed.bind(this), return_code); // 0 - 48, 9 - 57
};

// any Numpad (codes: 96-105)

Input.anyNumpadPressed = function(return_code) {
	return this.anyForCodeHandler(96, 105, this.keyPressed.bind(this), return_code); // Numpad 0 - 96, Numpad 9 - 105
};

Input.anyNumpadTriggered = function(return_code) {
	return this.anyForCodeHandler(96, 105, this.keyTriggered.bind(this), return_code); // Numpad 0 - 96, Numpad 9 - 105
};

Input.anyNumpadRepeated = function(return_code) {
	return this.anyForCodeHandler(96, 105, this.keyRepeated.bind(this), return_code); // Numpad 0 - 96, Numpad 9 - 105
};

Input.anyNumpadLongPressed = function(return_code) {
	return this.anyForCodeHandler(96, 105, this.keyLongPressed.bind(this), return_code); // Numpad 0 - 96, Numpad 9 - 105
};

// any Alphabet (codes: 65-90) + for russian: 186, 188, 190, 192, 219, 221, 222

Input.anyAlphabetHandler = function(method, return_code) {
	var result = this.anyForCodeHandler(65, 90, method, return_code);
	if (result || !$gameSystem.isRussian()) return result;
	var array = [186, 188, 190, 192, 219, 221, 222]; // 186 - Ж, 188 - Б, 190 - Ю, 192 - Ё, 219 - Х, 221 - Ъ, 222 - Э
	return this.anyKeyHandler(array, null, method, return_code);
};

Input.anyAlphabetPressed = function(return_code) {
	return this.anyAlphabetHandler(this.keyPressed.bind(this), return_code);
};

Input.anyAlphabetTriggered = function(return_code) {
	return this.anyAlphabetHandler(this.keyTriggered.bind(this), return_code);
};

Input.anyAlphabetRepeated = function(return_code) {
	return this.anyAlphabetHandler(this.keyRepeated.bind(this), return_code);
};

Input.anyAlphabetLongPressed = function(return_code) {
	return this.anyAlphabetHandler(this.keyLongPressed.bind(this), return_code);
};

// any F (codes: 112-123)

Input.anyFPressed = function(return_code) {
	return this.anyForCodeHandler(112, 123, this.keyPressed.bind(this), return_code); // F1 - 112, F12 - 123
};

Input.anyFTriggered = function(return_code) {
	return this.anyForCodeHandler(112, 123, this.keyTriggered.bind(this), return_code); // F1 - 112, F12 - 123
};

Input.anyFRepeated = function(return_code) {
	return this.anyForCodeHandler(112, 123, this.keyRepeated.bind(this), return_code); // F1 - 112, F12 - 123
};

Input.anyFLongPressed = function(return_code) {
	return this.anyForCodeHandler(112, 123, this.keyLongPressed.bind(this), return_code); // F1 - 112, F12 - 123
};

// Backspace

Input.BackspacePressed = function() {
	var code = 8;
	return this.keyPressed(code);
};

Input.BackspaceTriggered = function() {
	var code = 8;
	return this.keyTriggered(code);
};

Input.BackspaceRepeated = function() {
	var code = 8;
	return this.keyRepeated(code);
};

Input.BackspaceLongPressed = function() {
	var code = 8;
	return this.keyLongPressed(code);
};

// Tab

Input.TabPressed = function() {
	var code = 9;
	return this.keyPressed(code);
};

Input.TabTriggered = function() {
	var code = 9;
	return this.keyTriggered(code);
};

Input.TabRepeated = function() {
	var code = 9;
	return this.keyRepeated(code);
};

Input.TabLongPressed = function() {
	var code = 9;
	return this.keyLongPressed(code);
};

// Enter

Input.EnterPressed = function() {
	var code = 13;
	return this.keyPressed(code);
};

Input.EnterTriggered = function() {
	var code = 13;
	return this.keyTriggered(code);
};

Input.EnterRepeated = function() {
	var code = 13;
	return this.keyRepeated(code);
};

Input.EnterLongPressed = function() {
	var code = 13;
	return this.keyLongPressed(code);
};

// Shift

Input.ShiftPressed = function() {
	var code = 16;
	return this.keyPressed(code);
};

Input.ShiftTriggered = function() {
	var code = 16;
	return this.keyTriggered(code);
};

Input.ShiftRepeated = function() {
	var code = 16;
	return this.keyRepeated(code);
};

Input.ShiftLongPressed = function() {
	var code = 16;
	return this.keyLongPressed(code);
};

// Ctrl

Input.CtrlPressed = function() {
	var code = 17;
	return this.keyPressed(code);
};

Input.CtrlTriggered = function() {
	var code = 17;
	return this.keyTriggered(code);
};

Input.CtrlRepeated = function() {
	var code = 17;
	return this.keyRepeated(code);
};

Input.CtrlLongPressed = function() {
	var code = 17;
	return this.keyLongPressed(code);
};

// Alt

Input.AltPressed = function() {
	var code = 18;
	return this.keyPressed(code);
};

Input.AltTriggered = function() {
	var code = 18;
	return this.keyTriggered(code);
};

Input.AltRepeated = function() {
	var code = 18;
	return this.keyRepeated(code);
};

Input.AltLongPressed = function() {
	var code = 18;
	return this.keyLongPressed(code);
};

// Escape

Input.EscapePressed = function() {
	var code = 27;
	return this.keyPressed(code);
};

Input.EscapeTriggered = function() {
	var code = 27;
	return this.keyTriggered(code);
};

Input.EscapeRepeated = function() {
	var code = 27;
	return this.keyRepeated(code);
};

Input.EscapeLongPressed = function() {
	var code = 27;
	return this.keyLongPressed(code);
};

// Space

Input.SpacePressed = function() {
	var code = 32;
	return this.keyPressed(code);
};

Input.SpaceTriggered = function() {
	var code = 32;
	return this.keyTriggered(code);
};

Input.SpaceRepeated = function() {
	var code = 32;
	return this.keyRepeated(code);
};

Input.SpaceLongPressed = function() {
	var code = 32;
	return this.keyLongPressed(code);
};