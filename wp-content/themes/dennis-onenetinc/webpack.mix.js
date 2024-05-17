const mix = require('laravel-mix');
const local = require('./assets/js/utils/local-config');
require('laravel-mix-versionhash');
require('laravel-mix-tailwind');

mix.setPublicPath('./build');

mix.webpackConfig({
	externals: {
		jquery: 'jQuery',
	},
	module: {
		rules: [
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
		],
	},
});

mix.babelConfig({
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
					browsers: ['last 2 versions'],
				},
				useBuiltIns: 'entry',
				corejs: 3,
			},
		],
	],
});

if (local.proxy) {
	mix.browserSync({
		proxy: local.proxy,
		injectChanges: true,
		open: false,
		files: ['build/**/*.{css,js}', 'templates/**/*.php'],
	});
}

mix.tailwind();
mix.js('assets/js/app.js', 'js');
mix.sass('assets/scss/app.scss', 'css');

if (mix.inProduction()) {
	mix.versionHash();
	mix.sourceMaps();
}
