import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';

function nojekyll() {
  return {
    name: 'nojekyll',
    apply: 'build' as const,
    closeBundle() {
      writeFileSync('./dist/.nojekyll', '');
    },
  };
}

export default defineConfig({
  plugins: [react(), nojekyll()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
