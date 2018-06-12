var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var sass     = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var csscomb  = require('gulp-csscomb');
var header   = require('gulp-header');
var rename   = require('gulp-rename');
var conf     = require('./config');


gulp.task('sass', function () {
    gulp.src(conf.sass.src)
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(csscomb())
        .pipe(pleeease({
            autoprefixer: {
              browsers: [
                'last 4 versions',
                'ie >= 9',
                'safari >= 8',
                'ios >= 8',
                'android >= 4'
              ]
            },
            minifier: true,
            mqpacker: true,
            opacity: false
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(conf.sass.dest))
        .pipe(gulp.dest(conf.sass.theme));
});
