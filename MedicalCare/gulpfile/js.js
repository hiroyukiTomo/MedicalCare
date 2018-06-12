var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');
var conf    = require('./config');

gulp.task('js', function() {
    gulp.src(conf.js.src)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(conf.js.dest))
        .pipe(gulp.dest(conf.js.theme));
});


