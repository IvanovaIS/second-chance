'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const del = require('del');
const watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
});

gulp.task('pug', function() {

});

gulp.task('clean', function() {
    del('./build/');
})

gulp.task('watch', function() {
    watch('./src/*.scss', function() {
        gulp.start('sass');
    })
})

gulp.task('default', function() {
    runSequence(
        'clean',
        'sass',
        'pug'
    )
})