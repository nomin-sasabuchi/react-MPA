import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import glob from 'glob'

const entries = {}
const srcDir = './entries/'
const distDir = `./dist/`

const srcFileKeys = glob.sync('**/index.+(js|ts|tsx)', { cwd: srcDir })
srcFileKeys.map((key) => {
  const srcFilepath = path.join(srcDir, key)
  entries[key] = srcFilepath
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: entries,
    },
    outDir: distDir,
    assetsDir: '',
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})
