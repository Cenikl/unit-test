const path = require("path");

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', 'less'],
    roots: [path.resolve('./src')]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
}