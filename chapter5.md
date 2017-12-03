使用 gulp 压缩图片
================

请务必理解如下章节后阅读此章节：

1. [安装 Node 和 gulp](chapter1.md)
2. [使用 gulp 压缩 JS](chapter3.md)




压缩 图片文件可降低文件大小，提高图片加载速度。

找到规律转换为 gulp 代码

规律
---
找到 `images/` 目录下的所有文件，压缩它们，将压缩后的文件存放在 `dist/images/` 目录下。


**一、安装 gulp-imagemin** 模块

提示：你需要使用命令行的 `cd` 切换至对应目录再进行安装操作和 gulp 启动操作。

在命令行输入

```
cnpm install gulp-imagemin
```



**二、创建 `gulpfile.js` 文件编写代码**

在对应目录创建 `gulpfile.js` 文件并写入如下内容：

```js
// 获取 gulp
var gulp = require('gulp');

// 获取 gulp-imagemin 模块
var imagemin = require('gulp-imagemin')

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    // 1. 找到图片
    gulp.src('images/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
    // 3. 另存图片
        .pipe(gulp.dest('dist/images'))
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('images/*.*)', ['images'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 images 任务和 auto 任务
gulp.task('default', ['images', 'auto'])
```

你可以访问 [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) 以查看更多用法。

------

**三、在 `images/` 目录下存放图片**

在 `gulpfile.js` 对应目录创建 `images` 文件夹，并在 `images/` 目录下存放图片。


--------

**四、运行 gulp 查看效果**

在命令行输入 `gulp` +回车

你将看到命令行出现如下提示

```
gulp

```

[接着阅读：使用 gulp 编译 LESS](chapter6.md)
