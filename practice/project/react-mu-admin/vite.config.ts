import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // set alias
    alias: {
      '/@/': resolve(__dirname, 'src') + '/'
    }
  }
})
