import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'copy-static-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(import.meta.dirname, 'dist');
          const rootAssets = path.resolve(import.meta.dirname, 'assets');
          const distAssets = path.resolve(distDir, 'assets');
          if (fs.existsSync(distDir) && fs.existsSync(rootAssets)) {
            fs.cpSync(rootAssets, distAssets, {recursive: true, force: true});
          }
          const readmeSrc = path.resolve(import.meta.dirname, 'README.txt');
          const readmeDist = path.resolve(distDir, 'README.txt');
          if (fs.existsSync(distDir) && fs.existsSync(readmeSrc)) {
            fs.copyFileSync(readmeSrc, readmeDist);
          }
        },
      },
    ],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          about: path.resolve(import.meta.dirname, 'about.html'),
          vehicles: path.resolve(import.meta.dirname, 'vehicles.html'),
          contact: path.resolve(import.meta.dirname, 'contact.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
