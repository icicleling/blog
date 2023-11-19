---
title: 修改npm全局安装路径和缓存路径
date: 2018-09-09 20:50:19
tags:
  - nodejs
  - posts with two tags
---

这两天换固态，从头来过，就顺便写一些安装配置相关的东西

## 建立全局和缓存文件夹
修改路径就是为了不想让它安装在c盘（我有c盘洁癖症…）

nodejs我装在了D盘，就把全局和缓存文件夹放在nodejs文件夹里了。最后的路径是这样的
```
    D:\nodejs\node_global
    D:\nodejs\node_cache
```
就建这俩文件夹，一个安装：**node_global**，一个缓存：**node_cache**。

## 修改npm配置
两条命令，其实也可以说一条命令…反正差不多。

注意你得把引号内的改成你建立的文件夹，可别直接复制过去用了。
```
    npm config set prefix 'D:\nodejs\node_global'
    npm config set cache 'D:\nodejs\node_cache'
```
然后看看是不是配置完了，用这条命令查看所有npm配置
```
    npm config list
```
你要是觉得太多眼花的话，就这么写吧
```
    npm config get prefix
    npm config get cache
```
看看是不是有对应的配置项了。

注意，还有最后一步，把全局文件夹路径放在系统环境变量path里。

在我这里就是把`D:\nodejs\node_global`，放在环境变量path中。你可以举一反三，依葫芦画个瓢。

为什么要把这个路径添加到path呢。因为你不添加，你本地安装的包在终端里是不起作用地。

## 最后随便本地安装一个包
安装什么随你便吧。举例子我就用yarn了

如果你不知道yarn是什么的话，它也是一个包管理器，facebook搞的，和npm非常非常像。为什么要用它呢，因为它下载比npm快，并且它有lock机制，为了不偏题就不细讲了（细了我也不会了…）

```
    npm install yarn -g
```
就这样，就装好了

试试yarn是否好使
```
    yarn --version
```
如果显示版本号，那么，一切ok。
