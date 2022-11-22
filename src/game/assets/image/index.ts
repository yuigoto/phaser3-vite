/**
 * game/assets/fonts
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetImage } from '@/core/types/assets';

import SpriteDial from "@/assets/img/sprite.dial.png?url";

/**
 * Image asset store.
 */
export const ImageList: Array<AssetImage> = [
  {
    key: 'sprite.dial',
    url: SpriteDial,
    overwrite: false,
    ignore: false,
  },
];
