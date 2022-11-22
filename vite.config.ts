import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path";

import packageInfo from "./package.json";

const CURRENT_WORKING_DIR = process.cwd();

const SASS_PATH = resolve(CURRENT_WORKING_DIR, "src", "assets", "scss").replace(
  /\\/g,
  "/"
);

const SASS_AUTO_IMPORT = `@import "${SASS_PATH}/variables";
@import "${SASS_PATH}/functions";
@import "${SASS_PATH}/mixins";`;

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, CURRENT_WORKING_DIR) };

  return defineConfig({
    plugins: [
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            GAME_TITLE: `${packageInfo.name} | ${packageInfo.version} | ${
              packageInfo?.author ?? ""
            }`,
            GAME_AUTHOR: packageInfo?.author ?? "",
            GAME_DESCRIPTION: packageInfo?.description ?? "",
            GAME_URL: packageInfo?.homepage ?? "",
            GAME_LANG: packageInfo?.lang ?? "",
            GAME_KEYWORDS: packageInfo?.keywords?.join(", ") ?? "",
            GAME_CANVAS_ID: process.env.VITE_GAME_CANVAS_ID,
            GAME_CANVAS_WIDTH: process.env.VITE_GAME_CANVAS_WIDTH,
            GAME_CANVAS_HEIGHT: process.env.VITE_GAME_CANVAS_HEIGHT,
          },
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: SASS_AUTO_IMPORT,
          sassOptions: {
            precision: 8,
            outputStyle: "compressed",
            sourceComments: false,
            includePaths: [SASS_PATH],
            quietDeps: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      // Phaser does not accept/allow inlined assets
      assetsInlineLimit: 0,
    },
  });
};
