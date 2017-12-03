var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');

gulp.task('default', function () {
    gulp.src('index.html')
        // .pipe(htmlreplace({
        //     'css': 'styles.min.css',
        //     'js': 'js/bundle.min.js'
        // }))
        .pipe(htmlreplace({
            'css': ['styles.min.css','base.min.css'],
            'js': 'js/bundle.min.js',
            'jschange': {
                src: 'list',
                // %f 替换成文件名
                tpl: '<script src="%s/%f.min.js"></script>'
            }
        }))

        .pipe(gulp.dest('build/'));
});