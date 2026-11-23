import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';

const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));

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
          const distDir = path.resolve(ROOT_DIR, 'dist');
          const rootAssets = path.resolve(ROOT_DIR, 'assets');
          const distAssets = path.resolve(distDir, 'assets');
          if (fs.existsSync(distDir) && fs.existsSync(rootAssets)) {
            fs.cpSync(rootAssets, distAssets, {recursive: true, force: true});
          }
          const readmeSrc = path.resolve(ROOT_DIR, 'README.txt');
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
          main: path.resolve(ROOT_DIR, 'index.html'),
          about: path.resolve(ROOT_DIR, 'about.html'),
          vehicles: path.resolve(ROOT_DIR, 'vehicles.html'),
          contact: path.resolve(ROOT_DIR, 'contact.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
