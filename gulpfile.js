"use strict";

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task('styles', () => {
    return gulp.src('src/stylesheets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }))
        .pipe(autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/stylesheets'))
        .pipe(livereload())
});

gulp.task('watch', ()=> {
    livereload.listen();
    gulp.watch('src/stylesheets/**/*.scss', [`styles`]);
})
