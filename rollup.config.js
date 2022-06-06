import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import {terser} from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'packages/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: 'node_modules/**',
        preset: ['@babel/preset-react'],
      }),
      resolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      terser(),
    ],
  },
]
