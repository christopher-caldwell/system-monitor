import { resolve } from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { Configuration } from 'webpack'

const rootPath = resolve(process.cwd())
const srcPath = resolve(rootPath, '/src/index.ts')

const config: Configuration = {
  mode: 'production',
  stats: 'minimal',
  context: rootPath,
  entry: srcPath,
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src/'),
    },
    extensions: ['.tsx', '.ts', '.json', '.js'],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },
}

if (process.env.ANALYZE) {
  config.plugins?.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  )
}

export default config
