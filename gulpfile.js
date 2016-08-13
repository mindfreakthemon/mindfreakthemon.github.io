let gulp = require('gulp');
let stylus = require('gulp-stylus');
let del = require('del');
let typescript = require('gulp-tsc');
let pug = require('gulp-pug');
let connect = require('gulp-connect');

const BUILD_DIR = 'build';

const STYLUS_SRC_GLOB = 'assets/styles/**/*.styl';
const PUG_SRC_GLOB = 'assets/templates/**/*.pug';
const APP_SRC_GLOB = 'app/**/*.ts';

gulp.task('css', () => {
	return gulp.src(STYLUS_SRC_GLOB)
		.pipe(stylus({ pretty: true }))
		.pipe(gulp.dest(`${BUILD_DIR}/css`))
		.pipe(connect.reload());
});

gulp.task('app', () => {
	let compilerOptions = require('./tsconfig.json').compilerOptions;

	return gulp.src(['typings/index.d.ts', APP_SRC_GLOB])
		.pipe(typescript(compilerOptions))
		.pipe(gulp.dest(`${BUILD_DIR}/app`))
		.pipe(connect.reload());
});

gulp.task('templates', () => {
	let compilerOptions = require('./tsconfig.json').compilerOptions;

	return gulp.src(PUG_SRC_GLOB)
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest(`${BUILD_DIR}/templates`))
		.pipe(connect.reload());
});

gulp.task('copy:vendor', () => {
	let list = [
		'node_modules/core-js/client/shim.min.js',
		'node_modules/zone.js/dist/zone.js',
		'node_modules/reflect-metadata/Reflect.js',
		'node_modules/systemjs/dist/system.src.js',
		'node_modules/@angular/**/*.js',
		'node_modules/rxjs/**/*.js'
	];

	return gulp.src(list, { base: 'node_modules' })
		.pipe(gulp.dest(`${BUILD_DIR}/vendor`))
		.pipe(connect.reload());
});

gulp.task('connect', () => {
	connect.server({
		root: '.',
		port: 8080,
		livereload: true
	});
});

gulp.task('clean', (done) => {
	return del(BUILD_DIR);
});

gulp.task('compile', ['css', 'templates', 'app']);

gulp.task('watch:css', () => gulp.watch(STYLUS_SRC_GLOB, ['css']));
gulp.task('watch:templates', () => gulp.watch(PUG_SRC_GLOB, ['templates']));
gulp.task('watch:app', () => gulp.watch(APP_SRC_GLOB, ['app']));

gulp.task('watch', ['watch:css', 'watch:templates', 'watch:app'])

gulp.task('build', ['copy:vendor', 'compile']);

gulp.task('default', ['clean'], () => {
	gulp.run(['build', 'connect', 'watch']);
});
