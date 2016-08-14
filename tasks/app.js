let gulp = require('gulp');
let typescript = require('gulp-tsc');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let Builder = require('systemjs-builder');

const APP_SRC_GLOB = 'app/**/*.ts';

module.exports = function (BUILD_DIR) {

	gulp.task('app', () => {
		let compilerOptions = require('../tsconfig.json').compilerOptions;

		return gulp.src(['typings/index.d.ts', APP_SRC_GLOB])
			.pipe(plumber())
			.pipe(typescript(compilerOptions))
			.pipe(gulp.dest(`${BUILD_DIR}/app`))
			.pipe(connect.reload());
	});

	gulp.task('bundle', ['app'], () => {
		var builder = new Builder('.', './systemjs.config.js');

		return builder
			.bundle('app', `${BUILD_DIR}/bundle/app.js`)
			.then(() => {
				return gulp.src(`${BUILD_DIR}/bundle/app.js`)
					.pipe(uglify())
					.pipe(rename('app.min.js'))
					.pipe(gulp.dest(`${BUILD_DIR}/bundle`));
			});
	});

	gulp.task('app:watch', () => gulp.watch(APP_SRC_GLOB, ['app', 'bundle']));
};
