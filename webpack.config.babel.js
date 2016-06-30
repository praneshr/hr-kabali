import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import glob from 'glob'
import autoprefixer from 'autoprefixer'

const entries = [
  './app/styles/main.scss',
  './app/js/router.jsx',
]
.concat(glob.sync('./app/img/*'))

const petch = {
  browser: {
    entry: entries,
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss'],
    },
    node: {
      fs: 'empty',
    },
    module: {
      loaders: [
        {
          test: /\html?$/,
          loader: 'file?name=../[name].[ext]',
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.ico$/,
          loader: 'file?name=../img/[name].[ext]',
        },
        {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015-node5', 'stage-0'],
          },
        },
      ],
    },
    postcss: () => {
      return [autoprefixer]
    },
    output: {
        path: path.join(__dirname, 'build/js'),
        filename: '[name].js',
    },
    plugins: [
      new ExtractTextPlugin('../css/main.css'),
    ],
  },
  server: {
    entry: ['./server.js'],
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    },
    target: 'node',
    output: {
      path: './server',
      filename: 'server.js',
      publicPath: './server',
      libraryTarget: 'commonjs2',
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015-node5', 'stage-0'],
          },
        },
      ],
    },
  },
};

export default [ petch.browser, petch.server ]
