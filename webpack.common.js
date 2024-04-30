const path = require('path');

module.exports = {
  entry: ['./src/vanilla-slideshow.css', './src/vanilla-slideshow.js'],
  output: {
    filename: 'vanilla-slideshow.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module',
    clean: true
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        sideEffects: true,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
