//=============================================================================
// Alistair Plugins - Stat Distribution
// AP_StatDistribution.js
//=============================================================================
var Imported = Imported || {};
Imported.AP_StatDistribution = true;
//=============================================================================
 /*:
 * @plugindesc v1.07 Allows the player to raise stats with points.
 * @author Alistair Plugins
 *
 * @param --- General ---
 * @desc
 * @default
 *
 * @param Initial Points
 * @desc The amount of points an actor starts the game with. Default: 0
 * @default 0
 *
 * @param Level-Up Points
 * @desc The amount of points an actor receives upon leveling up. Default: 3
 * @default 3
 *
 * @param Maximum Points
 * @desc Points will be capped once they reach this value. Default: 99
 * @default 99
 *
 * @param Help Window Text
 * @desc The text that's shown in the Help Window. Variables: param, amount, points
 * @default "Raises " + param + " by " + amount + ". Requires " + points + " points to perform."
 *
 * @param Return Text
 * @desc The text that's shown in the help window when selecting the return command.
 * @default Exits the Stat Distribution window.
 *
 * @param Show Menu Switch
 * @desc This switch needs to be turned on for the menu point to appear. Default: 0
 * @default 0
 *
 * @param Enable Menu Switch
 * @desc This switch needs to be turned on for the menu point to be accessible. Default: 0
 * @default 0
 *
 * @param Stat Distribution Text
 * @desc The name of the menu command. Default: Stat Distribution
 * @default Stat Distribution
 *
 * @param Command Window Alignment
 * @desc Command Alignment. Possible: left, center, right. Default: left
 * @default left
 *
 * @param Show Message
 * @desc Show a message with how many distribution points have been earned upon levelling up. Default: false
 * @default false
 *
 * @param Level-Up Message
 * @desc The message to be shown if you enabled "Show Message". Variables: actor, points
 * @default actor + " gained " + points + "!"
 *
 * @param Confirmation Window
 * @desc Use a confirmation window before a point is spent? Default: false
 * @default false
 *
 * @param Confirmation Window Text
 * @desc The text to be shown in the Confirmation Window.
 * @default "Are you sure that you want to increase this param?"
 *
 * @param Level-Up Transfer Scene
 * @desc (REQUIRES YEA - Victory Aftermath) Go to the Distribution Scene after an actor levels up? Default: false
 * @default false
 *
 * @param --- Vocabulary ---
 * @desc
 * @default
 *
 * @param Points Vocabulary
 * @desc This is how Distribution Points are called. Default: Distribution Points
 * @default Distribution Points
 *
 * @param HP Vocabulary
 * @desc The word used for Hit Points. Default: HP
 * @default HP
 *
 * @param MP Vocabulary
 * @desc The word used for Magic Points / Mana. Default: MP
 * @default MP
 *
 * @param ATK Vocabulary
 * @desc The word used for Attack/Strength. Default: ATK
 * @default ATK
 *
 * @param DEF Vocabulary
 * @desc The word used for Defence. Default: DEF
 * @default DEF
 *
 * @param MAT Vocabulary
 * @desc The word used for Mentality/Intelligence/Magic attack. Default: MAT
 * @default MAT
 *
 * @param MDF Vocabulary
 * @desc The word used for Magical defence/Resistance. Default: MDF
 * @default MDF
 *
 * @param AGI Vocabulary
 * @desc The word used for Agility. Default: AGI
 * @default AGI
 *
 * @param LUK Vocabulary
 * @desc The word used for Luck. Default: LUK
 * @default LUK
 *
 * @param Return Vocabulary
 * @desc The word used for returning from the scene. Default: Finish
 * @default Finish
 *
 * @param Yes Vocabulary
 * @desc The word used for "Yes". Default: Yes
 * @default Yes
 *
 * @param No Vocabulary
 * @desc The word used for "No". Default: No
 * @default No
 *
 * @param --- Caps ---
 * @desc
 * @default
 *
 * @param Cap HP
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap MP
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap ATK
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap DEF
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap MAT
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap MDF
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap AGI
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap LUK
 * @desc Upon reaching the maximum value prevent player from spending more points on this stat? Default: false
 * @default false
 *
 * @param Cap Value HP
 * @desc If capping is set to true, what is the cap value? Default: 9999
 * @default 9999
 *
 * @param Cap Value MP
 * @desc If capping is set to true, what is the cap value? Default: 9999
 * @default 9999
 *
 * @param Cap Value ATK
 * @desc If capping is set to true, what is the cap value? Default: 999
 * @default 999
 *
 * @param Cap Value DEF
 * @desc If capping is set to true, what is the cap value? Default: 999
 * @default 999
 *
 * @param Cap Value MAT
 * @desc If capping is set to true, what is the cap value? Default: 999
 * @default 999
 *
 * @param Cap Value MDF
 * @desc If capping is set to true, what is the cap value? Default: 999
 * @default 999
 *
 * @param Cap Value AGI
 * @desc If capping is set to true, what is the cap value? Default: 999
 * @default 999
 *
 * @param Cap Value LUK
 * @desc If capping is set to true, what is the cap value? Default: 999
 * @default 999
 *
 * @param --- Visibility ---
 * @desc
 * @default
 *
 * @param Hide Gauges
 * @desc Show or hide the gauges. True - Hide | False - Show
 * @default false
 *
 * @param Show HP
 * @desc Show HP as a choice? Default: true
 * @default true
 *
 * @param Show MP
 * @desc Show MP as a choice? Default: true
 * @default true
 *
 * @param Show ATK
 * @desc Show ATK as a choice? Default: true
 * @default true
 *
 * @param Show DEF
 * @desc Show DEF as a choice? Default: true
 * @default true
 *
 * @param Show MAT
 * @desc Show MAT as a choice? Default: true
 * @default true
 *
 * @param Show MDF
 * @desc Show MDF as a choice? Default: true
 * @default true
 *
 * @param Show AGI
 * @desc Show AGI as a choice? Default: true
 * @default true
 *
 * @param Show LUK
 * @desc Show LUK as a choice? Default: true
 * @default true
 *
 * @param Show Finish
 * @desc Show "Finish" as a choice? Default: true
 * @default true
 *
 * @param --- Growth ---
 * @desc
 * @default
 *
 * @param HP Growth
 * @desc The Growth with each point spent. Default: 50
 * @default 50
 *
 * @param MP Growth
 * @desc The Growth with each point spent. Default: 30
 * @default 30
 *
 * @param ATK Growth
 * @desc The Growth with each point spent. Default: 1
 * @default 1
 *
 * @param DEF Growth
 * @desc The Growth with each point spent. Default: 1
 * @default 1
 *
 * @param MAT Growth
 * @desc The Growth with each point spent. Default: 1
 * @default 1
 *
 * @param MDF Growth
 * @desc The Growth with each point spent. Default: 1
 * @default 1
 *
 * @param AGI Growth
 * @desc The Growth with each point spent. Default: 1
 * @default 1
 *
 * @param LUK Growth
 * @desc The Growth with each point spent. Default: 1
 * @default 1
 *
 * @param --- Points needed ---
 * @desc
 * @default
 *
 * @param HP Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param MP Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param ATK Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param DEF Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param MAT Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param MDF Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param AGI Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param LUK Points Needed
 * @desc The required amount of points to raise this stat. Default: 1
 * @default 1
 *
 * @param --- Colors ---
 * @desc
 * @default
 *
 * @param HP Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 2
 * @default 2
 *
 * @param HP Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 2
 * @default 2
 *
 * @param MP Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 1
 * @default 1
 *
 * @param MP Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 1
 * @default 1
 *
 * @param ATK Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 10
 * @default 10
 *
 * @param ATK Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 10
 * @default 10
 *
 * @param DEF Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 3
 * @default 3
 *
 * @param DEF Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 3
 * @default 3
 *
 * @param MAT Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 5
 * @default 5
 *
 * @param MAT Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 5
 * @default 5
 *
 * @param MDF Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 16
 * @default 16
 *
 * @param MDF Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 16
 * @default 16
 *
 * @param AGI Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 23
 * @default 23
 *
 * @param AGI Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 23
 * @default 23
 *
 * @param LUK Gauge Color 1
 * @desc The first color for the gauge (further on the left). Default: 14
 * @default 14
 *
 * @param LUK Gauge Color 2
 * @desc The second color for the gauge (further on the right). Default: 14
 * @default 14
 *
 * @help
 * ============================================================================
 * Alistair Plugins - Stat Distribution
 * ============================================================================
 * 
 * My take on a Stat Distribution plugin. I made the same plugin/script
 * for RPG VX Ace but I never released it. 
 *
 * There are loads of Plugin Parameters to customize the plugin. 
 * Check them out!
 *
 * The plugin itself can be considered Plug & Play.
 * For a more personalized touch I recommend playing with
 * the Parameter settings, though.
 *
 * ============================================================================
 *
 * Thanks to Yanfly for his plugins. If you ever want to learn more about
 * scripting be sure to check his plugins out.
 *
 * ============================================================================
 * ▼
 * [YEP_MainMenuManager Users]
 * Use the following settings to add the Stat Distribution Plugin
 * to the Main Menu:
 *
 * Name: APMenuName
 * Symbol: distribution
 * Show: $gameSystem.isShowDistribution()
 * Enabled: $gameSystem.isEnableDistribution()
 * Ext:
 * Main Bind: this.commandPersonal.bind(this)
 * Actor Bind: SceneManager.push(Scene_StatDistribution)
 * ▲
 * ============================================================================
 * Notetags
 * ============================================================================
 * 
 * ► ACTORS, CLASSES
 *
 * <Initial Points: x>
 * This actor/class will start the game with x
 * distribution points. This will ignore the default setting.
 * Actor notetags have priority over class notetags.
 *
 * <Level Points: x>
 * This actor/class will gain x distribution points whenever it
 * levels up. This will ignore the default setting. Actor notetags have
 * priority over class notetags.
 *
 * <x Cap: y>
 * This actor's/class' cap for stat x (= HP,MP,ATK,DEF,MAT,MDF,AGI,LUK or ALL) will
 * be set to y. Cannot use negative numbers.
 * Actor notetags have priority over class notetags.
 * Please note: The respective Cap parameter of the plugin must be
 * turned on or this will not have any effect.
 * Example: <HP Cap: 2500> won't have any effect as long as Cap HP is set
 * to false.
 *
 * Note:  <All Cap: y> does not include the HP and MP parameters.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * ► AddPoints x y
 * - Adds/Subtracts y points to/from Actor x's Points pool.
 *
 * ► OpenStatDistribution
 * - Opens the Stat Distribution Scene.
 *
 * ► ResetPoints x
 * - Resets all spent points for actor x.
 *
 * ► ResetParamPoints x y
 * - Resets all spent points on param y for actor x.
 *   Replace y with:
 *   0 - HP
 *   1 - MP
 *   2 - ATK
 *   3 - DEF
 *   4 - MAT
 *   5 - MDF
 *   6 - AGI
 *   7 - LUK
 *
 * ============================================================================
 * Update History
 * ============================================================================
 * V1.07
 * - Compatibility Update for the Ability Distribution plugin
 *
 * V1.06a
 * - Added notetags to allow for individual stat caps
 * - The notetag <All Cap: x> no longer includes the HP and MP parameters
 *
 * V1.05d
 * - You can now use text codes for most of the messages!
 * - Compatibility Update for AP_AbilityDistribution
 * - Fixed a crash when an actor had 0 MaxMP.
 * - You may now use the new function actor.setParamDescription(paramName, descriptionText)
 *   to have a specific param display a custom text in addition to the default text in the help
 *   window.
 * - Added new parameter: Hide Gauges
 * - Added new parameter: Show Finish
 * - Fixed Show Menu Switch and Enable Menu Switch not working
 *
 * V1.04b
 * - You can now reset all spent points or all spent points
 *   on a specific param.
 * - You can now choose to have a Confirmation Window pop up before
 *   spending points.
 * - Added plugin parameter: Level-Up Transfer Scene
 * - Addon Update
 * - Fixed "Show Message" ignoring its setting.
 * - Fixed gauges being cut off
 *
 * V1.03
 * - You can now use formulas for notetags and the following plugin parameters:
 *   ~ Initial Points
 *   ~ Level-Up Points
 *   ~ Maximum Points
 *   ~ All the "Growth" Parameters (e.g. HP Growth)
 *   ~ All the "Points needed" Parameters (e.g. HP Points Needed)
 * - The command window width should no longer be altered by other plugins
 *
 * In formulas, you may use s[x] for switch x, v[x] for variable x and a or user
 * for the actor in question.
 *
 * V1.02a
 * - Added new parameters: Show Message, Level-Up Message, Cap Param,
 *   Cap Value Param
 * - Should now be working with YEP_VictoryAftermath
 *
 * V1.01
 * - Fixed Menu command appearing twice
 * - Fixed elements not fitting into the window on smaller screen sizes
 *
 * V1.0
 * - First version
 */
