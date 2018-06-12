var src  = './dev';
var dest = './html';
var cms  = './custom-theme';

module.exports = {

    src: src,
    dest: dest,

    pug: {
        watch: src  + '/pug/**/*.pug',
        src:   [src + '/pug/**/*.pug','!' + src + '/pug/**/_*.pug'],
        dest:  dest + '',
        json:  src  + '/pug/conf.json',
        text:  './cms-text',
    },

    sass: {
        src:   src  + '/sass/**/*.sass',
        dest:  dest + '/assets/css',
        theme: cms  + '/assets/css',
    },

    scss: {
        src:   src  + '/sass/**/*.scss',
        dest:  dest + '/assets/css',
        theme: cms  + '/assets/css',
    },

    js: {
        src:   src  + '/js/**/*.js',
        dest:  dest + '/assets/js',
        theme: cms  + '/assets/js',
    },

    image: {
        src:   src  + '/img/**/*',
        dest:  dest + '/assets/img',
        theme: cms  + '/assets/img',
    },

    sprite: {
        src:       src +'/sprite/*.png', // 監視・対象ファイル
        dest:      src +'/img',          // スプライト画像出力先
        sass:      src +'/sass',         // Sassディレクトリ
        style:     '_sprite.sass',       // Sassファイル名
        name:      'my-sprite',          // 画像ファイル名
        prefix:    'sprite',             // mixinプレフィクス
        cssPath:   '../images',          // CSS内のパス
        processor: 'sprity-sass',        // sass/scssほか
        margin:    2,                    // 画像間のマージン
    },

    zip: {
        src:  dest,
        dest: './archive',
		file: 'html',
    },
}
