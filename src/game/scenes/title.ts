/**
 * game/scenes/title
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { GameObjects, Scene, Types } from 'phaser';

/**
 * Title scene configuration.
 */
const SceneConfig: Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'title',
};

export class Title extends Scene {
  constructor() {
    super(SceneConfig);
  }

  create() {
    this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      640,
      360,
      0x000000,
      1
    );

    this.add.text(4, 4, 'Hello, World!', {
      fontFamily: 'yx_ui',
      fontSize: '16px',
    });

    const sprite: GameObjects.Sprite = this.add.sprite(128, 128, 'sprite.dial');
    sprite.rotation = 35;

    const corridor: GameObjects.Sprite = this.add.sprite(
      64,
      64,
      'spritesheet.corridor'
    );
    corridor.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('spritesheet.corridor', {
        start: 0,
      }),
      frameRate: 30,
      repeat: -1,
      duration: 1000,
    });
    corridor.anims.play({
      key: 'move',
      duration: 500,
    });

    const sound = this.sound.add('sound.door');
    sound.play();
  }
}
