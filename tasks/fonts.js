const { src, dest } = require('gulp');

const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

const fonts = () => {
  return src('./src/fonts/*')
    .pipe(newer('./dist/fonts/*'))
    .pipe(
      fonter({
        formats: ['woff', 'ttf'],
      }),
    )
    .pipe(dest('./dist/fonts'))
    .pipe(ttf2woff2())
    .pipe(dest('./dist/fonts'));
};

module.exports = fonts;