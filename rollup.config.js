// import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import path from 'path'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { version, name } from './package.json'

const resolve = p => path.resolve(__dirname, p)
const extensions = ['.js', '.ts']

const banner = `/**
 * ${name} v${version}
 * (c) 2020 - ${new Date().getFullYear()} 木鸢
 * Released under the MIT License.
 */
`

const outputConfigs = [
  {
    format: 'iife',
    ext: '.global.js',
  },
  {
    format: 'iife',
    ext: '.global.prod.js',
  },
  {
    format: 'cjs',
    ext: '.cjs.js',
  },
  {
    format: 'cjs',
    ext: '.cjs.prod.js',
  },
  {
    format: 'umd',
    ext: '.js',
  },
  {
    format: 'umd',
    ext: '.prod.js',
  },
  {
    format: 'es',
    ext: '.esm-bundler.js',
  },
]

function PascalCase(str) {
  const reg = /-(\w)/g
  const newStr = str.replace(reg, function (match, group1) {
    return group1.toUpperCase()
  })
  return newStr.charAt(0).toUpperCase() + newStr.slice(1)
}

function generateConfigOutput(configs) {
  const result = []
  configs.forEach(({ format, ext }) => {
    const output = {
      file: resolve(`dist/${name}${ext}`),
      name: PascalCase(name),
      format,
      banner,
    }
    if (ext.indexOf('prod') !== -1) {
      output.plugins = [terser()]
    }
    result.push(output)
  })
  return result
}

export default {
  input: resolve('src/index.ts'),

  plugins: [
    // Allow bundling cjs modules. Rollup doesn't understand cjs （将 CommonJS 模块转换为 ES6）
    // commonjs(),
    // Allows node_modules resolution
    nodeResolve({ extensions }),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
  ],
  output: generateConfigOutput(outputConfigs),
}
