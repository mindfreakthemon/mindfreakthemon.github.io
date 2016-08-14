let gulp = require('gulp');
let typescript = require('gulp-tsc');
let connect = require('gulp-connect');
let plumber = require('gulp-plumber');
let rename = require('gulp-rename');
let embed = require('gulp-angular2-embed-templates');
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

	gulp.task('app:embed', ['app', 'templates'], () => {
		return gulp.src(`${BUILD_DIR}/app/**/*.js`, { base: `${BUILD_DIR}/app` })
			.pipe(embed({
				sourceType: 'js',
				basePath: '.',
				minimize: {
					quotes: true
				}
			}))
			.pipe(gulp.dest(`${BUILD_DIR}/app`));
	});

	gulp.task('app:bundle', ['app', 'app:embed', 'vendor'], () => {
		var builder = new Builder('.', './systemjs.config.js');

		return builder.bundle('app', `${BUILD_DIR}/bundle/app.min.js`, { minify: true });
	});

	gulp.task('app:watch', () => gulp.watch(APP_SRC_GLOB, ['app']));
};