//=============================================================================
// (function() {
	
	var parameters = PluginManager.parameters('AP_StatDistribution');
	// General
	var InitialPoints = String(parameters['Initial Points']);
	var LevelUpPoints = String(parameters['Level-Up Points']);
	var MaxPoints = String(parameters['Maximum Points']);
	var HelpWindowText = String(parameters['Help Window Text']);
	var ReturnText = String(parameters['Return Text']);
	var MenuSwitch = Number(parameters['Show Menu Switch']);
	var EnableSwitch = Number(parameters['Enable Menu Switch']);
	var APMenuName = String(parameters['Stat Distribution Text']);
	var PointsVocab = String(parameters['Points Vocabulary']);
	var CommandAlignment = String(parameters['Command Window Alignment']);
	var APShowMessage = String(parameters['Show Message']);
	var APLevelMessage = String(parameters['Level-Up Message']);
	var ConfirmationWindow = String(parameters['Confirmation Window']);
	var ConfirmText = String(parameters['Confirmation Window Text']);
	var LevelTransfer = String(parameters['Level-Up Transfer Scene']);
	// Vocab
	var HPVocab = String(parameters['HP Vocabulary']);
	var MPVocab = String(parameters['MP Vocabulary']);
	var ATKVocab = String(parameters['ATK Vocabulary']);
	var DEFVocab = String(parameters['DEF Vocabulary']);
	var MATVocab = String(parameters['MAT Vocabulary']);
	var MDFVocab = String(parameters['MDF Vocabulary']);
	var AGIVocab = String(parameters['AGI Vocabulary']);
	var LUKVocab = String(parameters['LUK Vocabulary']);
	var ReturnVocab = String(parameters['Return Vocabulary']);
	var YesVocab = String(parameters['Yes Vocabulary']);
	var NoVocab = String(parameters['No Vocabulary']);
	// Cap
	var HPCap = String(parameters['Cap HP']);
	var MPCap = String(parameters['Cap MP']);
	var ATKCap = String(parameters['Cap ATK']);
	var DEFCap = String(parameters['Cap DEF']);
	var MATCap = String(parameters['Cap MAT']);
	var MDFCap = String(parameters['Cap MDF']);
	var AGICap = String(parameters['Cap AGI']);
	var LUKCap = String(parameters['Cap LUK']);
	var HPCapValue = Number(parameters['Cap Value HP']);
	var MPCapValue = Number(parameters['Cap Value MP']);
	var ATKCapValue = Number(parameters['Cap Value ATK']);
	var DEFCapValue = Number(parameters['Cap Value DEF']);
	var MATCapValue = Number(parameters['Cap Value MAT']);
	var MDFCapValue = Number(parameters['Cap Value MDF']);
	var AGICapValue = Number(parameters['Cap Value AGI']);
	var LUKCapValue = Number(parameters['Cap Value LUK']);
	// Visibility
	var APHideGauges = String(parameters['Hide Gauges']);
	var ShowHP = String(parameters['Show HP']);
	var ShowMP = String(parameters['Show MP']);
	var ShowATK = String(parameters['Show ATK']);
	var ShowDEF = String(parameters['Show DEF']);
	var ShowMAT = String(parameters['Show MAT']);
	var ShowMDF = String(parameters['Show MDF']);
	var ShowAGI = String(parameters['Show AGI']);
	var ShowLUK = String(parameters['Show LUK']);
	var APShowFinish = String(parameters['Show Finish']);
	// Growth
	var HPGrowth = String(parameters['HP Growth']);
	var MPGrowth = String(parameters['MP Growth']);
	var ATKGrowth = String(parameters['ATK Growth']);
	var DEFGrowth = String(parameters['DEF Growth']);
	var MATGrowth = String(parameters['MAT Growth']);
	var MDFGrowth = String(parameters['MDF Growth']);
	var AGIGrowth = String(parameters['AGI Growth']);
	var LUKGrowth = String(parameters['LUK Growth']);
	// Points needed
	var HPNeeded = String(parameters['HP Points Needed']);
	var MPNeeded = String(parameters['MP Points Needed']);
	var ATKNeeded = String(parameters['ATK Points Needed']);
	var DEFNeeded = String(parameters['DEF Points Needed']);
	var MATNeeded = String(parameters['MAT Points Needed']);
	var MDFNeeded = String(parameters['MDF Points Needed']);
	var AGINeeded = String(parameters['AGI Points Needed']);
	var LUKNeeded = String(parameters['LUK Points Needed']);
	// Colours
	var HPColor1 = Number(parameters['HP Gauge Color 1']);
	var HPColor2 = Number(parameters['HP Gauge Color 2']);
	var MPColor1 = Number(parameters['MP Gauge Color 1']);
	var MPColor2 = Number(parameters['MP Gauge Color 2']);
	var ATKColor1 = Number(parameters['ATK Gauge Color 1']);
	var ATKColor2 = Number(parameters['ATK Gauge Color 2']);
	var DEFColor1 = Number(parameters['DEF Gauge Color 1']);
	var DEFColor2 = Number(parameters['DEF Gauge Color 2']);
	var MATColor1 = Number(parameters['MAT Gauge Color 1']);
	var MATColor2 = Number(parameters['MAT Gauge Color 2']);
	var MDFColor1 = Number(parameters['MDF Gauge Color 1']);
	var MDFColor2 = Number(parameters['MDF Gauge Color 2']);
	var AGIColor1 = Number(parameters['AGI Gauge Color 1']);
	var AGIColor2 = Number(parameters['AGI Gauge Color 2']);
	var LUKColor1 = Number(parameters['LUK Gauge Color 1']);
	var LUKColor2 = Number(parameters['LUK Gauge Color 2']);
	// ↑ Literally the most tedious part of this plugin, lol! ↑

