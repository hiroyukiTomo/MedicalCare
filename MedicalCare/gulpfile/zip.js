var gulp = require('gulp');
var zip  = require('gulp-zip');
var conf = require('./config');

require('date-utils');
var date = new Date();
var now  = date.toFormat("YYYY-MMDD-HH24MI");

gulp.task('zip', function() {
    gulp.src(conf.zip.src+'/**/*')
        .pipe(zip(conf.zip.file+'.'+now+'.zip'))
        .pipe(gulp.dest(conf.zip.dest))
    ;
});
