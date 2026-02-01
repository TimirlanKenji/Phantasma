/*:
 * @target MV
 * @plugindesc v2.0.0 Title Overlay by Switches + Horror Effects Compat
 * @author YourName
 *
 * @param BaseSwitchId
 * @desc ID базового переключателя для оверлеев (1-10000)
 * @type switch
 * @default 10
 *
 * @param Overlay1Name
 * @desc Имя 1-го оверлея из img/titles2/ (Actor1.png)
 * @default Actor1
 *
 * @param Overlay2Name
 * @desc Имя 2-го оверлея из img/titles2/
 * @default Actor2
 *
 * @param Overlay3Name
 * @desc Имя 3-го оверлея из img/titles2/
 * @default Actor3
 *
 * @param Overlay4Name
 * @desc Имя 4-го оверлея из img/titles2/
 * @default Actor4
 *
 * @param Overlay5Name
 * @desc Имя 5-го оверлея из img/titles2/
 * @default Actor5
 *
 * @param Overlay6Name
 * @desc Имя 6-го оверлея из img/titles2/
 * @default Actor6
 *
 * @param OverlayOpacity
 * @desc Прозрачность оверлеев (0-255), по умолчанию 200
 * @type number
 * @min 0
 * @max 255
 * @default 200
 *
 * @param OverlayScale
 * @desc Масштаб оверлеев (1.0 = 100%), по умолчанию 1.0
 * @type number
 * @decimals 2
 * @min 0.5
 * @max 2.0
 * @default 1.0
 *
 * @help TitleOverlaySwitches.js v2.0.0
 * 
 * Добавляет оверлеи поверх стандартного Title1 из img/titles1/.
 * Оверлеи из img/titles2/ (Actor1.png и т.д.).
 * 
 * Логика:
 * - Switch [BaseSwitchId] OFF: только базовый Title1.
 * - Switch 1 ON: + Actor1.png поверх.
 * - Switch 2 ON: + Actor2.png поверх.
 * - ... до Switch 6 ON: + Actor6.png.
 * 
 * Несколько switches могут быть ON одновременно для комбинаций.
 * 
 * Совместимость с Olivia_HorrorEffects:
 * - Добавляет _titleOverlays спрайт в Scene_Title.
 * - Olivia_HorrorEffects должен применять эффекты к _backSprite1/2 и новым _titleOverlays.
 * 
 * Использование:
 * - Завершение за Actor1: Control Switches -> Switch 11 ON.
 * - Script для завершения: $gameSwitches.setValue(baseId+1, true); SceneManager.goto(Scene_Title);
 * 
 * Поместите Actor1.png ... Actor6.png в img/titles2/. Размер ~816x624.
 */

(function() {
    'use strict';
    
    const pluginName = 'TitleOverlaySwitches';
    const parameters = PluginManager.parameters(pluginName);
    const baseSwitchId = parseInt(parameters['BaseSwitchId']) || 1090;
    const overlayOpacity = parseInt(parameters['OverlayOpacity']) || 200;
    const overlayScale = parseFloat(parameters['OverlayScale']) || 1.0;
    
    // Массив имен оверлеев для switches base+1 до base+6
    const overlayNames = [
        null, // index 0 не используется
        parameters['Overlay1Name'] || 'Actor1',
        parameters['Overlay2Name'] || 'Actor2',
        parameters['Overlay3Name'] || 'Actor3',
        parameters['Overlay4Name'] || 'Actor4',
        parameters['Overlay5Name'] || 'Actor5',
        parameters['Overlay6Name'] || 'Actor6'
    ];
    
    // Создание оверлей-спрайта в Scene_Title
    const _Scene_Title_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        _Scene_Title_createBackground.call(this);
        
        // Создаем контейнер для оверлеев поверх базового фона
        this._titleOverlays = new Sprite();
        this._titleOverlays.z = 10; // Поверх _backSprite1/2
        this.addChild(this._titleOverlays);
        
        this.createOverlays();
    };
    
    Scene_Title.prototype.createOverlays = function() {
        if (!this._titleOverlays) return;
        
        // Очищаем предыдущие оверлеи
        this._titleOverlays.removeChildren();
        
        // Добавляем активные оверлеи по switches
        for (let i = 1; i <= 6; i++) {
            if ($gameSwitches.value(baseSwitchId + i)) {
                const overlaySprite = new Sprite();
                overlaySprite.bitmap = ImageManager.loadTitle2(overlayNames[i]);
                overlaySprite.opacity = overlayOpacity;
                overlaySprite.scale.x = overlayScale;
                overlaySprite.scale.y = overlayScale;
                overlaySprite.anchor.x = 0.5;
                overlaySprite.anchor.y = 0.5;
                overlaySprite.x = Graphics.boxWidth / 2;
                overlaySprite.y = Graphics.boxHeight / 2;
                
                this._titleOverlays.addChild(overlaySprite);
            }
        }
    };
    
    // Обновление оверлеев (на случай динамических изменений)
    const _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function() {
        _Scene_Title_update.call(this);
        if (this._titleOverlays) {
            // Olivia_HorrorEffects применит glitch к _titleOverlays автоматически, если патчит Scene_Title
        }
    };
    
    // Загрузка изображений из titles2 (аналогично titles1)
    ImageManager.loadTitle2 = function(filename) {
        return this.loadBitmap('img/titles2/', filename, 0, true);
    };
})();
