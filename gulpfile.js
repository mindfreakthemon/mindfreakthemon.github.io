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

css(BUILD_DIR);
app(BUILD_DIR);
templates(BUILD_DIR);
vendor(BUILD_DIR);
images(BUILD_DIR);

gulp.task('connect', () => {
	connect.server({
		root: '.',
		port: 8080,
		livereload: true
	});
});

gulp.task('clean', (done) => {
	return del(BUILD_DIR);
});

gulp.task('compile', ['css', 'templates', 'app', 'bundle']);

gulp.task('watch', ['css:watch', 'templates:watch', 'app:watch']);

gulp.task('build', ['vendor:copy', 'vendor:pack', 'images:copy', 'compile']);

gulp.task('default', ['clean'], () => {
	gulp.run(['build', 'connect', 'watch']);
});
