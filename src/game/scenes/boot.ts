/**
 * game/scenes/boot
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { Scene, Types } from 'phaser';
import LoaderInner from '@/assets/img/ui/loader.inner.png?url';
import LoaderOuter from '@/assets/img/ui/loader.outer.png?url';

/**
 * Boot scene configuration.
 */
const SceneConfig: Types.Scenes.SettingsConfig = {
  active: true,
  visible: false,
  key: 'boot',
};

/**
 * Boot scene.
 */
export class Boot extends Scene {
  /**
   * Boot scene constructor.
   */
  constructor() {
    super(SceneConfig);
  }

  /**
   * Preloads all assets.
   */
  preload() {
    this.load.image(
      'loader.inner',
      LoaderInner
    );
    this.load.image(
      'loader.outer',
      LoaderOuter
    );
  }

  /**
   * Creates the scene.
   */
  create() {
    // [TODO]: this.input.maxPointers?
    // [TODO]: this.input.smoothed?
    // [TODO]: this.input.disableVisibilityChange?

    if (this.game.device.os.desktop) {
      // DESKTOP
      // [TODO]: this.scale.pageAlignHorizontally?
    } else {
      // MOBILE
    }

    this.scene.start('preload');
  }
}
