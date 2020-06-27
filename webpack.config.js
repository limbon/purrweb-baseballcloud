const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.tsx')],
	watch: true,
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					plugins: [
						['@babel/plugin-proposal-decorators', { legacy: true }],
						['@babel/plugin-proposal-class-properties', { loose: true }],
					],
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.png$/,
				loader: 'file-loader',
			},
			{
				test: /\.md$/,
				use: ['html-loader', 'markdown-loader'],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.png', '.md', '.scss'],
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		inline: true,
		host: 'localhost',
		port: 6969,
	},
};
