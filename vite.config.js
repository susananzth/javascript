import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Ruta base del directorio src
const srcPath = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(srcPath, 'assets'),
      '@components': path.resolve(srcPath, 'components'),
      '@pages': path.resolve(srcPath, 'pages'),
      '@partial': path.resolve(srcPath, 'partial'),
    },
  },
})
