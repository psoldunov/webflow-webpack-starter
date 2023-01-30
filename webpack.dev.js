const path = require('path');
const fs = require('fs');
const wfConfig = require('./wfconfig.js');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

let plugins = [];

if (wfConfig.cloudPath !== '') {
	plugins.push(
		new WebpackShellPluginNext({
			onAfterDone: {
				scripts: [
					() => {
						fs.copyFile(
							path.resolve(__dirname, `./dist/${wfConfig.bundleName}.js`),
							path.resolve(`${wfConfig.cloudPath}/${wfConfig.bundleName}.js`),
							(err) => {
								if (err) throw err;
							}
						);
					},
				],
			},
		})
	);
}

module.exports = merge(common, {
	mode: 'development',
	watchOptions: {
		aggregateTimeout: 1000,
		poll: 1000,
	},
	devtool: 'inline-source-map',
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	plugins: plugins,
});
