/*:
 * @plugindesc PH_EventOptimizer
 * Optimizes event processing to improve FPS:
 * - Skips updating map events outside the screen
 * - Limits parallel events update rate (not every frame)
 * @author Tim Kenji
 *
 * @param SkipOffscreenEvents
 * @desc Skip updating events outside screen (true/false)
 * @default true
 *
 * @param ParallelUpdateInterval
 * @desc Update parallel events every N frames (1 = every frame, 2 = every 2nd, etc.)
 * @default 2
 *
 * @param DebugMode
 * @desc Show debug info in console (true/false)
 * @default false
 *
 * @help
 * Optimization plugin for RPG Maker MV projects.
 *
 * Features:
 * - Skips updating map events that are outside the visible screen area.
 * - Limits how often parallel events are updated (e.g. every 2nd frame).
 *
 * Recommended settings:
 * - SkipOffscreenEvents: true
 * - ParallelUpdateInterval: 2 or 3
 *
 * Use F2 in game to monitor FPS.
 */

(function() {
    const params = PluginManager.parameters('PH_EventOptimizer');
    const skipOffscreen = (params['SkipOffscreenEvents'] || 'true').toLowerCase() === 'true';
    const parallelInterval = Number(params['ParallelUpdateInterval'] || 2);
    const debugMode = (params['DebugMode'] || 'false').toLowerCase() === 'true';

    // Вспомогательная функция: видно ли событие на экране
    function isEventVisible(event) {
        if (!event) return false;
        const tw = $gameMap.tileWidth();
        const th = $gameMap.tileHeight();
        const sx = $gameMap.displayX() * tw;
        const sy = $gameMap.displayY() * th;
        const sw = Graphics.width;
        const sh = Graphics.height;

        const ex = event.scrolledX() * tw;
        const ey = event.scrolledY() * th;

        // Небольшой запас по краям
        const margin = Math.max(tw, th);
        return (
            ex >= sx - margin &&
            ex <= sx + sw + margin &&
            ey >= sy - margin &&
            ey <= sy + sh + margin
        );
    }

    // Переопределяем обновление событий на карте
    const _Game_Map_updateEvents = Game_Map.prototype.updateEvents;
    Game_Map.prototype.updateEvents = function() {
        if (!skipOffscreen) {
            return _Game_Map_updateEvents.call(this);
        }

        // Авторан-события всегда обновляем
        this._events.forEach(event => {
            if (!event) return;
            if (!event.isRunning()) return;
            if (event.event().trigger === 1) { // Autorun
                event.update();
                return;
            }
            // Параллельные и обычные события
            if (isEventVisible(event)) {
                event.update();
            } else if (debugMode && event.isRunning() && event.event().trigger === 2) {
                // Можно логгировать, сколько параллельных пропускается
                // console.log('Skipped offscreen parallel event ID:', event.eventId());
            }
        });

        // Параллельные общие события обрабатываем отдельно с ограничением по частоте
        this.updateParallelCommonEventsOptimized();
    };

    // Оптимизированная версия обновления параллельных common events
    Game_Map.prototype.updateParallelCommonEventsOptimized = function() {
        if (!this._commonEvents) return;

        // Глобальный счётчик кадров для интервала
        if (!this._ph_parallelFrameCounter) {
            this._ph_parallelFrameCounter = 0;
        }
        this._ph_parallelFrameCounter++;

        // Обновляем только раз в parallelInterval кадров
        if (this._ph_parallelFrameCounter % parallelInterval !== 0) {
            return;
        }

        for (const interpreter of this._commonEvents) {
            if (!interpreter) continue;
            const ev = interpreter._event;
            if (!ev) continue;
            if (ev.trigger === 2) { // Parallel
                interpreter.update();
            }
        }
    };

    if (debugMode) {
        console.log('[PH_EventOptimizer] Loaded. SkipOffscreen:', skipOffscreen, 'ParallelInterval:', parallelInterval);
    }
})();