const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

const csso = require('gulp-csso');
const size = require('gulp-size');
const concat = require('gulp-concat');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');

const css = () => {
  return src('./src/css/style.css')
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({}))
    .pipe(size({ title: 'css before compressing' }))
    .pipe(shorthand())
    .pipe(csso())
    .pipe(size({ title: 'css after compressing' }))
    .pipe(dest('./dist/css/'))
    .pipe(browserSync.stream());
};

module.exports = css;
