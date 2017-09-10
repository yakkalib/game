module.exports = {
  devtool: 'inline-source-map',
  entry: './game.ts',
  output: {
    filename: 'build/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [
      {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: { /* Loader options go here */ }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ],
  }
}

