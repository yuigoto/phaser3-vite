/**
 * game/assets/sound
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetSound } from '@/core/types/assets';

import SoundDoor from "@/assets/audio/sound.door.mp3?url";
import SoundDoorOgg from "@/assets/audio/sound.door.ogg?url";
import SoundLock from "@/assets/audio/sound.door.mp3?url";
import SoundLockOgg from "@/assets/audio/sound.door.ogg?url";

/**
 * Sound and music store.
 */
export const SoundList: Array<AssetSound> = [
  {
    key: 'sound.door',
    url: [
      SoundDoor,
      SoundDoorOgg
    ],
    ignore: false,
  },
  {
    key: 'sound.lock',
    url: [
      SoundLock,
      SoundLockOgg
    ],
    ignore: false,
  },
];
