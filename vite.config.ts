import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

// Use dotenv para carregar variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig(({ mode }) => {
  // Carregue variáveis de ambiente do arquivo .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH,
    server: {
      port: 3000,
    },
  };
});
