let gulp = require('gulp');
let connect = require('gulp-connect');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

const VENDOR_LIST = [
	'node_modules/core-js/client/shim.min.js',
	'node_modules/zone.js/dist/zone.min.js',
	'node_modules/reflect-metadata/Reflect.js',
	'node_modules/systemjs/dist/system.js'
];

const DYNAMIC_VENROD_LIST = [
	'node_modules/@angular/*/bundles/*.js',
	'node_modules/rxjs/**/*.js'
]

module.exports = function (BUILD_DIR) {
	gulp.task('vendor:copy', () => {
		return gulp.src(DYNAMIC_VENROD_LIST, { base: 'node_modules' })
			.pipe(gulp.dest(`${BUILD_DIR}/vendor`))
			.pipe(connect.reload());
	});

	gulp.task('vendor:pack', () => {
		return gulp.src(VENDOR_LIST, { base: 'node_modules' })
			.pipe(concat('static.js'))
			.pipe(uglify())
			.pipe(gulp.dest(`${BUILD_DIR}/vendor`))
			.pipe(connect.reload());
	});
};
