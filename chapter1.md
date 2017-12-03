# 安装 Node 和 Gulp


gulp 是基于 node 实现的，那么我们就需要先安装 node。

> Node 是一个基于Chrome JavaScript V8引擎建立的一个平台，可以利用它实现 Web服务，做类似PHP、java的事。

打开 https://nodejs.org/ 点击绿色的 **INSTALL** 按钮下载安装 node。

<a href="#hash_cli" name="hash_cli"></a>

## 使用终端/命令行


### 命令行
在 Windows 中可按 <kbd>徽标键</kbd>（alt键左边）+ <kbd>R</kbd> 打开输入 `cmd` + <kbd>Enter</kbd> 打开命令行。

### 终端(Mac)
打开 Launchpad（像火箭一样的图标），在屏幕上方搜索框中输入 `终端` + <kbd>Enter</kbd> 打开终端。

### 查看 node 版本号
在终端/命令行中输入 `node -v` 检测node是否安装成功，安装成功会显示出 node 的版本号。

```
v9.0.0
```


## npm 模块管理器

如果你了解 npm 则跳过此章节

若你不了解npm 请阅读 [npm模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)

## 安装 gulp


npm 是 node 的包管理工具，可以利用它安装 gulp 所需的包。（在安装 node 时已经自动安装了 npm）


在国内因为网速问题，请[使用 cnpm 安装模块]

先安装 cnpm

在命令行输入：
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
再使用 cnpm 安装模块:

在命令行输入

```
cnpm install -g gulp 
```

意思是：使用 npm 安装全局性的(`-g`) gulp 包。

> 如果你安装失败，请输入`sudo npm install -g gulp `使用管理员权限安装。（可能会要求输入密码）

安装时请注意命令行的提示信息，安装完成后可在命令行输入 `gulp -v` 以确认安装成功。

至此，我们完成了准备工作。接着让 gulp 开始帮我们干活吧！

[阅读下一章节：使用 Gulp 更改 html](chapter2.md)
