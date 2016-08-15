let gulp = require('gulp');
let connect = require('gulp-connect');

const IMAGES_SRC_GLOB = 'assets/images/**/*';

/**
 * Copies all images to images dir.
 */
gulp.task('images', () => {
	return gulp.src(IMAGES_SRC_GLOB)
		.pipe(gulp.dest('build/images'))
		.pipe(connect.reload());
});
