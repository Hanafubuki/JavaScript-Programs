var debug = process.env.NODE_ENV !== "production";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports={
	devtool: debug ? "inline-sourcemap" : false,
	entry: './public/js/ap.js',
	output: {
		path: __dirname+'/public',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{test: /\.css$/, loader:"style-loader!css-loader"},
			{test: /\.js$/, loader:'babel-loader', exclude:/node_modules/, query:{presets:['es2015']}}
		]
	},
	plugins:[
    	new UglifyJsPlugin({})
  	]
}