// RegExp Handling
	AP_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
	DataManager.isDatabaseLoaded = function() {
		if (!AP_DataManager_isDatabaseLoaded.call(this)) return false;
		this.processAPSDN1($dataActors);
		this.processAPSDN1($dataClasses);
		return true;
	};

	DataManager.processAPSDN1 = function(dataGroup) {
		var APSDN1_1 = /<(?:Initial Points):[ ](.*)>/i;
		var APSDN1_2 = /<(?:Level Points):[ ](.*)>/i;
		var APSDN1_3 = /<(.*)[ ]Cap:[ ](\d+)>/i;
		var APSDN1_4 = /<(?:Initial Ability Points):[ ](.*)>/i;
		var APSDN1_5 = /<(?:Level Ability Points):[ ](.*)>/i;
		for (var i = 1; i < dataGroup.length; i++) {
			var object = dataGroup[i];
			var noteData = object.note.split(/[\r\n]+/);

			object.initialPoints = undefined;
			object.ADinitialPoints = undefined;
			object.levelUpPoints = undefined;
			object.ADlevelUpPoints = undefined;
			object.APSDCaps = [null, null, null, null, null, null, null, null];

			for (var n = 0; n < noteData.length; n++) {
				var line = noteData[n];
				if (line.match(APSDN1_1)) {
					object.initialPoints = String(RegExp.$1);
				} else if (line.match(APSDN1_4)) {
					object.ADinitialPoints = String(RegExp.$1);
				} else if (line.match(APSDN1_5)) {
					object.ADlevelUpPoints = String(RegExp.$1);
				} else if (line.match(APSDN1_2)) {
					object.levelUpPoints = String(RegExp.$1);
				} else if (line.match(APSDN1_3)) {
					var amount = Math.max(0, parseInt(RegExp.$2));
					switch (String(RegExp.$1).toLowerCase()) {
						case 'hp':
						object.APSDCaps[0] = amount;
						break;
						case 'mp':
						object.APSDCaps[1] = amount;
						break;
						case 'atk':
						object.APSDCaps[2] = amount;
						break;
						case 'def':
						object.APSDCaps[3] = amount;
						break;
						case 'mat':
						object.APSDCaps[4] = amount;
						break;
						case 'mdf':
						object.APSDCaps[5] = amount;
						break;
						case 'agi':
						object.APSDCaps[6] = amount;
						break;
						case 'luk':
						object.APSDCaps[7] = amount;
						break;
						case 'all':
						object.APSDCaps[2] = amount;
						object.APSDCaps[3] = amount;
						object.APSDCaps[4] = amount;
						object.APSDCaps[5] = amount;
						object.APSDCaps[6] = amount;
						object.APSDCaps[7] = amount;
						break;
						default: break;
					};
				};
			};
		};
	};
// End of RegExp Handling

