使用 gulp 压缩 CSS
================

请务必理解如下章节后阅读此章节：

1. [安装 Node 和 gulp](chapter1.md)
2. [使用 gulp 压缩 JS](chapter3.md)


----------


压缩 css 代码可降低 css 文件大小，提高页面打开速度。

我们接着将规律转换为 gulp 代码

规律
---
找到 `css/` 目录下的所有 css 文件，压缩它们，将压缩后的文件存放在 `dist/css/` 目录下。

gulp 代码
---------


当熟悉 [使用 gulp 压缩 JS](chapter3.md) 的方法后，配置压缩 CSS 的 gulp 代码就变得很轻松。


**一、安装 gulp-clean-css** 模块

提示：你需要使用命令行的 `cd` 切换到对应目录后进行安装操作。


在命令行输入

```
cnpm install gulp-clean-css --save-dev
```


**二、参照 [使用 gulp 压缩 JS](chapter3.md) 创建 `gulpfile.js` 文件编写代码**

在对应目录创建 `gulpfile.js` 文件并写入如下内容：

```js
// 获取 gulp
var gulp = require('gulp')

// 获取 cleanCSS 模块（用于压缩 CSS）
var cleanCSS = require('gulp-clean-css')

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(cleanCSS())
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('css/*.css', ['css'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['css', 'auto'])
```

你可以访问 [gulp-clean-css](https://github.com/scniro/gulp-clean-css) 以查看更多用法。

------

**三、创建 css 文件**

在 `gulpfile.js` 对应目录创建 `css` 文件夹，并在 `css/` 目录下创建 `a.css` 文件。

```css
/* a.css */
body a{
    color:pink;
}
```

--------

**四、运行 gulp 查看效果**

在命令行输入 `gulp` +回车

你将看到命令行出现如下提示

```
gulp
```

gulp 会创建 `dist/css` 目录，并创建 `a.css` 文件，此文件存放压缩后的 css 代码。



[接着阅读：使用 gulp 压缩图片](chapter5.md)
