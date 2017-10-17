var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

var path = {
  scss: { source: 'src/*.scss', target: 'dist/' }
}

gulp.task('scss', function () {
  gulp.src(path.scss.source)
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(path.scss.target))
})

gulp.task('watch', function () {
  gulp.watch(path.scss.source, ['scss'])
})

gulp.task('default', ['scss', 'watch'])
