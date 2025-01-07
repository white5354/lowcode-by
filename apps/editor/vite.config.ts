import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages', // 自定义需要生成路由的文件目录，默认为src下的pages文件
      extensions: ['tsx', 'ts'], // 自定义需要生成路由的文件后缀，默认为tsx
      routeStyle: 'next',
      exclude: ['**/components/**/*'],
      importMode: 'async',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
