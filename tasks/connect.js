let gulp = require('gulp');
let connect = require('gulp-connect');

gulp.task('connect', () => {
	return connect.server({
		root: '.',
		port: 8080,
		livereload: true
	});
});
