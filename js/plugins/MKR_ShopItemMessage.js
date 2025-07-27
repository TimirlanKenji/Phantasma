//===============================================================================
// MKR_ShopItemMessage.js
//===============================================================================
// (c) 2016 Mankind
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------------------------------
// Version
// 1.0.0 2018/12/03 Initial release
// ------------------------------------------------------------------------------
// [Twitter] https://twitter.com/mankind_games/
//  [GitHub] https://github.com/mankindGames/
//    [Blog] http://mankind-games.blogspot.jp/
//===============================================================================

/*:
 * ==============================================================================
 * @plugindesc (v1.0.0) Shop Item Message
 * @author Mankind
 *
 * @help
 * ============================================================================
 *   Shop Item Message ver 1.0.0
 *   MKR_ShopItemMessage.js
 * ----------------------------------------------------------------------------
 *   edited for integration with NPCDialogueShop by mjshi
 *   Installation: Place below NPCDialogueShop
 * ----------------------------------------------------------------------------
 *
 *   When buying in the shop, the text in the note box is shown instead
 *   of the original item description that's displayed in the help window.
 *
 *   Notebox:
 *     <shop_mes: Shop Text>
 *     - Item description to show by default in the shop
 * 
 *     <shop_mes#: Specific text>
 *     - Item description to show for a specific NPC shopkeeper index.
 *     - example: 
 *         <shop_mes2: This was dug straight out of the mines!
 *         You interested?>
 *       would show:
 *         This was dug straight out of the mines!
 *         You interested?
 *       instead of the item's default description for the NPC at index 2.
 *
 *
 * Plugin parameter:
 *   None
 *
 *
 * Plugin command:
 *   None
 *
 *
 * Script call:
 *   None
 *
 *
 * Terms of Use:
 *   ・It's possible modify and redistribute this plugin without author's permission.
 *     (However please include copyright part of the header.)
 *
 *   ・There are no usage restrictions (free game, commercial game, R-18 work etc.).
 *     Please use it freely.
 *
 *   ・The author is not responsible for problems caused by using this plugin.
 *
 * ==============================================================================
 *
*/

var Imported = Imported || {};
Imported.MKR_ShopItemMessage = true;

(function () {
    'use strict';

    const PN = "MKR_ShopItemMessage";

    const GetMeta = function (meta, name, sep) {
        let value, values, i, count;
        value = "";
        values = [];
        name = name.toLowerCase().trim();

        Object.keys(meta).forEach(function (key) {
            if (key.toLowerCase().trim() == name) {
                value = meta[key].trim();
                return false;
            }
        });

        if (sep !== undefined && sep != "" && value != "") {
            values = value.split(sep);
            count = values.length;
            values = values.map(function (elem) {
                return elem.trim();
            });

            return values;
        }

        return value;
    };


    //=========================================================================
    // Window_ShopBuy
    //  ・Redefine update process for the help window.
    //
    //=========================================================================
    if (Imported.NPCDialogueShop) {
        var shopkeepNumber = parseInt(PluginManager.parameters('NPCDialogueShop')['Shopkeep Variable']);
    }
    const _Window_ShopBuy_updateHelp = Window_ShopBuy.prototype.updateHelp;
    Window_ShopBuy.prototype.updateHelp = function () {
        let item, text;
        item = this.item();
        text = GetMeta(item.meta, "shop_mes");
        
        if (Imported.NPCDialogueShop) {
            var npc_text = GetMeta(item.meta, "shop_mes" + $gameVariables.value(shopkeepNumber));
            if (npc_text) text = npc_text;
        }

        _Window_ShopBuy_updateHelp.call(this);

        if (this._helpWindow && text) {
            this._helpWindow.setText(text);
        }
    };


})();