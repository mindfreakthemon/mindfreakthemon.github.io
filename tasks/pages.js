let gulp = require('gulp');
let pug = require('gulp-pug');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');
let inject = require('gulp-inject');
let inline = require('gulp-inline-source');
let series = require('stream-series');

const PAGES_SRC_GLOB = 'assets/index.pug';

module.exports = function (BUILD_DIR) {
	gulp.task('pages', ['vendor:bundle'], () => {
		return gulp.src(PAGES_SRC_GLOB)
			.pipe(plumber())
			.pipe(inject(gulp.src(`${BUILD_DIR}/bundle/vendor.js`, { read: false })))
			.pipe(inject(gulp.src(`${BUILD_DIR}/css/*.css`, { read: false })))
			.pipe(pug())
			.pipe(gulp.dest('.'))
			.pipe(connect.reload());
	});

	gulp.task('pages:bundle', ['vendor:bundle', 'app:bundle', 'css:bundle'], () => {
		let vendor = gulp.src(`${BUILD_DIR}/bundle/vendor.js`, { read: false });
		let app = gulp.src(`${BUILD_DIR}/bundle/app.min.js`, { read: false });

		return gulp.src(PAGES_SRC_GLOB)
			.pipe(plumber())
			.pipe(inject(series(vendor, app), {
				// transform: (filepath) => `script(inline, src='${filepath}')`
			}))
			.pipe(inject(gulp.src(`${BUILD_DIR}/css/*.css`, { read: false }), {
				transform: (filepath) => `link(inline, rel='stylesheet', href='${filepath}')`
			}))
			.pipe(pug())
			.pipe(inline({
				rootpath: '.'
			}))
			.pipe(gulp.dest('.'))
			.pipe(connect.reload());
	});

	gulp.task('pages:watch', () => gulp.watch(PAGES_SRC_GLOB, ['pages']));
};
