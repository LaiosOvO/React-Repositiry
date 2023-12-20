import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// import lessToJs from 'less-vars-to-js';
// import {readFileSync} from "fs";
// const varLessPath = "./theme/var.less"
// const mapToken = defaultAlgorithm(defaultSeed);
// const customVarLessJson = lessToJs(varLessStr, { resolveVariables: true, stripPrefix: true });
// const varLessStr = readFileSync(varLessPath, 'utf-8')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    MENU_PATH: `"path"`,
    MENU_SHOW: `"show"`,
    MENU_KEEPALIVE: `"keep_alive"`,
    MENU_KEY: `"m_id"`,
    MENU_ICON: `"icon"`,
    MENU_TITLE: `"title"`,
    MENU_CHILDREN: `"children"`,
    MENU_PARENTKEY: `"parent_m_id"`,
    MENU_ALLPATH: `"allPath"`,
    MENU_PARENTPATH: `"parentPath"`,
    MENU_LAYOUT: `'layout'`,
    MENU_ORDER: `"order"`,
    __IS_THEME__: `${process.env.REACT_APP_COLOR === "1"}`,
    // CUSTOMVARLESSDATA: `${JSON.stringify(customVarLessJson)}`
  },
  resolve: {
    alias: {
      "@": resolve(".", "./src"),
      "~": resolve(".", "./node_modules")
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', ".less"]
  },
  envPrefix: ['VITE_','DB_','NODE_','REACT_APP_']
})

