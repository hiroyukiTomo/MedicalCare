var gulp  = require('gulp');
var watch = require('gulp-watch');
var conf  = require('./config');

// Individual 'watch' tasks ------------

gulp.task('pug:watch', function() {
    watch(conf.pug.src, function () {
        gulp.start(['pug']);
    });
});

gulp.task('sass:watch', function () {
    watch(conf.sass.src, function () {
        gulp.start(['sass']);
    });
});

gulp.task('js:watch', function () {
    watch(conf.js.src, function () {
        gulp.start(['js']);
    });
});

gulp.task('image:watch', function () {
    watch(conf.image.src, function () {
        gulp.start(['image']);
    });
});


// Default 'watch' task ------------

gulp.task('default', function() {
    gulp.start(['image']);
    gulp.start(['js']);
    gulp.start(['sass']);
    gulp.start(['pug']);
    watch(conf.pug.watch, function () {
        gulp.start(['pug']);
    });
    watch(conf.sass.src, function () {
        gulp.start(['sass']);
    });
    watch(conf.js.src, function () {
        gulp.start(['js']);
    });
    watch(conf.image.src, function () {
        gulp.start(['image']);
    });
});

