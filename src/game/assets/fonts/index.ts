/**
 * game/assets/fonts
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetBitmapFont } from '@/core/types/assets';

import YxUiAtlas from "@/assets/fonts/yx.ui.png?url";
import YxUiData from "@/assets/fonts/yx.ui.fnt?url";

/**
 * Bitmap font store.
 */
export const BitmapFontList: Array<AssetBitmapFont> = [
  {
    key: 'yx_ui',
    url: YxUiAtlas,
    fontDataURL: YxUiData,
    ignore: false,
  },
];
