let gulp = require('gulp');
let del = require('del');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');
let concat = require('gulp-concat');

const BUILD_DIR = 'build';

let css = require('./tasks/css');
let app = require('./tasks/app');
let templates = require('./tasks/templates');
let vendor = require('./tasks/vendor');
let images = require('./tasks/images');
let pages = require('./tasks/pages');

css(BUILD_DIR);
app(BUILD_DIR);
templates(BUILD_DIR);
vendor(BUILD_DIR);
images(BUILD_DIR);
pages(BUILD_DIR);

gulp.task('connect', () => {
	connect.server({
		root: '.',
		port: 8080,
		livereload: true
	});
});

gulp.task('clean', () => {
	return del([BUILD_DIR, 'index.html']);
});

gulp.task('compile', ['css', 'images', 'templates', 'app', 'pages']);
gulp.task('compile:bundle', ['css:bundle', 'images', 'templates', 'app:bundle', 'pages:bundle']);

gulp.task('watch', ['css:watch', 'templates:watch', 'app:watch']);
gulp.task('build', ['vendor', 'vendor:bundle', 'compile']);
gulp.task('bundle', ['vendor', 'vendor:bundle', 'compile:bundle']);

gulp.task('dev:prod', ['clean'], () => {
	gulp.run(['bundle', 'connect', 'watch']);
});

gulp.task('dev', ['clean'], () => {
	gulp.run(['build', 'connect', 'watch']);
});

gulp.task('default', ['dev']);
