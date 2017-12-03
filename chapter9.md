# gulp自动刷新页面


```
cnpm install --save-dev gulp-livereload gulp-webserver
```

浏览器需要安转`gulp-livereload` 插件，[livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

gulpfile.js

``` js
// 引入gulp
var gulp = require('gulp'); // 基础库

// 引入gulp插件
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
    gulp.src('./') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true // 服务器启动时自动打开网页
        }));
});


gulp.task('watch', function() {
    // Create LiveReload server
    livereload.listen();
    // Watch any files in dist/, reload on change
    // 更改的文件 需要加在这个地方才能 支持刷新
    gulp.watch(['./*', './css/*.css']).on('change', livereload.changed);

});

// 默认任务
gulp.task('default', ['webserver', 'watch']);


```


安装不上 livereload插件 
可以在文件中添加
``` js
<script>
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
':35729/livereload.js?snipver=1"></' + 'script>')
</script>
```
