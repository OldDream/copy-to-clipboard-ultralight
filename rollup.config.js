import path from 'path';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

const extensions = ['.ts'];

const resolve = function (...args) {
  return path.resolve(__dirname, ...args);
};

const config = [
  {
    // 编译typescript
    input: resolve('./src/index.ts'),
    output: {
      file: resolve('./', pkg.main), // 读取 package.json 中的main作为入口。
      format: 'umd',
      name: 'ultralightCopy', // umd 包要求提供，不存在模块系统的情况下，使用这个名字暴露到全局变量中， global.ultralightCopy
    },
    plugins: [
      nodeResolve({
        extensions,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
      }),
    ],
  },
  {
    // 生成 .d.ts 类型声明文件
    input: resolve('./src/index.ts'),
    output: {
      file: resolve('./', pkg.types),
      format: 'es',
    },
    plugins: [dts()],
  },
];

export default config;
