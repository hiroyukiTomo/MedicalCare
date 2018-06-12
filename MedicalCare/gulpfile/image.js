var gulp     = require('gulp');
//var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var changed  = require('gulp-changed');
var plumber  = require('gulp-plumber');
var mozjpeg  = require('imagemin-mozjpeg');
var conf     = require('./config');


gulp.task('image', function () {
    return gulp.src(conf.image.src)
        .pipe(plumber())
        .pipe(changed(conf.image.dest))
/*
        .pipe(imagemin([
            pngquant({
                quality: '65-80',
                speed: 1,
                floyd: 0
            }),
            mozjpeg({
                quality: 85,
                progressive: true
            }),
            imagemin.svgo(),
            imagemin.gifsicle()
            ]
        ))
*/
        .pipe(gulp.dest(conf.image.dest))
        .pipe(gulp.dest(conf.image.theme));
});
