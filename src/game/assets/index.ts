/**
 * game/assets
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetList } from '@/core/types/assets';
import { AtlasList } from '@/game/assets/atlas';
import { BitmapFontList } from '@/game/assets/fonts';
import { ImageList } from '@/game/assets/image';
import { SoundList } from '@/game/assets/sound';
import { SpriteSheetList } from '@/game/assets/spritesheet';
import { TilemapList } from '@/game/assets/tilemap';

/**
 * Asset store master.
 */
const Assets: AssetList = {
  atlas: AtlasList,
  bitmapFont: BitmapFontList,
  image: ImageList,
  sound: SoundList,
  spriteSheet: SpriteSheetList,
  tileMap: TilemapList,
};

export default Assets;
