/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var libs = './wwwroot/lib/';

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('copy-dependency:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('copy-dependency:jquery', function () {
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js'
    ]).pipe(gulp.dest(libs + 'jquery'));
});

gulp.task('copy-dependency:bootstrap-material-design', function () {
    gulp.src([
          'node_modules/bootstrap-material-design/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap-material-design'));
});

gulp.task('copy-dependencies', [
    'copy-dependency:bootstrap',
    'copy-dependency:jquery',
    'copy-dependency:bootstrap-material-design'
]);