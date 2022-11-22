/**
 * game/config
 * ----------------------------------------------------------------------
 * Phaser game configuration.
 *
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AUTO, Scale, Types } from 'phaser';
import { Boot } from '@/game/scenes/boot';
import { Preload } from '@/game/scenes/preload';
import { Title } from '@/game/scenes/title';
import Info from '@/info.json';

/**
 * Game configuration.
 */
const config: Types.Core.GameConfig = {};

config.title = Info.name;

config.type = AUTO;

config.pixelArt = true;

config.scale = {
  width: parseInt(import.meta.env.VITE_GAME_CANVAS_WIDTH) ?? 640,
  height: parseInt(import.meta.env.VITE_GAME_CANVAS_HEIGHT) ?? 360,
  autoCenter: Scale.CENTER_HORIZONTALLY,
  mode: Scale.FIT,
};

console.log(config.scale);

config.physics = {
  default: 'arcade',
  arcade: {
    debug: true,
  },
};

config.parent = import.meta.env.VITE_GAME_CANVAS_ID;

config.backgroundColor = '#6d6d6d';

config.scene = [Boot, Preload, Title];

export default config;
