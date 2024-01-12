const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync');

const pages = () => {
	return src('src/pages/index.html')
		.pipe(
			fileinclude({
				prefix: '@',
				basepath: '@file',
			}),
		)
		.pipe(dest('src'))
		.pipe(browserSync.stream());
};

module.exports = pages;
