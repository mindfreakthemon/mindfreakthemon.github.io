let gulp = require('gulp');
let pug = require('gulp-pug');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');
let del = require('del');

const TEMPLATE_SRC_GLOB = 'app/**/*.pug';
const TEMPLATE_OUT_DIR = 'build';

gulp.task('templates:clear', () => del([`${TEMPLATE_OUT_DIR}/**/*.html`]));

/**
 * Compiles templates.
 */
gulp.task('templates', gulp.series('templates:clear', () => {
	return gulp.src(TEMPLATE_SRC_GLOB, { base: '.' })
		.pipe(plumber())
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest(TEMPLATE_OUT_DIR))
		.pipe(connect.reload());
}));

gulp.task('templates:watch', () => gulp.watch(TEMPLATE_SRC_GLOB, gulp.task('templates')));
