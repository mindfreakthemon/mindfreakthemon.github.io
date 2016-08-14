let gulp = require('gulp');
let connect = require('gulp-connect');
// let plumber = require('gulp-plumber');
// let concat = require('gulp-concat');

const IMAGES_SRC_GLOB = 'assets/images/**/*';

module.exports = function (BUILD_DIR) {
	gulp.task('images:copy', () => {
		return gulp.src(IMAGES_SRC_GLOB)
			.pipe(gulp.dest(`${BUILD_DIR}/images`))
			.pipe(connect.reload());
	});
};
