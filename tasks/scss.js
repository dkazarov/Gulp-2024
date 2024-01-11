const { src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const csso = require("gulp-csso");
const size = require("gulp-size");

const scss = () => {
  return src("./src/scss/*.{sass,scss}", { sourcemaps: true })
    .pipe(concat("style.min.css"))
    .pipe(sass())
    .pipe(autoprefixer({}))
    .pipe(size({ title: "SCSS Before compressing" }))
    .pipe(csso())
    .pipe(size({ title: "SCSS after compressing" }))
    .pipe(dest("./dist/css", { sourcemaps: true }));
  //  .pipe(browserSync.stream());
};

module.exports = scss;
