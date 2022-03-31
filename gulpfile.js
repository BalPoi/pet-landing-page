const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    })
    gulp.watch('./app/sass/**/*.sass', style)
    gulp.watch('./app/*.html').on('change', browserSync.reload)
}
exports.style = style;
exports.watch = watch;