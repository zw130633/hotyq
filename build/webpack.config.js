var path = require('path')
var webpack = require('webpack')
var rootName = '/hotyq'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    //'webpack-hot-middleware/client',//webpack 打包的时候把它注释掉
    '../src/index'                   //webpack 打包的时候改成 ../src/index 
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: rootName+'/dist/',
    // 添加 chunkFilename
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
		    $: "jquery"
		}),
//		new webpack.optimize.UglifyJsPlugin({
//       compress: {
//          warnings: false
//       }
//  })
  ],
  module: {
	    loaders: [{
	        test: /\.coffee$/,
	        loader: 'coffee-loader'
	    }, {
	        test: /\.css$/,
	        loader: "style!css"
	    }, {
	        test: /\.scss$/,
	        loader: "style!css?modules&importLoaders=2&camelCase&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass"
	    }, {
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'babel', // 'babel-loader' is also a legal name to reference
	        query: {
	            presets: ['es2015','react']
	        }
	    },
	    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
	    {
	    	test: /\.(jpg|png)$/, 
	    	loader: "url?limit=5000000"
	    }]
	},
	resolve:{
		extensions:['','.js','.css','.scss'],
		alias:{
			'jquery':path.resolve(__dirname,'../src/plugins/jquery.min.js')
		}
		
	}
}
