const path = require('path');
const wfConfig = require('./webflow.config.js');

module.exports = {
	entry: {
		app: path.resolve(__dirname, `src/index.ts`),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: `${wfConfig.bundleName}.js`,
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			styles: path.resolve(process.cwd(), 'src/styles/'),
			plugins: path.resolve(process.cwd(), 'src/plugins/'),
			pages: path.resolve(process.cwd(), 'src/pages/'),
			components: path.resolve(process.cwd(), 'src/components/'),
			functions: path.resolve(process.cwd(), 'src/functions/'),
		},
	},
};
