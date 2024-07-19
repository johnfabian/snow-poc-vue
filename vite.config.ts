import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'index.[hash].js',
        chunkFileNames: 'index.[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'index.[hash].css'
          return 'assets/[name].[hash].[ext]'
        }
      }
    },
    cssCodeSplit: false, //this prevents multiple files so we only have to deploy 1 JS and 1 CSS file
    minify: 'esbuild',
    target: 'es2015',
    outDir: 'dist',
    assetsDir: '.',
    emptyOutDir: true,
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'SnowApp',
      fileName: 'index',
      formats: ['iife'] //this creates a IIFE so app runs once loaded since we are inside of SNOW
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': {} //Need this line otherwise SNOW will throw error, process not defined
  }
})
