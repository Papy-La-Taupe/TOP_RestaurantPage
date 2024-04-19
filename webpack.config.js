const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode:'development',  
  entry: {
    index: './src/index.js',
  },
  devtool:'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
    publicPath: '/',
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'src/template.html',
        filename:'index.html',
        inject:false,
        minify: {
            collapseWhitespace: false
        }
    })
  ]
};