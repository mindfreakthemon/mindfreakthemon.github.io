let gulp = require('gulp');
let del = require('del');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');
let concat = require('gulp-concat');

require('./tasks/css');
require('./tasks/app');
require('./tasks/templates');
require('./tasks/styles');
require('./tasks/vendor');
require('./tasks/statics');
require('./tasks/pages');
require('./tasks/connect');
require('./tasks/clean');
require('./tasks/test');
require('./tasks/tslint');

gulp.task('compile', ['css', 'statics', 'templates', 'css', 'styles', 'app', 'pages']);
gulp.task('compile:bundle', ['css:bundle', 'statics', 'templates', 'css', 'styles', 'app:bundle', 'pages:bundle']);

gulp.task('watch', ['css:watch', 'templates:watch', 'css:watch', 'styles:watch', 'app:watch', 'pages:watch']);
gulp.task('build', ['vendor', 'vendor:bundle', 'compile']);
gulp.task('bundle', ['vendor', 'vendor:bundle', 'compile:bundle']);

gulp.task('dev:prod', ['clean'], () => {
	gulp.run(['bundle', 'connect']);
});

gulp.task('dev', ['clean'], () => {
	gulp.run(['build', 'connect', 'watch']);
});

gulp.task('default', ['dev']);
