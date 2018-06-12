var gulp    = require('gulp');
var fs      = require('fs');
var plumber = require('gulp-plumber');
var rename  = require('gulp-rename');
var replace = require('gulp-replace');
var pug     = require('gulp-pug');
var conf    = require('./config');


/* --------------------------------------
     pug タスク（$ gulp pug で実行される）
-------------------------------------- */

gulp.task('pug', function() {

    var locals = {
        'site':JSON.parse(fs.readFileSync(conf.pug.json))
    };

    gulp.src(conf.pug.src)
        .pipe(plumber())
        .pipe(pug({
            locals: locals,
            pretty: true
        }))
        //.pipe(replace(/<a (.*)href="(?!#)(.*)"/g, '<a $1href="$2.html"'))
        .pipe(gulp.dest(conf.pug.dest));

    gulp.start(['pug-cms']);
});

/* --------------------------------------
     pug-cms タスク（$ gulp pug-cms で実行される）
-------------------------------------- */

gulp.task('pug-cms', function() {

    var locals = {
        'site':JSON.parse(fs.readFileSync(conf.pug.json))
    };

    locals.site.path = locals.site.cmspath;
    locals.site.cms = true;

    gulp.src(conf.pug.src)
        .pipe(plumber())
        .pipe(pug({
            locals: locals,
            pretty: true
        }))
        .pipe(replace('  ', ''))
        .pipe(replace('a href="/', 'a href="[site_url]/'))
        .pipe(rename({extname: '.txt'}))
        .pipe(gulp.dest(conf.pug.text));
});
