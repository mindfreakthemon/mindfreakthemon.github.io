let gulp = require('gulp');
let pug = require('gulp-pug');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');

const PUG_SRC_GLOB = 'assets/templates/**/*.pug';


module.exports = function (BUILD_DIR) {
	gulp.task('templates', () => {
		return gulp.src(PUG_SRC_GLOB)
			.pipe(plumber())
			.pipe(pug({ pretty: true }))
			.pipe(gulp.dest(`${BUILD_DIR}/templates`))
			.pipe(connect.reload());
	});

	gulp.task('templates:watch', () => gulp.watch(PUG_SRC_GLOB, ['templates']));
};
