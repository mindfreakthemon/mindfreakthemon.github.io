let gulp = require('gulp');
let stylus = require('gulp-stylus');
let plumber = require('gulp-plumber');
let connect = require('gulp-connect');
let concat = require('gulp-concat');

const STYLUS_SRC_GLOB = 'assets/styles/**/*.styl';

module.exports = function (BUILD_DIR) {
	gulp.task('css', () => {
		return gulp.src(STYLUS_SRC_GLOB)
			.pipe(plumber())
			.pipe(stylus({ pretty: true }))
			.pipe(concat('main.css'))
			.pipe(gulp.dest(`${BUILD_DIR}/css`))
			.pipe(connect.reload());
	});

	gulp.task('css:watch', () => gulp.watch(STYLUS_SRC_GLOB, ['css']));
};

