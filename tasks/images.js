let gulp = require('gulp');
let connect = require('gulp-connect');

const IMAGES_SRC_GLOB = 'assets/images/**/*';

module.exports = function (BUILD_DIR) {
	gulp.task('images', () => {
		return gulp.src(IMAGES_SRC_GLOB)
			.pipe(gulp.dest(`${BUILD_DIR}/images`))
			.pipe(connect.reload());
	});
};
