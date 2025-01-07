import path from 'node:path'
import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      name: 'LcText',
      formats: ['umd'],
      fileName: `lc-text.${pkg.version}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
        format: 'umd',
        name: 'LcText',
      },
    },
  },
  define: {
    'process.env': {},
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
})
