const webpack = require('webpack');
const path = require('path');

module.exports = {

	entry: {app:[path.resolve(__dirname, '../assets/js/app.js'), path.resolve(__dirname, '../assets/scss/app.scss')]},
	performance: {
		hints: false
  },
  stats: {
    hash: false,
    version: false,
    timings: false,
    children: false,
    chunks: false,
    modules: false,
    source: false,
    publicPath: false
  },
	module: {
		rules: [
			{
					test: /\.js$/,
					use: 'babel-loader',
					exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]

};//Config end
