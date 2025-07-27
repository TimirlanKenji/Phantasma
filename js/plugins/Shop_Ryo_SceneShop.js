/*:
 * @plugindesc Ryosonic的自制商店系统。
 * @author Ryosonic
 *
 * @param 买卖物品种类
 * @desc 在买卖窗口中，定义想要卖掉物品的种类数目。
 * @default 4
 *
 * @param 帮助菜单X轴
 * @desc 定义帮助窗口X轴。
 * @default 0
 *
 * @param 帮助菜单Y轴
 * @desc 定义帮助窗口Y轴。
 * @default 516 
 *
 * @param 金钱X轴
 * @desc 定义金钱窗口X轴。
 * @default 580
 *
 * @param 金钱Y轴
 * @desc 定义金钱窗口Y轴。
 * @default 460
 *
 * @param 金钱装饰X轴
 * @desc 定义金钱LayoutX轴。
 * @default 20
 *
 * @param 金钱装饰Y轴
 * @desc 定义金钱LayoutY轴。
 * @default 0
 *
 * @param 买卖窗口X轴
 * @desc 定义买进窗口X轴。
 * @default 20
 *
 * @param 买卖窗口Y轴
 * @desc 定义买进窗口Y轴。
 * @default 120
 *
 * @param 买卖窗口宽
 * @desc 定义窗口宽度。
 * @default 370
 *
 * @param 买卖窗口高
 * @desc 定义窗口高度。
 * @default 400
 *
 * @param 买卖窗口装饰X轴
 * @desc 定义窗口layoutX轴。
 * @default 0
 *
 * @param 买卖窗口装饰Y轴
 * @desc 定义窗口layoutY轴。
 * @default 0
 *
 * @param 状态X轴
 * @desc 定义角色变更窗口X轴。
 * @default 500
 *
 * @param 状态Y轴
 * @desc 定义角色变更窗口Y轴。
 * @default 40
 *
 * @param 状态装饰X轴
 * @desc 定义角色变更窗口LayoutX轴。
 * @default 0
 *
 * @param 状态装饰Y轴
 * @desc 定义角色变更窗口LayoutY轴。
 * @default 0
 *
 * @param 物品种类X轴
 * @desc 定义物品种类窗口X轴。
 * @default 180
 *
 * @param 物品种类Y轴
 * @desc 定义物品种类窗口Y轴。
 * @default 80
 *
 * @param 物品种类倍率
 * @desc X轴各自间隔的大小。
 * @default 00
 *
 * @param 买卖图标位置 1
 * @desc 买进图标位置。
 * @default 570,10
 *
 * @param 买卖图标位置 2
 * @desc 卖出图标位置。
 * @default 660,10
 *
 * @help  
 * 自制的商店系统，仅仅是对原来的商店系统进行了美化，基本没有添加任何功能。
 * 商店界面素材放在img/menus/shop/目录。
 * 虽然写得比较简单，但也是本人辛苦做成的。您可以随便利用、修改。
 * 您可以自行决定是否在致谢名单中添加我的名字。欢迎交流游戏制作心得。
 * 提示：在购买装备界面中按Shift键来查看其他角色装备参数变化。
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
var Imported = Imported || {};
Imported.Ryo_SceneShop = true;
var Ryosonic = Ryosonic || {}; 
Ryosonic.parameters = PluginManager.parameters('Ryo_SceneShop');
Ryosonic.types = Number(Ryosonic.parameters['买卖物品种类']);
Ryosonic.HelpX = Number(Ryosonic.parameters['帮助菜单X轴']);
Ryosonic.HelpY = Number(Ryosonic.parameters['帮助菜单Y轴']);
Ryosonic.GoldX = Number(Ryosonic.parameters['金钱X轴']);
Ryosonic.GoldY = Number(Ryosonic.parameters['金钱Y轴']);
Ryosonic.GoldLayoutX = Number(Ryosonic.parameters['金钱装饰X轴']);
Ryosonic.GoldLayoutY = Number(Ryosonic.parameters['金钱装饰Y轴']);
Ryosonic.ItemX = Number(Ryosonic.parameters['买卖窗口X轴']);
Ryosonic.ItemY = Number(Ryosonic.parameters['买卖窗口Y轴']);
Ryosonic.ItemWidth = Number(Ryosonic.parameters['买卖窗口宽']);
Ryosonic.ItemHeight = Number(Ryosonic.parameters['买卖窗口高']);
Ryosonic.ItemLayoutX = Number(Ryosonic.parameters['买卖窗口装饰X轴']);
Ryosonic.ItemLayoutY = Number(Ryosonic.parameters['买卖窗口装饰Y轴']);
Ryosonic.StatusX = Number(Ryosonic.parameters['状态X轴']);
Ryosonic.StatusY = Number(Ryosonic.parameters['状态Y轴']);
Ryosonic.StatusLayoutX = Number(Ryosonic.parameters['状态装饰X轴']);
Ryosonic.StatusLayoutY = Number(Ryosonic.parameters['状态装饰Y轴']);
Ryosonic.TypesLayoutX = Number(Ryosonic.parameters['物品种类X轴']);
Ryosonic.TypesLayoutY = Number(Ryosonic.parameters['物品种类Y轴']);
Ryosonic.TypesLayoutXPos = Number(Ryosonic.parameters['物品种类倍率']);
Ryosonic.comPosi = [];
for (var i = 0; i < 2; i++) {
Ryosonic.comPosi[i] = (Ryosonic.parameters['买卖图标位置 ' + String(i + 1)] || null);
};	

//==============================
// * Image
//==============================
ImageManager.loadMenusshop = function(filename) {
    return this.loadBitmap('img/menus/shop/', filename, 0, true);
};
//==============================
// * set tcp
//==============================
Scene_Shop.prototype.set_tcp = function(value) {
	if (!value) {return null};
	var s = value.split(',');
	if (!s[0] || !s[1]) {return null};
	return [Number(s[0]),Number(s[1])];
};

//==============================
// * Create Background
//==============================
var _Ryo_SceneShop_CreateBackground = Scene_Shop.prototype.createBackground;
Scene_Shop.prototype.createBackground = function() {
	_Ryo_SceneShop_CreateBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
}

//==============================
// * Create
//==============================
var _Ryo_SceneShop_Create = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function() {
    _Ryo_SceneShop_Create.call(this);
    this.loadBitmaps();
    this.createCommand();
    this._helpWindow.opacity = 0;
    this._helpWindow.x = Ryosonic.HelpX;
    this._helpWindow.y = Ryosonic.HelpY;
    this._goldWindow.x = Ryosonic.GoldX;
    this._goldWindow.y = Ryosonic.GoldY;
    this._goldWindowPos = [this._goldWindow.x, this._goldWindow.y]
    this._goldWindow.y += 100; 
    this._goldWindow.contentsOpacity = 0;
    this._buyWindow.x = Ryosonic.ItemX;
    this._buyWindow.y = Ryosonic.ItemY;
    this._buyWindow.width = Ryosonic.ItemWidth;
    this._buyWindow.height = Ryosonic.ItemHeight;
    this._buyWindow.contentsOpacity = 0;
    this._sellWindow.width = Ryosonic.ItemWidth;
    this._sellWindow.height = Ryosonic.ItemHeight;
    this._sellWindow.x = Graphics.boxWidth / 2 - this._sellWindow.width / 2;
    this._sellWindow.y = Graphics.boxHeight / 2 - this._sellWindow.height / 2;
    this._sellWindow.contentsOpacity = 0;
    this._numberWindow.x = Ryosonic.ItemX;
    this._numberWindow.y = Ryosonic.ItemY;
    this._numberWindowPos = [this._numberWindow.x, this._numberWindow.y]
    this._numberWindow.width = Ryosonic.ItemWidth;
    this._numberWindow.height = Ryosonic.ItemHeight; 
    this._statusWindow.x = Ryosonic.StatusX;
    this._statusWindow.y = Ryosonic.StatusY;
    this._statusWindow.width = 320;
    this._statusWindow.height = 350;
    this._statusWindow.opacity = 0;
    this._statusWindow.contentsOpacity = 0;
};

//==============================
// * loadBitmaps
//==============================
Scene_Shop.prototype.loadBitmaps = function() {
	this._layImg = (ImageManager.loadMenusshop("Layout"));
        this._goldImg = (ImageManager.loadMenusshop("GoldLayout"));
	this._itemImg = (ImageManager.loadMenusshop("ItemLayout"));
        this._statusImg = (ImageManager.loadMenusshop("StatusLayout"));
	this._typeImg = [];
        for (var i = 0; i < Ryosonic.types; i++) {
		this._typeImg[i] = ImageManager.loadMenusshop("type_" + i);
	};
};

//==============================
// * create Sprites
//==============================
Scene_Shop.prototype.createSprites = function() {
	this.createLayout();
        this.createGoldLayout();
        this.createBuyLayout();
        this.createSellLayout();
        this.createStatusLayout();
	this.createCategory();
};

//==============================
// * create Layout
//==============================
Scene_Shop.prototype.createLayout = function() {
	this._layout = new Sprite(this._layImg);
	this._field.addChild(this._layout);
};

//==============================
// * create Gold Layout
//==============================
Scene_Shop.prototype.createGoldLayout = function() {
	this._layoutGold = new Sprite(this._goldImg);
	this._layoutGold.opacity = 0;
	this._field.addChild(this._layoutGold);
};

//==============================
// * create Buy Layout
//==============================
Scene_Shop.prototype.createBuyLayout = function() {
	this._layoutBuy = new Sprite(this._itemImg);
	this._layoutBuy.opacity = 0;
	this._field.addChild(this._layoutBuy);
};

//==============================
// * create Sell Layout
//==============================
Scene_Shop.prototype.createSellLayout = function() {
	this._layoutSell = new Sprite(this._itemImg);
	this._layoutSell.opacity = 0;
	this._field.addChild(this._layoutSell);
};

//==============================
// * create Sell Layout
//==============================
Scene_Shop.prototype.createStatusLayout = function() {
	this._layoutStatus = new Sprite(this._statusImg);
	this._layoutStatus.opacity = 0;
	this._field.addChild(this._layoutStatus);
};

//==============================
// * Create Picture Commands
//==============================
Scene_Shop.prototype.createCommand = function() {
	this._ComPos = [];
	for (var i = 0; i < 2; i++) {
	this._ComPos[i] = this.set_tcp(Ryosonic.comPosi[i]);
        };
	var _com_index_old = -2;
	this._csel = false;
	this._comp = [];
	this._coms = [];	
	this._comd = [];
	for (i = 0; i < this._commandWindow._list.length; i++){
    	this._comp.push(ImageManager.loadMenusshop("Com_" + i));
	this._coms.push(new Sprite(this._comp[i]));
	this.addChild(this._coms[i]);
        this._coms[i].opacity = 0;	
	};
};
//==============================
// * create Category
//==============================
Scene_Shop.prototype.createCategory = function() {
        this._types = [];
	this._typesAni = [];
        for (var i = 0; i < Ryosonic.types; i++) {
	this._typesAni[i] = 0;
	this._types[i] = new Sprite(this._typeImg[i]);
	this._types[i].anchor.x = 0.5;
	this._types[i].anchor.y = 0.5;
	this._types[i].x = Ryosonic.TypesLayoutX + i * Ryosonic.TypesLayoutXPos;
	this._types[i].y = Ryosonic.TypesLayoutY;
	this._field.addChild(this._types[i]);
        this._types[i].opacity = 0;
	};
};

//==============================
// * update Category
//==============================
Scene_Shop.prototype.updateCategory = function() {
	for (var i = 0; i < this._types.length; i++) {
		 if (this._categoryWindow._index === i && this._categoryWindow.active) {
			 if (this._typesAni[i] === 0) {
			     this._types[i].scale.x += 0.010;
				 if (this._types[i].scale.x >= 1.30) {
					 this._types[i].scale.x = 1.30;
					 this._typesAni[i] = 1; 
				 };
			 } else  {
				 this._types[i].scale.x -= 0.010;
				 if (this._types[i].scale.x <= 1.00) {
					 this._types[i].scale.x = 1.00;
					 this._typesAni[i] = 0; 
				 };				 
			 };	
			 this._types[i].opacity += 20;		 
		 } else {
		     this._typesAni[i] = 0
			 if (this._types[i].scale.x >= 1.00) {
				 this._types[i].scale.x -= 0.010;
				 if (this._types[i].scale.x <= 1.00) {
					 this._types[i].scale.x = 1.00;
				 };	
			 };	
			 if (this._types[i].opacity > 180) {
				 this._types[i].opacity -= 15; 
			 };	 
		 };
		 
		 this._types[i].scale.y = this._types[i].scale.x;
	};
};


//==============================
// * update Default Window
//==============================
Scene_Shop.prototype.updateDefaultWindow = function() {
       this._helpWindow.opacity = 0;
       this._goldWindow.opacity = 0;
       this._commandWindow.opacity = 0;
       this._commandWindow.x = -this._categoryWindow.width;
       this._categoryWindow.opacity = 0;
       this._categoryWindow.x = -this._categoryWindow.width;
       this._dummyWindow.opacity = 0;
       this._dummyWindow.x = -this._categoryWindow.width;
       this._buyWindow.opacity = 0;
       this._sellWindow.opacity = 0;
       this._numberWindow.opacity = 0;
};

//==============================
// * update Buy Layout
//==============================
Scene_Shop.prototype.updateBuyLayout = function() {
	this._layoutBuy.x = this._buyWindow.x + Ryosonic.ItemLayoutX;
	this._layoutBuy.y = this._buyWindow.y + Ryosonic.ItemLayoutY;
	this._layoutBuy.opacity = this._buyWindow.contentsOpacity;
};

//==============================
// * update Sell Layout
//==============================
Scene_Shop.prototype.updateSellLayout = function() {
	this._layoutSell.x = this._sellWindow.x + Ryosonic.ItemLayoutX;
	this._layoutSell.y = this._sellWindow.y + Ryosonic.ItemLayoutY;
	this._layoutSell.opacity = this._sellWindow.contentsOpacity;
};

//==============================
// * update Gold Layout
//==============================
Scene_Shop.prototype.updateGoldLayout = function() {
	this._layoutGold.x = this._goldWindow.x + Ryosonic.GoldLayoutX;
	this._layoutGold.y = this._goldWindow.y + Ryosonic.GoldLayoutY;
	this._layoutGold.opacity = this._goldWindow.contentsOpacity;
};

//==============================
// * Reset Position
//==============================
Scene_Shop.prototype.resetPosition = function() {
   if (SceneManager.isSceneChanging()) {return};
   if (this._categoryWindow.active || this._sellWindow.active) {
      for (i = 0; i < Ryosonic.types; i++) {
         this._types[i].opacity += 25;
      }
   } else {
        for (i = 0; i < Ryosonic.types; i++) {
         this._types[i].opacity -= 25;
      }
   };
   this.updateCategory();
   if (this._buyWindow.active) {
        this._buyWindow.contentsOpacity += 25;
        this._numberWindow.x = this._buyWindow.x;
        this._numberWindow.y = this._buyWindow.y;
        this._statusWindow.x = Ryosonic.StatusX;
      } else if (!this._buyWindow.active && !this._numberWindow.active){
        this._buyWindow.contentsOpacity -= 25;
      } else {};
     if (this._categoryWindow.active || this._sellWindow.active) {
        this._sellWindow.contentsOpacity += 25;
        this._numberWindow.x = this._sellWindow.x;
        this._numberWindow.y = this._sellWindow.y;
        this._statusWindow.x = - Ryosonic.StatusX;
      } else if (!this._sellWindow.visible && !this._numberWindow.active) {
        this._sellWindow.contentsOpacity -= 25;
     } else {};
     if (this._buyWindow.visible) {
        this._statusWindow.contentsOpacity += 25;
     } else if (this._commandWindow.active){
        this._statusWindow.contentsOpacity -= 25;
     };
     this.updateStatusLayout();
     this.updateSellLayout();
     this.updateBuyLayout();
};
//==============================
// * update Gold Window
//==============================
Scene_Shop.prototype.updateGoldWindow = function() {
        if (this._goldWindow.y > this._goldWindowPos[1]){
	this._goldWindow.y -= 10;
        };
        if (this._goldWindow.y <= this._goldWindowPos[1]){
	this._goldWindow.y = this._goldWindowPos[1];
        };
        this._goldWindow.contentsOpacity += 25;
};

//==============================
// * update Status Layout
//==============================
Scene_Shop.prototype.updateStatusLayout = function() {
	this._layoutStatus.x = this._statusWindow.x + Ryosonic.StatusLayoutX;
	this._layoutStatus.y = this._statusWindow.y + Ryosonic.StatusLayoutY;
	this._layoutStatus.opacity = this._statusWindow.contentsOpacity;
};

//==============================
// * Refresh Picture Command
//==============================
Scene_Shop.prototype.refreshCommands = function() {
	this._com_index_old = this._commandWindow._index;
	for (i = 0; i < 2; i++){
	    if (this._commandWindow._index != i) {
                var ch = this._comp[i].height / 2;
	     } else {
		var ch = 0;
             }
	     this.cpsx = [this._ComPos[i][0],this._ComPos[i][1]];
	     this._coms[i].setFrame(0, ch, this._comp[i].width, this._comp[i].height / 2);
	     this._coms[i].x = this.cpsx[0];
	     this._coms[i].y = this.cpsx[1];
	     this._comd[i] = [this._coms[i].x,this._comp[i].width ,this._coms[i].y,this._comp[i].height / 2 ];
	}; 
};
  
//==============================
// * Update Picture Commands
//==============================
Scene_Shop.prototype.updateCommands = function() {
	if (this._com_index_old != this._commandWindow._index){ 
            this.refreshCommands();
        };
	if (TouchInput.isTriggered()) {
	    for (i = 0; i < 2; i++){
		if (this.comCommand(i) && !this._csel ) {				
		    this._commandWindow._index = i;	
                    this._commandWindow.processOk();
	            if (this._commandWindow.isCommandEnabled(i)) {
                       this._csel = true;
                    };
		 };		
	    };
	};
};

//==============================
// * On Picture Com
//==============================
Scene_Shop.prototype.comCommand = function(index) {
	 if (TouchInput.x < this._comd[index][0]) {return false};
	 if (TouchInput.x > this._comd[index][0] + this._comd[index][1]) {return false};
	 if (TouchInput.y < this._comd[index][2]) {return false};
	 if (TouchInput.y > this._comd[index][2] + this._comd[index][3]) {return false};
	 return true;	 
};

//==============================
// * Update
//==============================
var _ryo_Sceneshop_update = Scene_Shop.prototype.update;
Scene_Shop.prototype.update = function() {
     _ryo_Sceneshop_update.call(this);
     this.updateDefaultWindow();
     if (!this._layout) {
	if (this._layImg.isReady()) {this.createSprites()};
	return
     };
     this.updateCommands();
     this.updateGoldWindow();
     this.updateGoldLayout();
     this.resetPosition();
     this._coms[0].opacity += 25;
     this._coms[1].opacity += 25;
     if (this._commandWindow._purchaseOnly && this._coms[1].opacity > 150) this._coms[1].opacity = 150;
};

//==============================
// * Shop Command Change
//==============================
Window_ShopCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.buy,    'buy');
    this.addCommand(TextManager.sell,   'sell',   !this._purchaseOnly);
};

//=============================================================================
// ** Window Shop Status
//=============================================================================
var _ryo_Window_ShopStatus_initialize = Window_ShopStatus.prototype.initialize;
Window_ShopStatus.prototype.initialize = function(x, y, width, height) {
    _ryo_Window_ShopStatus_initialize.call(this, x, y, width, height);
    this._parData = [0,0];
    this._parImg = ImageManager.loadMenusshop("Par");
};

Window_ShopStatus.prototype.drawPossession = function(x, y) {
    var width = 120;
    var possessionWidth = 120;
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.possession, x - 8, y, width);
    this.resetTextColor();
    this.drawText($gameParty.numItems(this._item), x - 8, y, possessionWidth, 'right');
};

Window_ShopStatus.prototype.drawActorEquipInfo = function(x, y, actor) {
    var enabled = actor.canEquip(this._item);
    this.changePaintOpacity(enabled);
    this.resetTextColor();
    var item1 = this.currentEquippedItem(actor, this._item.etypeId);
    for (var i = 0;i < 7;i++){
        this.contents.fontSize = 20;
        this.drawText(actor.param(i), x + 130, y - 6 + i * 36, 48, 'right');
    }
    if (enabled) {
        this.drawActorParamChange(x, y - 6, actor, item1);
    }
    this.changePaintOpacity(true);
    this._faceSprite = new Sprite();
    this._faceSprite.x = 150;
    this._faceSprite.y = -15;
    this._faceSprite.bitmap = ImageManager.loadMenusshop("Actor_" + actor._actorId);
    this.addChild(this._faceSprite);
};

Window_ShopStatus.prototype.drawActorParamChange = function(x, y, actor, item1) {
    this.contents.fontSize = 20;
    var width = 96;
    var paramId = this.paramId();
    var change = this._item.params[paramId] - (item1 ? item1.params[paramId] : 0);
   var his = actor.param(paramId) + change;
   this._parData[0] = this._parImg.width / 3;
   this._parData[1] = this._parImg.height;
   if (change > 0) {
	var sx = this._parData[0];
   } else if (change < 0) {
	var sx = this._parData[0] * 2;
   } else {
	var sx = 0	
   };		
   this.contents.blt(this._parImg, sx, 0, this._parData[0], this._parData[1], x + 182, y + 6 + paramId * 36);
    this.changeTextColor(this.paramchangeTextColor(change));
    this.drawText(his, x + 204, y + paramId * 36, width, 'left');
};

Window_ShopStatus.prototype.pageSize = function() {
    return 1;
};

Window_ShopStatus.prototype.updatePage = function() {
    if (this.isPageChangeEnabled() && this.isPageChangeRequested()) {
        this.removeChild(this._faceSprite);
        this.changePage();
    }
};
