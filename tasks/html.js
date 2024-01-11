const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

const size = require('gulp-size');
const htmlmin = require('gulp-htmlmin');
const webpHTML = require('gulp-webp-html');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const html = () => {
	return src('src/index.html')
		.pipe(size({ title: 'html before compressing' }))
		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
		.pipe(webpHTML())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(size({ title: 'html after compressing' }))
		.pipe(dest('./dist'))
		.pipe(browserSync.stream());
};

module.exports = html;
