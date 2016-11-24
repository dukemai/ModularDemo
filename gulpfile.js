var gulp = require('gulp');
var replace = require('gulp-replace-task');
var htmlreplace = require('gulp-html-replace');
var webpack = require('gulp-webpack');

gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});

gulp.task('copy', function () {
    gulp.src('demo.htm')
        .pipe(replace({
            patterns: [
                {
                    match: 'modularType',
                    replacement: 'Browserify'
                }
            ]
        }))
        .pipe(gulp.dest('./Browserify'));

    gulp.src('demo.htm')
        .pipe(replace({
            patterns: [
                {
                    match: 'modularType',
                    replacement: 'RequireJS'
                }
            ]
        }))
        .pipe(gulp.dest('./RequireJS'));

    gulp.src('demo.htm')
        .pipe(replace({
            patterns: [
                {
                    match: 'modularType',
                    replacement: 'Webpack'
                }
            ]
        }))
        .pipe(gulp.dest('./Webpack'));

    gulp.src('demo.htm')
        .pipe(replace({
            patterns: [
                {
                    match: 'modularType',
                    replacement: 'Babel'
                }
            ]
        }))
        .pipe(gulp.dest('./Babel'));
});

gulp.task('build-requirejs', function () {
    gulp.src('./RequireJS/app/*.js')
        .pipe(gulp.dest('./RequireJS/build'));

    gulp.src('./RequireJS/demo.htm')
        .pipe(htmlreplace({
            js: {
                src: [['build/main.js', 'node_modules/requirejs/require.js']],
                tpl: '<script data-main="%s" src="%s"></script>'
            }
        }))
        .pipe(gulp.dest('./RequireJS/'));
});

gulp.task('build-webpack', function () {
    gulp.src('./Webpack/app/*.js')
        .pipe(webpack(require('./Webpack/webpack.config')))
        .pipe(gulp.dest('./Webpack/build'));


});