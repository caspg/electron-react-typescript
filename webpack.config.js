const rendererConfig = {
  target: 'electron-renderer',
  entry: './src/renderer/renderer.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/renderer/'
  },
  devtool: 'source-map', // TODO: only for development
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
    ],
  },
}

const mainConfig = {
  target: 'electron-main',
  entry: './src/electron-main.ts',
  output: {
    filename: 'electron-main.js',
    path: __dirname + '/dist/'
  },
  devtool: 'source-map', // TODO: only for development
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
    ],
  },
  node: {
    __dirname: false,
  }
}

module.exports = [rendererConfig, mainConfig]
