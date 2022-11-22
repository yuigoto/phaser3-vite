/**
 * game/assets/spritesheet
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetSpriteSheet } from '@/core/types/assets';

import SpriteSheetCorridor from "@/assets/img/spritesheet.corridor.png?url";

/**
 * Spritesheet store.
 */
export const SpriteSheetList: Array<AssetSpriteSheet> = [
  {
    key: 'spritesheet.corridor',
    url: SpriteSheetCorridor,
    frameWidth: 64,
    frameHeight: 64,
    startFrame: 0,
    endFrame: 11,
    margin: 0,
    spacing: 0,
    skipFrames: 0,
    ignore: false,
  },
];
