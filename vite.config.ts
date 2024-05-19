/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  return {
    cacheDir: './node_modules/.vite/microfrontend-announcements',

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4301,
      host: 'localhost',
    },

    plugins: [
      react(),
      nxViteTsPaths(),
      viteTsConfigPaths({
        root: './',
      }),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      outDir: './dist',
      emptyOutDir: true,
      watch: {
        chokidar: {
          usePolling: mode === 'development',
        },
      },
      // reportCompressedSize: true,
      // commonjsOptions: {
      //   transformMixedEsModules: true,
      // },
      sourcemap: true,
      rollupOptions: {
        input: 'src/microfrontend-announcements.tsx',

        preserveEntrySignatures: 'strict',
        output: [
          {
            format: 'system',
            entryFileNames: 'system/microfrontend-announcements.js',
            inlineDynamicImports: false,
          },
          {
            format: 'cjs',
            entryFileNames: 'commonjs/microfrontend-announcements.cjs',
            inlineDynamicImports: false,
          },
          {
            format: 'es',
            entryFileNames: 'modules/microfrontend-announcements.mjs',
            inlineDynamicImports: false,
          },
        ],
        external: [
          'react',
          'react-dom',
          '@emotion/react',
          '@emotion/styled',
          // '@mfe-lib/styleguide',
        ],
      },
    },

    test: {
      globals: true,
      cache: {
        dir: './node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
});
