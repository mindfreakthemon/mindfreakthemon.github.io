let gulp = require('gulp');

require('./tasks/css');
require('./tasks/styles');
require('./tasks/templates');
require('./tasks/vendor');
require('./tasks/app');
require('./tasks/statics');
require('./tasks/pages');
require('./tasks/connect');
require('./tasks/clean');
require('./tasks/test');
require('./tasks/tslint');

gulp.task('compile', gulp.parallel('statics', 'app', 'templates', 'styles', 'css', 'pages'));
gulp.task('compile:prod', gulp.parallel('statics', 'pages:prod'));

gulp.task('watch', gulp.parallel('css:watch', 'templates:watch', 'css:watch', 'styles:watch', 'app:watch', 'pages:watch', 'statics:watch'));

gulp.task('dev:prod', gulp.series('clean', gulp.parallel('vendor', 'compile:prod', 'connect', 'watch')));

gulp.task('dev', gulp.series('clean', gulp.parallel('vendor', 'compile', 'connect')));

gulp.task('default', gulp.task('dev'));
