const { src, dest } = require('gulp');

const babel = require('gulp-babel');
const size = require('gulp-size');
const webpack = require('webpack-stream');

const js = () => {
	return src('./src/**/*.js', { sourcemaps: true })
		.pipe(babel())
		.pipe(size({ title: 'JS before compressing' }))
		.pipe(
			webpack({
				mode: 'production',
			}),
		)
		.pipe(size({ title: 'JS after compressing' }))
		.pipe(dest('./dist/js/'));
	//  .pipe(browserSync.stream());
};

module.exports = js;
