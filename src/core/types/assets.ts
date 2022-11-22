/**
 * core/types/assets
 * ----------------------------------------------------------------------
 * Core types for assets.
 *
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { Types } from 'phaser';

/**
 * Basic asset.
 */
export type Asset = Record<string, any> & {
  /**
   * Asset key, must be unique.
   */
  key: string;

  /**
   * Asset path.
   */
  url: string;

  /**
   * If the asset should be ignored by the loader.
   */
  ignore: boolean;
};

/**
 * Texture atlas asset type.
 */
export type AssetAtlas = Asset & {
  /**
   * Asset atlas file path.
   */
  atlasUrl?: string;

  /**
   * Atlas XHR settings.
   */
  atlasXhrSettings?: Types.Loader.XHRSettingsObject;

  /**
   * Texture XHR settings.
   */
  textureXhrSettings?: Types.Loader.XHRSettingsObject;
};

/**
 * Bitmap font asset type.
 */
export type AssetBitmapFont = Asset & {
  /**
   * Path to the file containing the bitmap font's texture atlas, in
   * XML/JSON formats.
   */
  fontDataURL?: string | undefined;
};

/**
 * Image asset type.
 */
export type AssetImage = Asset & {
  /**
   * Defines if this sprite should overwrite an unloaded file with the same
   * name or key.
   */
  overwrite?: boolean;
};

/**
 * Sound asset type.
 */
export type AssetSound = Omit<Asset, 'url'> & {
  /**
   * Path to a file, or array of paths, for the current sound.
   *
   * Overwrites the parent `file`, since sounds can be loaded on multiple
   * formats (mp3, ogg, wav).
   */
  url: string | Array<string>;
};

/**
 * Sprite sheet asset type.
 */
export type AssetSpriteSheet = Asset & {
  /**
   * Fixed frame width.
   */
  frameWidth: number;

  /**
   * Fixed frame height.
   */
  frameHeight: number;

  /**
   * Frame to start parsing at.
   */
  startFrame?: number;

  /**
   * Frame to stop parsing at.
   */
  endFrame?: number;

  /**
   * Margin around each frame, in pixels, optional.
   */
  margin?: number;

  /**
   * Spacing around each frame, in pixels, optional.
   */
  spacing?: number;
};

/**
 * Tile map asset type.
 */
export type AssetTileMap = Asset & {
  /**
   * Tilemap format.
   */
  type: 'impact' | 'csv' | false | undefined | null;

  /**
   * Tilemap settings.
   */
  xhrSettings?: Types.Loader.XHRSettingsObject;
};

/**
 * Asset list, used to group all assets under a single tree.
 */
export type AssetList = Record<string, any> & {
  /**
   * Atlas asset list.
   */
  atlas?: Array<AssetAtlas>;

  /**
   * Bitmap font asset list.
   */
  bitmapFont?: Array<AssetBitmapFont>;

  /**
   * Image asset list.
   */
  image?: Array<AssetImage>;

  /**
   * Sound asset list.
   */
  sound?: Array<AssetSound>;

  /**
   * Sprite sheet asset list.
   */
  spriteSheet?: Array<AssetSpriteSheet>;

  /**
   * Tile map asset list.
   */
  tileMap?: Array<AssetTileMap>;
};
