import path from 'path';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from "rollup-plugin-dts";
import pkg from './package.json';

const extensions = ['.js', '.ts'];

const resolve = function (...args) {
  return path.resolve(__dirname, ...args);
};

const config = [{
  input: resolve('./src/index.ts'),
  output: {
    file: resolve('./', pkg.main), // 为了项目的统一性，这里读取 package.json 中的配置项
    format: 'umd',
    name: 'ultralightCopy',
  },
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    })
  ],
}, {
  input: resolve('./src/index.ts'),
  output: {
    file: resolve('./', pkg.types), // 为了项目的统一性，这里读取 package.json 中的配置项
    format: 'es',
  },
  plugins: [dts()],
}]; 

export default config
