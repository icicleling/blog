---
title: 把多个前端项目部署到GitHub pages中
date: 2018-07-30 20:39:36
tags:
  - github
---

## 创建 Github pages 页面

这个很简单，你只需要创建一个仓库（new repository），然后把仓库名写成该格式`你的github名字.github.io`即可。

然后这就是一个 Github pages 页面的仓库了，你可以通过`https://你的github名字.github.io`来访问

GitHub pages 使用非常简单。你只需要记住一点，你需要一个 index.html 文件作为入口，你访问 Github pages 网址的时候，进入的首页就是这个仓库中的 index.html 文件，之后由这个 index 文件的延展和发挥就随你怎么玩了。

## 正文在这儿

标题咱也说了，多个前端项目部署，自然不是说在 Github pages 中怎么部署一个项目，咱们要的是这样`username.github.io/项目名`，改变后缀便可改变访问的项目。

非常简单，首先还是创建一个仓库，名字是你项目的名字，并且这个名字会作为访问项目的链接的后缀。

同创建 Github pages 页面一样，这个项目同样需要 index.html 做为入口。

重点，在该项目的仓库页面，点击"setting"，向下找到"GitHub Pages"部分，其中的 Source 部分，把"None"更换为"master branch"。

好了，现在你可以访问`https://username.github.io/此项目名`来查看你的项目了。
