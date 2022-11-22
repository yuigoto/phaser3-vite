/**
 * game/scenes/preload
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { GameObjects, Scene, Types } from 'phaser';
import Assets from '@/game/assets';

/**
 * Preload scene configuration.
 */
const SceneConfig: Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'preload',
};

/**
 * Preload scene.
 */
export class Preload extends Scene {
  /**
   * Preload inner bar.
   */
  preloadInner: GameObjects.Sprite | null = null;

  /**
   * Preload outer frame.
   */
  preloadOuter: GameObjects.Sprite | null = null;

  /**
   * Preload scene constructor.
   */
  constructor() {
    super(SceneConfig);
  }

  /**
   * Preloads all assets.
   */
  preload() {
    this.setLoaderSprites();

    this.load.on('progress', (value: number) => {
      if (this.preloadInner) this.preloadInner.setScale(value, 1);
    });

    if (Assets?.image) {
      for (let image of Assets.image) {
        if (!image.ignore) {
          this.load.image(image.key, image.url);
        }
      }
    }

    if (Assets?.sound) {
      for (let sound of Assets.sound) {
        if (!sound.ignore) {
          this.load.audio(sound.key, sound.url);
        }
      }
    }

    if (Assets?.spriteSheet) {
      for (let spriteSheet of Assets.spriteSheet) {
        if (!spriteSheet.ignore) {
          this.load.spritesheet(spriteSheet.key, spriteSheet.url, {
            frameWidth: spriteSheet.frameWidth,
            frameHeight: spriteSheet.frameHeight,
            startFrame: spriteSheet.startFrame,
            endFrame: spriteSheet.endFrame,
            margin: spriteSheet.margin,
            spacing: spriteSheet.spacing,
          });
        }
      }
    }

    if (Assets?.bitmapFont) {
      for (let bitmapFont of Assets.bitmapFont) {
        if (!bitmapFont.ignore) {
          this.load.bitmapFont(
            bitmapFont.key,
            bitmapFont.url,
            bitmapFont.fontDataURL
          );
        }
      }
    }

    if (Assets?.atlas) {
      for (let atlas of Assets.atlas) {
        if (!atlas.ignore) {
          this.load.atlas(
            atlas.key,
            atlas.url,
            atlas.atlasUrl,
            atlas.textureXhrSettings,
            atlas.atlasXhrSettings
          );
        }
      }
    }

    if (Assets.tileMap) {
      for (let tileMap of Assets.tileMap) {
        if (!tileMap.ignore) {
          switch (tileMap.type) {
            case 'csv':
              this.load.tilemapCSV(
                tileMap.key,
                tileMap.url,
                tileMap.xhrSettings
              );
              break;
            case 'impact':
              this.load.tilemapImpact(
                tileMap.key,
                tileMap.url,
                tileMap.xhrSettings
              );
              break;
            default:
              this.load.tilemapTiledJSON(
                tileMap.key,
                tileMap.url,
                tileMap.xhrSettings
              );
              break;
          }
        }
      }
    }

    // Load @font-face fonts here, if needed.
  }

  /**
   * Creates the scene.
   */
  create() {
    this.scene.start('title');
  }

  /**
   * Sets the preloader sprites.
   */
  protected setLoaderSprites() {
    this.preloadOuter = this.add.sprite(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'loader.outer'
    );
    this.preloadOuter.setOrigin(0, 0);
    this.preloadOuter.x -= this.preloadOuter.width / 2;
    this.preloadOuter.y -= this.preloadOuter.height / 2;

    this.preloadInner = this.add.sprite(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'loader.inner'
    );
    this.preloadInner.setOrigin(0, 0);
    this.preloadInner.x -= this.preloadInner.width / 2;
    this.preloadInner.y -= this.preloadInner.height / 2;
  }
}
