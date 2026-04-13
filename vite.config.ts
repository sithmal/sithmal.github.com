import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';

function buildFiles() {
  return {
    name: 'build-files',
    apply: 'build' as const,
    closeBundle() {
      writeFileSync('./dist/.nojekyll', '');
      writeFileSync('./dist/CNAME', 'sithmal.info');
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), buildFiles()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
