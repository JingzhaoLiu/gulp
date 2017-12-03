# 使用 gulp 更改 html

### Install:


使用gulp需要在项目中也安装gulp模块，`--save-dev`命令是添加到本地package.json文件中。

```
npm install --save-dev gulp
 
```

gulp更改html需要使用`gulp-html-replace`模块，安装到本地。

```
 
npm install --save-dev gulp-html-replace
```

`gulp-html-replace` 可以把我们开发时标记的代码块替换成我们最终要发布的代码块。可以方便的添加、替换、删除引用文件。

### Example

index.html:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- build:css -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/common.css">
    <!-- endbuild -->
    
</head>

<body>
    
        <!-- build:js -->
        <script src="js/player.js"></script>
        <script src="js/monster.js"></script>
        <script src="js/world.js"></script>
        <!-- endbuild -->

        <!-- build:jschange -->
        <script src="js/player.js"></script>
        <script src="js/monster.js"></script>
        <script src="js/world.js"></script>
        <!-- endbuild -->
    
</body>
</html>
 

```

gulpfile.js:

``` js
var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');

gulp.task('default', function () {
    gulp.src('index.html')
        // .pipe(htmlreplace({
        //     'css': 'styles.min.css',
        //     'js': 'js/bundle.min.js'
        // }))
        .pipe(htmlreplace({
            //多个文件 ['','']
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
```

### Result:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="styles.min.css">
    <link rel="stylesheet" href="base.min.css">
    
</head>

<body>
    
        <script src="js/bundle.min.js"></script>

        <script src="list/index.min.js"></script>
    
</body>
</html>

```

你可以访问 [gulp-html-replace](https://github.com/VFK/gulp-html-replace) 以查看更多用法。


[接着阅读：使用 gulp 压缩 JS](chapter3.md)

