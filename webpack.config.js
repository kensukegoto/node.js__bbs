module.exports = {
  mode: 'development',
  entry: './develop/es2015/index.js',
  output:{
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }

}