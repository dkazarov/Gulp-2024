const { src, dest, watch, series, parallel } = require('gulp');

var browserSync = require('browser-sync').create();

const clear = require('./tasks/clear');
const html = require('./tasks/html');
const scss = require('./tasks/scss');
const css = require('./tasks/css');
const js = require('./tasks/js');
const images = require('./tasks/images');
const fonts = require('./tasks/fonts');
const pages = require('./tasks/fileinclude');

const server = () => {
	browserSync.init({
		server: {
			baseDir: './dist',
		},
	});
};

const watcher = () => {
	watch('src/**/*.html', html).on('all', browserSync.reload);
	watch(['./src/components/*', 'src/pages/*'], pages).on('all', browserSync.reload);
	watch('src/css/**/*.css', css).on('all', browserSync.reload);
	watch('src/scss/*.{scss, sass}', scss).on('all', browserSync.reload);
	watch('src/js/**/*.js', js).on('all', browserSync.reload);
	watch('src/images', images).on('all', browserSync.reload);
	watch('src/fonts', fonts).on('all', browserSync.reload);
};

const build = series(clear, parallel(html, css, scss, js, images));

const dev = series(build, pages, parallel(pages, watcher, server));

exports.clear = clear;
exports.images = images;
exports.html = html;
exports.pages = pages;
exports.css = css;
exports.scss = scss;
exports.fonts = fonts;
exports.js = js;
exports.watch = watcher;

exports.default = dev;
exports.build = build;
exports.dev = dev;
