import * as fs from 'fs'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
// import { terser } from 'rollup-plugin-terser'


const entry = 'packages/index.ts'
const componentsDir = 'packages'

const dirents = fs.readdirSync(componentsDir, { withFileTypes: true });
const filesNames = dirents
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const toolsEntry = filesNames.map(
  (name) => `${componentsDir}/${name}/index.ts`
)

const isProd = process.env.NODE_ENV === 'production'
const BABEL_ENV = process.env.BABEL_ENV


const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.ts',],
  exclude: "**/node_modules/**",
  babelHelpers: 'bundled'
}

const commonPlugins = [
  resolve(),
  commonjs({ sourceMap: !isProd }),
  typescript(),
  // babel(babelOptions),
  json()
]

const externalConfig = [
  // id => /\/__expample__|main.tsx/.test(id),
  '**/node_modules/**',
  '**/*.test.ts'
]

const esmOutput = {
  preserveModules: true,
}

export default () => {
  switch (BABEL_ENV) {
    case 'esm':
      return [
        {
          input: [entry, ...toolsEntry],
          output: { ...esmOutput, dir: 'dist/', format: 'es' },
          external: externalConfig,
          plugins: [...commonPlugins]
        },
        {
          input: [entry, ...toolsEntry],
          output: { ...esmOutput, dir: 'dist/type', format: 'es' },
          external: externalConfig,
          plugins: [...commonPlugins, dts()]
        }
      ]
  }
}