// Scene_StatDistribution


	function Scene_StatDistribution() {
		this.initialize.apply(this, arguments);
	};
	
	Scene_StatDistribution.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_StatDistribution.prototype.constructor = Scene_StatDistribution;
	
	Scene_StatDistribution.prototype.initialize = function() {
		Scene_MenuBase.prototype.initialize.call(this);
	};
	
	Scene_StatDistribution.prototype.create = function() {
		Scene_MenuBase.prototype.create.call(this);
		this.createHelpWindow();
		this.createOverviewWindow();
		this.createCommandWindow();
		this._commandWindow.updateHelp();
		this._ovWindow.setActor(this.actor());
		this._ovWindow.refresh();
		this.createSecondHelpWindow();
		this.createConfirmWindow();
	};

	Scene_StatDistribution.prototype.createConfirmWindow = function() {
		this._confirmWindow = new Window_APSDConfirm(Graphics.boxWidth / 2 - 240, Graphics.boxHeight / 2);
		this._confirmWindow.setHandler('yes', this.goOn.bind(this));
		this._confirmWindow.setHandler('no', this.abort.bind(this));
		this.addWindow(this._confirmWindow);
	};

	Scene_StatDistribution.prototype.createSecondHelpWindow = function() {
		this._addOnWindow = new Window_Help(2);
		this._addOnWindow.y = Graphics.height - this._helpWindow.height;
		this.addWindow(this._addOnWindow);
	};
	
	Scene_StatDistribution.prototype.createCommandWindow = function() {
	this._commandWindow = new Window_StatCommand(0, this._helpWindow.height + 1);
	this._commandWindow.setHelpWindow(this._helpWindow);
	if (eval(ConfirmationWindow)) {
	this._commandWindow.setHandler('hp', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('mp', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('atk', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('def', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('mat', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('mdf', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('agi', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('luk', this.activateConfirmation.bind(this));
	this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
	this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
	this._commandWindow.setHandler('cancel', this.popScene.bind(this));
	} else {
	this._commandWindow.setHandler('hp', this.growHP.bind(this));
	this._commandWindow.setHandler('mp', this.growMP.bind(this));
	this._commandWindow.setHandler('atk', this.growATK.bind(this));
	this._commandWindow.setHandler('def', this.growDEF.bind(this));
	this._commandWindow.setHandler('mat', this.growMAT.bind(this));
	this._commandWindow.setHandler('mdf', this.growMDF.bind(this));
	this._commandWindow.setHandler('agi', this.growAGI.bind(this));
	this._commandWindow.setHandler('luk', this.growLUK.bind(this));
	this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
	this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
	this._commandWindow.setHandler('cancel', this.popScene.bind(this));
	};
	this.addWindow(this._commandWindow);
	};
	
	Scene_StatDistribution.prototype.createOverviewWindow = function() {
	this._ovWindow = new Window_Overview(240 + 1, this._helpWindow.height + 1, Graphics.boxWidth - 240 - 1, Graphics.boxHeight - this._helpWindow.height * 2);
	this.addWindow(this._ovWindow);
	};

	Scene_StatDistribution.prototype.onActorChange = function() {
		this._ovWindow.setActor(this.actor());
		this._ovWindow.refresh();
		this._commandWindow.refresh();
		this._commandWindow.activate();
	};

	Scene_StatDistribution.prototype.activateConfirmation = function() {
		this._confirmWindow.displayText();
		this._confirmWindow.open();
		this._confirmWindow.activate();
		this._confirmWindow.select(0);
	};

	Scene_StatDistribution.prototype.goOn = function() {
		this._confirmWindow.deactivate();
		this._confirmWindow.close();
		switch (this._commandWindow.currentSymbol()) {
			case 'hp':
			this.growHP();
			break;
			case 'mp':
			this.growMP();
			break;
			case 'atk':
			this.growATK();
			break;
			case 'def':
			this.growDEF();
			break;
			case 'mat':
			this.growMAT();
			break;
			case 'mdf':
			this.growMDF();
			break;
			case 'agi':
			this.growAGI();
			break;
			case 'luk':
			this.growLUK();
			break;
			default:
			break;
		};
	};

	Scene_StatDistribution.prototype.abort = function() {
		this._confirmWindow.deactivate();
		this._confirmWindow.close();
		this._commandWindow.activate();
	};

// Param Growth Functions

// HP
	Scene_StatDistribution.prototype.growHP = function() {
		// Initialize the used variables
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = HPCapValue;
		// Check for individual caps
		if (actor.currentClass().APSDCaps[0] !== null) {
			var CapValue = actor.currentClass().APSDCaps[0];
		};
		if ($dataActors[actor._actorId].APSDCaps[0] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[0];
		};
		// Check for required distribution points
		if (points < eval(HPNeeded)) {
			// Abort
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			// Deduct Points
			actor.addDistributionPoints(-eval(HPNeeded));
			// Check for Cap
			if (eval(HPCap)) {
				// Get Growth with enabled Cap
				var finalGrowth = eval(HPGrowth) + actor.mhp > CapValue ? CapValue - actor.mhp : eval(HPGrowth);
			} else { var finalGrowth = eval(HPGrowth) }; // Growth without Cap
			// Raise Param
			actor.addParam(0, finalGrowth);
			// Increase APParams and spentPoints (needed for Plugin Commands)
			actor._APParams[0] += finalGrowth;
			actor._spentPoints[0] += eval(HPNeeded);
			// Refresh and activate
			this._ovWindow.refresh();
			this._commandWindow.activate();
		};
		// Refresh and activate
		this._commandWindow.refresh();
		this._commandWindow.activate();
	};
// MP
	Scene_StatDistribution.prototype.growMP = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = MPCapValue;
		if (actor.currentClass().APSDCaps[1] !== null) {
			var CapValue = actor.currentClass().APSDCaps[1];
		};
		if ($dataActors[actor._actorId].APSDCaps[1] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[1];
		};
		if (points < eval(MPNeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(MPNeeded));
			if (eval(MPCap)) {
				var finalGrowth = eval(MPGrowth) + actor.mmp > CapValue ? CapValue - actor.mmp : eval(MPGrowth);
			} else { var finalGrowth = eval(MPGrowth) };
			actor.addParam(1, finalGrowth);
			actor._APParams[1] += finalGrowth;
			actor._spentPoints[1] += eval(MPNeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}
// ATK
	Scene_StatDistribution.prototype.growATK = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = ATKCapValue;
		if (actor.currentClass().APSDCaps[2] !== null) {
			var CapValue = actor.currentClass().APSDCaps[2];
		};
		if ($dataActors[actor._actorId].APSDCaps[2] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[2];
		};
		if (points < eval(ATKNeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(ATKNeeded));
			if (eval(ATKCap)) {
				var finalGrowth = eval(ATKGrowth) + actor.atk > CapValue ? CapValue - actor.atk : eval(ATKGrowth);
			} else { var finalGrowth = eval(ATKGrowth) };
			actor.addParam(2, finalGrowth);
			actor._APParams[2] += finalGrowth;
			actor._spentPoints[2] += eval(ATKNeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}
// DEF
	Scene_StatDistribution.prototype.growDEF = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = DEFCapValue;
		if (actor.currentClass().APSDCaps[3] !== null) {
			var CapValue = actor.currentClass().APSDCaps[3];
		};
		if ($dataActors[actor._actorId].APSDCaps[3] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[3];
		};
		if (points < eval(DEFNeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(DEFNeeded));
			if (eval(DEFCap)) {
				var finalGrowth = eval(DEFGrowth) + actor.def > CapValue ? CapValue - actor.def : eval(DEFGrowth);
			} else { var finalGrowth = eval(DEFGrowth) };
			actor.addParam(3, finalGrowth);
			actor._APParams[3] += finalGrowth;
			actor._spentPoints[3] += eval(DEFNeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}
// MAT
	Scene_StatDistribution.prototype.growMAT = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = MATCapValue;
		if (actor.currentClass().APSDCaps[4] !== null) {
			var CapValue = actor.currentClass().APSDCaps[4];
		};
		if ($dataActors[actor._actorId].APSDCaps[4] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[4];
		};
		if (points < eval(MATNeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(MATNeeded));
			if (eval(MATCap)) {
				var finalGrowth = eval(MATGrowth) + actor.mat > CapValue ? CapValue - actor.mat : eval(MATGrowth);
			} else { var finalGrowth = eval(MATGrowth) };
			actor.addParam(4, finalGrowth);
			actor._APParams[4] += finalGrowth;
			actor._spentPoints[4] += eval(MATNeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}
// MDF
	Scene_StatDistribution.prototype.growMDF = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = MDFCapValue;
		if (actor.currentClass().APSDCaps[5] !== null) {
			var CapValue = actor.currentClass().APSDCaps[5];
		};
		if ($dataActors[actor._actorId].APSDCaps[5] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[5];
		};
		if (points < eval(MDFNeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(MDFNeeded));
			if (eval(MDFCap)) {
				var finalGrowth = eval(MDFGrowth) + actor.mdf > CapValue ? CapValue - actor.mdf : eval(MDFGrowth);
			} else { var finalGrowth = eval(MDFGrowth) };
			actor.addParam(5, finalGrowth);
			actor._APParams[5] += finalGrowth;
			actor._spentPoints[5] += eval(MDFNeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}
// AGI
	Scene_StatDistribution.prototype.growAGI = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = AGICapValue;
		if (actor.currentClass().APSDCaps[6] !== null) {
			var CapValue = actor.currentClass().APSDCaps[6];
		};
		if ($dataActors[actor._actorId].APSDCaps[6] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[6];
		};
		if (points < eval(AGINeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(AGINeeded));
			if (eval(AGICap)) {
				var finalGrowth = eval(AGIGrowth) + actor.agi > CapValue ? CapValue - actor.agi : eval(AGIGrowth);
			} else { var finalGrowth = eval(AGIGrowth) };
			actor.addParam(6, finalGrowth);
			actor._APParams[6] += finalGrowth;
			actor._spentPoints[6] += eval(AGINeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}
// LUK
	Scene_StatDistribution.prototype.growLUK = function() {
		var actor = this.actor();
		var user = this.actor();
		var a = this.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var points = actor.distributionPoints();
		var CapValue = LUKCapValue;
		if (actor.currentClass().APSDCaps[7] !== null) {
			var CapValue = actor.currentClass().APSDCaps[7];
		};
		if ($dataActors[actor._actorId].APSDCaps[7] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[7];
		};
		if (points < eval(LUKNeeded)) {
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		} else {
			actor.addDistributionPoints(-eval(LUKNeeded));
			if (eval(LUKCap)) {
				var finalGrowth = eval(LUKGrowth) + actor.luk > CapValue ? CapValue - actor.luk : eval(LUKGrowth);
			} else { var finalGrowth = eval(LUKGrowth) };
			actor.addParam(7, finalGrowth);
			actor._APParams[7] += finalGrowth;
			actor._spentPoints[7] += eval(LUKNeeded);
			this._ovWindow.refresh();
			this._commandWindow.activate();
		}
		this._commandWindow.refresh();
		this._commandWindow.activate();
	}

// Window_StatCommand

	function Window_StatCommand() {this.initialize.apply(this, arguments);}
	
	Window_StatCommand.prototype = Object.create(Window_Command.prototype);
	Window_StatCommand.prototype.constructor = Window_StatCommand;
	
	Window_StatCommand.prototype.initialize = function(x, y) {
		Window_Command.prototype.initialize.call(this, x, y);
		this.refresh();
	};
	
	Window_StatCommand.prototype.windowHeight = function() {
		return SceneManager._scene._ovWindow.height;
	};

	Window_StatCommand.prototype.windowWidth = function() {
		return 240;
	};

	Window_StatCommand.prototype.numVisibleRows = function() {
		return 9;
	};
	
	Window_StatCommand.prototype.isOkEnabled = function() {
		return true;
	};

	Window_StatCommand.prototype.itemTextAlign = function() {
		return CommandAlignment;
	};

	Window_StatCommand.prototype.enableHP = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = HPCapValue;
		if (actor.currentClass().APSDCaps[0] !== null) {
			var CapValue = actor.currentClass().APSDCaps[0];
		};
		if ($dataActors[actor._actorId].APSDCaps[0] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[0];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(HPNeeded)) {
			var foo = true;
			if (eval(HPCap) && SceneManager._scene.actor().mhp >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableMP = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = MPCapValue;
		if (actor.currentClass().APSDCaps[1] !== null) {
			var CapValue = actor.currentClass().APSDCaps[1];
		};
		if ($dataActors[actor._actorId].APSDCaps[1] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[1];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(MPNeeded)) {
			foo = true;
			if (eval(MPCap) && SceneManager._scene.actor().mmp >= CapValue) {
				foo = false;
			} else {
				foo = true;
			};
		} else {
			foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableATK = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = ATKCapValue;
		if (actor.currentClass().APSDCaps[2] !== null) {
			var CapValue = actor.currentClass().APSDCaps[2];
		};
		if ($dataActors[actor._actorId].APSDCaps[2] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[2];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(ATKNeeded)) {
			var foo = true;
			if (eval(ATKCap) && SceneManager._scene.actor().atk >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableDEF = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = DEFCapValue;
		if (actor.currentClass().APSDCaps[3] !== null) {
			var CapValue = actor.currentClass().APSDCaps[3];
		};
		if ($dataActors[actor._actorId].APSDCaps[3] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[3];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(DEFNeeded)) {
			var foo = true;
			if (eval(DEFCap) && SceneManager._scene.actor().def >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableMAT = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = MATCapValue;
		if (actor.currentClass().APSDCaps[4] !== null) {
			var CapValue = actor.currentClass().APSDCaps[4];
		};
		if ($dataActors[actor._actorId].APSDCaps[4] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[4];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(MATNeeded)) {
			var foo = true;
			if (eval(MATCap) && SceneManager._scene.actor().mat >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableMDF = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = MDFCapValue;
		if (actor.currentClass().APSDCaps[5] !== null) {
			var CapValue = actor.currentClass().APSDCaps[5];
		};
		if ($dataActors[actor._actorId].APSDCaps[5] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[5];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(MDFNeeded)) {
			var foo = true;
			if (eval(MDFCap) && SceneManager._scene.actor().mdf >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableAGI = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = AGICapValue;
		if (actor.currentClass().APSDCaps[6] !== null) {
			var CapValue = actor.currentClass().APSDCaps[6];
		};
		if ($dataActors[actor._actorId].APSDCaps[6] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[6];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(AGINeeded)) {
			var foo = true;
			if (eval(AGICap) && SceneManager._scene.actor().agi >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};

	Window_StatCommand.prototype.enableLUK = function() {
		var foo = true;
		var user = SceneManager._scene.actor();
		var actor = user;
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		var CapValue = LUKCapValue;
		if (actor.currentClass().APSDCaps[7] !== null) {
			var CapValue = actor.currentClass().APSDCaps[7];
		};
		if ($dataActors[actor._actorId].APSDCaps[7] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[7];
		};
		if (SceneManager._scene.actor().distributionPoints() >= eval(LUKNeeded)) {
			var foo = true;
			if (eval(LUKCap) && SceneManager._scene.actor().luk >= CapValue) {
				var foo = false;
			} else {
				var foo = true;
			};
		} else {
			var foo = false;
		};
		return foo;
	};
	
	Window_StatCommand.prototype.makeCommandList = function() {
		if (eval(ShowHP)) { this.addCommand(HPVocab, 'hp', this.enableHP()) };
		if (eval(ShowMP)) { this.addCommand(MPVocab, 'mp', this.enableMP()) };
		if (eval(ShowATK)) { this.addCommand(ATKVocab, 'atk', this.enableATK()) };
		if (eval(ShowDEF)) { this.addCommand(DEFVocab, 'def', this.enableDEF()) };
		if (eval(ShowMAT)) { this.addCommand(MATVocab, 'mat', this.enableMAT()) };
		if (eval(ShowMDF)) { this.addCommand(MDFVocab, 'mdf', this.enableMDF()) };
		if (eval(ShowAGI)) { this.addCommand(AGIVocab, 'agi', this.enableAGI()) };
		if (eval(ShowLUK)) { this.addCommand(LUKVocab, 'luk', this.enableLUK()) };
		if (eval(APShowFinish)) { this.addCommand(ReturnVocab, 'cancel') };
	};
	
	Window_StatCommand.prototype.setHelpWindow = function(helpWindow) {
		this._helpWindow = helpWindow;
	};
	
	Window_StatCommand.prototype.update = function() {
		Window_Command.prototype.update.call(this);
	};

	
	Window_StatCommand.prototype.updateHelp = function() {
		var user = SceneManager._scene.actor();
		var a = SceneManager._scene.actor();
		var s = $gameSwitches._data;
		var v = $gameVariables._data;
		switch (this.currentSymbol()) {
			case 'hp':
			var param = HPVocab;
			var amount = eval(HPGrowth);
			var points = eval(HPNeeded);
			var text = eval(HelpWindowText);
			var custom = user._APhpText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'mp':
			var param = MPVocab;
			var amount = eval(MPGrowth);
			var points = eval(MPNeeded);
			var text = eval(HelpWindowText)
			var custom = user._APmpText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'atk':
			var param = ATKVocab;
			var amount = eval(ATKGrowth);
			var points = eval(ATKNeeded);
			var text = eval(HelpWindowText)
			var custom = user._APatkText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'def':
			var param = DEFVocab;
			var amount = eval(DEFGrowth);
			var points = eval(DEFNeeded);
			var text = eval(HelpWindowText)
			var custom = user._APdefText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'mat':
			var param = MATVocab;
			var amount = eval(MATGrowth);
			var points = eval(MATNeeded);
			var text = eval(HelpWindowText)
			var custom = user._APmatText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'mdf':
			var param = MDFVocab;
			var amount = eval(MDFGrowth);
			var points = eval(MDFNeeded);
			var text = eval(HelpWindowText)
			var custom = user._APmdfText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'agi':
			var param = AGIVocab;
			var amount = eval(AGIGrowth);
			var points = eval(AGINeeded);
			var text = eval(HelpWindowText)
			var custom = user._APagiText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'luk':
			var param = LUKVocab;
			var amount = eval(LUKGrowth);
			var points = eval(LUKNeeded);
			var text = eval(HelpWindowText)
			var custom = user._APlukText || "";
			this._helpWindow.setText(text + custom);
			break;
			case 'cancel':
			this._helpWindow.setText(ReturnText);
			break;
		};
	};

// Window_Overview

	function Window_Overview() {this.initialize.apply(this, arguments);}
	
	Window_Overview.prototype = Object.create(Window_Base.prototype);
	Window_Overview.prototype.constructor = Window_Overview;
	
	Window_Overview.prototype.initialize = function(x, y, width, height) {
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this._actor = null;
		this._width = width;
		this._height = height;
		this.refresh();
	};
	
	Window_Overview.prototype.refresh = function() {
		if (!this._actor) return;
		var actor = this._actor;
		this.contents.clear();
		this.drawActorFace(actor, 0, 0);
		this.drawActorName(actor, 144 + 24, 0);
		this.drawActorClass(actor, this._width - this.textWidth(actor.currentClass().name) - this.standardPadding() * 5, 0);
		this.drawActorParams(0, 144 + this.lineHeight());
		this.drawPoints(this._width / 2 - 144 + this.standardPadding() * 2, this.lineHeight() * 3.5);
	};

	Window_Overview.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    	};
	};

	Window_Overview.prototype.drawPoints = function(x, y) {
		if (!this._actor) return;
		var actor = this._actor;
		this.changeTextColor(this.systemColor());
		this.drawText(PointsVocab, x, y, this.contents.width, 'left');
		var textWidth = this.textWidth(PointsVocab);
		this.changeTextColor(this.systemColor());
		this.drawText(String(actor.distributionPoints()), x + textWidth + this.standardPadding() * 1.5, y, this.contents.width, 'left');
		this.resetTextColor();
	};

	Window_Overview.prototype.useSmallVersion = function() {
		if (Graphics.boxHeight < 768) return true;
		return false;
	};

	Window_Overview.prototype.newColumnRequired = function(y, drawn) {
		var y = y;
		var drawn = drawn;
		var gaugeHeight = 6;
		if (Imported.YEP_CoreEngine) {
			gaugeHeight = this.gaugeHeight();
		};
		if (y + (this.lineHeight() * drawn) + this.lineHeight() * 2 + gaugeHeight > this._height) {
			return true;
		} else {
			return false;
		};
	};

	Window_Overview.prototype.processNewColumn = function(x, y, drawn, flag) {
		var x = x;
		var y = y;
		var drawn = drawn;
		var flag = flag;
		var newColumn = this.newColumnRequired(y, drawn);
		if (newColumn && flag === 1) {
			return (this._width / 2 - this.standardPadding() * 2) + 1;
		} else if (!newColumn && flag === 1) {
			return x;
		};
		if (newColumn && flag === 2) {
			return 0;
		} else if (!newColumn && flag === 2) {
			return drawn;
		};
	};

	Window_Overview.prototype.hpRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = HPCapValue;
		if (actor.currentClass().APSDCaps[0] !== null) {
			var CapValue = actor.currentClass().APSDCaps[0];
		};
		if ($dataActors[actor._actorId].APSDCaps[0] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[0];
		};
		if (eval(HPCap)) {
			return actor.mhp / CapValue
		} else {
			return actor.mhp / actorClass.params[0][actorClass.params[0].length - 1];
		};
	};

	Window_Overview.prototype.mpRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = MPCapValue;
		if (actor.currentClass().APSDCaps[1] !== null) {
			var CapValue = actor.currentClass().APSDCaps[1];
		};
		if ($dataActors[actor._actorId].APSDCaps[1] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[1];
		};
		if (eval(MPCap)) {
			return actor.mmp / CapValue
		} else if (actor.mmp > 0) {
			return actor.mmp / actorClass.params[1][actorClass.params[1].length - 1];
		} else {
			return 0
		};
	};

	Window_Overview.prototype.atkRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = ATKCapValue;
		if (actor.currentClass().APSDCaps[2] !== null) {
			var CapValue = actor.currentClass().APSDCaps[2];
		};
		if ($dataActors[actor._actorId].APSDCaps[2] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[2];
		};
		if (eval(ATKCap)) {
			return actor.atk / CapValue
		} else {
			return actor.atk / actorClass.params[2][actorClass.params[2].length - 1];
		};
	};

	Window_Overview.prototype.defRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = DEFCapValue;
		if (actor.currentClass().APSDCaps[3] !== null) {
			var CapValue = actor.currentClass().APSDCaps[3];
		};
		if ($dataActors[actor._actorId].APSDCaps[3] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[3];
		};
		if (eval(DEFCap)) {
			return actor.def / CapValue
		} else {
			return actor.def / actorClass.params[3][actorClass.params[3].length - 1];
		};
	};

	Window_Overview.prototype.matRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = MATCapValue;
		if (actor.currentClass().APSDCaps[4] !== null) {
			var CapValue = actor.currentClass().APSDCaps[4];
		};
		if ($dataActors[actor._actorId].APSDCaps[4] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[4];
		};
		if (eval(MATCap)) {
			return actor.mat / CapValue
		} else {
			return actor.mat / actorClass.params[4][actorClass.params[4].length - 1];
		};
	};

	Window_Overview.prototype.mdfRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = MDFCapValue;
		if (actor.currentClass().APSDCaps[5] !== null) {
			var CapValue = actor.currentClass().APSDCaps[5];
		};
		if ($dataActors[actor._actorId].APSDCaps[5] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[5];
		};
		if (eval(MDFCap)) {
			return actor.mdf / CapValue
		} else {
			return actor.mdf / actorClass.params[5][actorClass.params[5].length - 1];
		};
	};

	Window_Overview.prototype.agiRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = AGICapValue;
		if (actor.currentClass().APSDCaps[6] !== null) {
			var CapValue = actor.currentClass().APSDCaps[6];
		};
		if ($dataActors[actor._actorId].APSDCaps[6] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[6];
		};
		if (eval(AGICap)) {
			return actor.agi / CapValue
		} else {
			return actor.agi / actorClass.params[6][actorClass.params[6].length - 1];
		};
	};

	Window_Overview.prototype.lukRate = function(actor) {
		var actorClass = actor.currentClass();
		var CapValue = LUKCapValue;
		if (actor.currentClass().APSDCaps[7] !== null) {
			var CapValue = actor.currentClass().APSDCaps[7];
		};
		if ($dataActors[actor._actorId].APSDCaps[7] !== null) {
			var CapValue = $dataActors[actor._actorId].APSDCaps[7];
		};
		if (eval(LUKCap)) {
			return actor.luk / CapValue
		} else {
			return actor.luk / actorClass.params[7][actorClass.params[7].length - 1];
		};
	};


	Window_Overview.prototype.drawActorParams = function(x, y) {
		if (!this._actor) return;
		var actor = this._actor;
		var showGauges = eval(APHideGauges);
		var x = x;
		var y = y;
		var actorClass = actor.currentClass();
		if (this.useSmallVersion()) {
			var gaugeWidth = eval(this._width / 2 - this.standardPadding() * 2);
		} else {
			var gaugeWidth = eval(this._width - this.standardPadding() * 2);
		};
		var drawn = 0;
		// HP
		if (eval(ShowHP)) {
		var rate = this.hpRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(HPColor1), this.textColor(HPColor2));
		this.drawTextEx(HPVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.mhp), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.mhp)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// MP
		if (eval(ShowMP)) {
		var rate = this.mpRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(MPColor1), this.textColor(MPColor2));
		this.drawTextEx(MPVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.mmp), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.mmp)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// ATK
		if (eval(ShowATK)) {
		var rate = this.atkRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(ATKColor1), this.textColor(ATKColor2));
		this.drawTextEx(ATKVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.atk), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.atk)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// DEF
		if (eval(ShowDEF)) {
		var rate = this.defRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(DEFColor1), this.textColor(DEFColor2));
		this.drawTextEx(DEFVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.def), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.def)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// MAT
		if (eval(ShowMAT)) {
		var rate = this.matRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(MATColor1), this.textColor(MATColor2));
		this.drawTextEx(MATVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.mat), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.mat)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// MDF
		if (eval(ShowMDF)) {
		var rate = this.mdfRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(MDFColor1), this.textColor(MDFColor2));
		this.drawTextEx(MDFVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.mdf), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.mdf)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// AGI
		if (eval(ShowAGI)) {
		var rate = this.agiRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(AGIColor1), this.textColor(AGIColor2));
		this.drawTextEx(AGIVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.agi), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.agi)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
		// LUK
		if (eval(ShowLUK)) {
		var rate = this.lukRate(actor);
		x = this.processNewColumn(x, y, drawn, 1);
		drawn = this.processNewColumn(x, y, drawn, 2);
		if (!showGauges) this.drawGauge(x, y + (this.lineHeight() * drawn), gaugeWidth, rate, this.textColor(LUKColor1), this.textColor(LUKColor2));
		this.drawTextEx(LUKVocab, x, y + (this.lineHeight() * drawn));
		this.drawTextEx(String(actor.luk), x + gaugeWidth - this.standardPadding() * 2 - this.textWidth(String(actor.luk)), y + (this.lineHeight() * drawn));
		drawn += 1;
		};
	};

// Window_APSDConfirm
function Window_APSDConfirm() {
	this.initialize.apply(this, arguments);
};

	Window_APSDConfirm.prototype = Object.create(Window_Command.prototype);
	Window_APSDConfirm.prototype.constructor = Window_APSDConfirm;
	
	Window_APSDConfirm.prototype.initialize = function(x, y) {
		Window_Command.prototype.initialize.call(this, x, y);
		this.openness = 0;
	};

	Window_APSDConfirm.prototype.makeCommandList = function() {
		this.addCommand(YesVocab, 'yes');
		this.addCommand(NoVocab, 'no');
	};

	Window_APSDConfirm.prototype.windowHeight = function() {
		return this.fittingHeight(3);
	};

	Window_APSDConfirm.prototype.itemTextAlign = function() {
		return 'center';
	};

// ↓ Thanks to Yanfly here! ↓

	Window_APSDConfirm.prototype.displayText = function() {
		var text = ConfirmText;
		var textWidth = this.textWidth(text) + this.standardPadding() * 4;
		this.width = textWidth;
		this.refresh();
		this.x = (Graphics.boxWidth - this.width) / 2;
    	this.y = (Graphics.boxHeight - this.height) / 2;
    	this.drawTextEx(text, this.standardPadding(), 0);
	};

	Window_APSDConfirm.prototype.itemRect = function(index) {
		var rect = Window_Selectable.prototype.itemRect.call(this, index);
		rect.y += this.lineHeight();
		return rect;
	};

// ↑ ↑
	
// Window_MenuCommand

AP_StatDistribution_Window_MenuCommand_addOriginalCommands =
    Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
    AP_StatDistribution_Window_MenuCommand_addOriginalCommands.call(this);
    this.addStatCommand();
}

Window_MenuCommand.prototype.addStatCommand = function() {
	if (Imported.YEP_MainMenuManager) return;
	if ($gameSystem.isShowDistribution()) this.addCommand(APMenuName, 'distribution', $gameSystem.isEnableDistribution());
}

// Scene_Menu

AP_StatDistribution_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	AP_StatDistribution_createCommandWindow.call(this);
	this._commandWindow.setHandler('distribution', this.commandPersonal.bind(this));
}

AP_StatDistribution_onPersonalOk = Scene_Menu.prototype.onPersonalOk;
Scene_Menu.prototype.onPersonalOk = function() {
	if (this._commandWindow.currentSymbol() === 'distribution') {
		SceneManager.push(Scene_StatDistribution);
	} else {
	AP_StatDistribution_onPersonalOk.call(this);
	}
}

// Game_Actor

AP_StatDistribution_Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	AP_StatDistribution_Game_Actor_setup.call(this, actorId);
	var user = this;
	var a = this;
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	this._distributionPoints = eval(InitialPoints);
	if (Imported.AP_AbilityDistribution) {
		this._abilityPoints = eval(APADInitialPoints);
	} else {
		this._abilityPoints = 0;
	}
	if ($dataClasses[this._classId].initialPoints) this._distributionPoints = eval($dataClasses[this._classId].initialPoints);
	if ($dataActors[actorId].initialPoints) this._distributionPoints = eval($dataActors[actorId].initialPoints);
	if ($dataClasses[this._classId].ADinitialPoints) this._abilityPoints = eval($dataClasses[this._classId].ADinitialPoints);
	if ($dataActors[actorId].ADinitialPoints) this._abilityPoints = eval($dataActors[actorId].ADinitialPoints);
	//V 1.04 
	this._spentPoints = [0, 0, 0, 0, 0, 0, 0, 0];
	this._APParams = [0, 0, 0, 0, 0, 0, 0, 0];
};

Game_Actor.prototype.spentPoints = function(paramNumber) {
	var paramNumber = paramNumber;
	return this._spentPoints[paramNumber];
};

Game_Actor.prototype.resetParamPoints = function(paramNumber) {
	var paramNumber = paramNumber;
	var refund = 0;
	if (this._spentPoints[paramNumber] > 0) {
		refund += this._spentPoints[paramNumber];
		this._spentPoints[paramNumber] = 0;
		var amount = this._APParams[paramNumber];
		this.addParam(paramNumber, -amount);
		this._APParams[paramNumber] = 0;
		this.addDistributionPoints(refund);
	} else {
		return;
	};
};

Game_Actor.prototype.resetPoints = function() {
	var refund = 0;
	for (var i = 0; i < this._spentPoints.length; i++) {
		var pointsSpent = this._spentPoints[i];
		refund += pointsSpent;
		this._spentPoints[i] = 0;
	};
	if (refund > 0) {
	this.addDistributionPoints(refund);
	for (var i = 0; i < this._APParams.length; i++) {
		var amount = this._APParams[i];
		this.addParam(i, -amount);
		this._APParams[i] = 0;
	};
	};
}

Game_Actor.prototype.checkPointsRange = function() {
	var user = this;
	var a = this;
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	this._distributionPoints = Math.max(0, this._distributionPoints);
	this._abilityPoints = Math.max(0, this._abilityPoints);
	this._distributionPoints = Math.floor(Math.min(eval(MaxPoints), this._distributionPoints));
	if (Imported.AP_AbilityDistribution) {
		this._abilityPoints = Math.floor(Math.min(eval(APADMaxPoints), this._abilityPoints));
	};
}

Game_Actor.prototype.distributionPoints = function() {
	return this._distributionPoints;
};

Game_Actor.prototype.abilityPoints = function() {
	return this._abilityPoints;
}

Game_Actor.prototype.addDistributionPoints = function(amount) {
	this._distributionPoints += amount;
	this.checkPointsRange();
};

Game_Actor.prototype.addAbilityPoints = function(amount) {
	this._abilityPoints += amount;
	this.checkPointsRange();
};

AP_StatDistribution_Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
	AP_StatDistribution_Game_Actor_levelUp.call(this);
	var user = this;
	var a = this;
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	var points = eval(LevelUpPoints);
	if (Imported.AP_AbilityDistribution) {
		var ADpoints = eval(APADLevelUpPoints);
	} else {
		var ADpoints = 0;
	}
	if ($dataClasses[this._classId].levelUpPoints) { points = eval($dataClasses[this._classId].levelUpPoints) };
	if ($dataActors[this._actorId].levelUpPoints) { points = eval($dataActors[this._actorId].levelUpPoints) };
	if ($dataClasses[this._classId].ADlevelUpPoints) { ADpoints = eval($dataClasses[this._classId].ADlevelUpPoints) };
	if ($dataActors[this._actorId].ADlevelUpPoints) { ADpoints = eval($dataActors[this._actorId].ADlevelUpPoints) };
	this.addDistributionPoints(points);
	this.addAbilityPoints(ADpoints);
};

AP_StatDistribution_Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
Game_Actor.prototype.displayLevelUp = function(newSkills) {
	AP_StatDistribution_Game_Actor_displayLevelUp.call(this, newSkills);
	if (eval(APShowMessage) && !Imported.YEP_VictoryAftermath) this.displayDistributionPoints();
};

Game_Actor.prototype.displayDistributionPoints = function() {
	var user = this;
	var a = this;
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	var points1 = eval(LevelUpPoints);
	if ($dataClasses[this._classId].levelUpPoints) { points1 = eval($dataClasses[this._classId].levelUpPoints) };
	if ($dataActors[this._actorId].levelUpPoints) { points1 = eval($dataActors[this._actorId].levelUpPoints) };
	var points = String(points1 + " " + PointsVocab);
		var actor = this.name();
		var text = eval(APLevelMessage);
		$gameMessage.newPage();
		$gameMessage.add(text);
};

Game_Actor.prototype.setParamDescription = function(name, text) {
	var name = name.toLowerCase();
	var text = text;
	switch (name) {
		case 'hp':
		this._APhpText = text;
		break;
		case 'mp':
		this._APmpText = text;
		break;
		case 'atk':
		this._APatkText = text;
		break;
		case 'def':
		this._APdefText = text;
		break;
		case 'mat':
		this._APmatText = text;
		break;
		case 'mdf':
		this._APmdfText = text;
		break;
		case 'agi':
		this._APagiText = text;
		break;
		case 'luk':
		this._APlukText = text;
		break;
	};
};

BattleManager.processVictoryFinish = function() {
	this._levelUpHappened = false;
	if (Imported.YEP_VictoryAftermath) {
		for (var i = 0; i < $gameParty.members().length; i++) {
			var actor = $gameParty.members()[i];
			if (actor._preVictoryLv !== actor._level) {
				if (eval(APShowMessage)) actor.displayDistributionPoints();
				this._levelUpHappened = true;
			};
		};
	};
    $gameParty.clearVictoryData();
    this.endBattle(0);
    this.replayBgmAndBgs();
    this._victoryPhase = false;
    if (eval(LevelTransfer) && this._levelUpHappened) SceneManager._stack.push(Scene_StatDistribution);
};

// Game_System

Game_System.prototype.isShowDistribution = function() {
	if (MenuSwitch === 0) {
		return true
		} else {
		return $gameSwitches.value(MenuSwitch);
	};
};

Game_System.prototype.isEnableDistribution = function() {
	if (EnableSwitch === 0) {
		return true
		} else {
		return $gameSwitches.value(EnableSwitch);
	};
};

// Game_Interpreter

AP_StatDistribution_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	AP_StatDistribution_Game_Interpreter_pluginCommand.call(this, command, args);
	if (command === 'AddPoints') {
		$gameActors.actor(parseInt(args[0])).addDistributionPoints(parseInt(args[1]));
	};
	if (command === 'OpenStatDistribution') {
		if (!$gameParty.inBattle()) { SceneManager.push(Scene_StatDistribution) };
	};
	if (command === 'ResetPoints') {
		$gameActors.actor(parseInt(args[0])).resetPoints();
	};
	if (command === 'ResetParamPoints') {
		$gameActors.actor(parseInt(args[0])).resetParamPoints(parseInt(args[1]));
	};
};

// })();
//=============================================================================
// End of Plugin
//=============================================================================
