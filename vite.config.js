import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default defineConfig({
    plugins: 
    [
        react()
    ],
    server:
    {
        host: true,
        open: !isCodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
})
