---
title: 使用ssh连接github
date: 2018-08-22 22:52:40
tags:
  - github
---

## 生成ssh公钥和私钥
打开你的终端（cmd或powershell）

输入以下命令并回车

```
    ssh-keygen -t rsa -C '你的邮箱'
```

其实单引号包括的这块，就是个类似于备注的东西，不过大家都写邮箱，建议写邮箱就是了，你要是写别的也完全没问题。

运行后它会要求你输入密码，个人用的话，密码没啥意义，ssh不就图个方便么。
按两下回车略过即可。

然后它会告诉你私钥和公钥的储存位置

```
    Your identification has been saved in C:\Users\youruser/.ssh/id_rsa.
    Your public key has been saved in C:\Users\youruser/.ssh/id_rsa.pub.
```
基本就是你c盘下的用户文件夹，然后用户名文件夹，然后有个叫.ssh的文件夹。在这个文件夹里有两个文件，**id_rsa**和**id_rsa.pub**。

如果你看到的两个文件都是一样的名，比如都叫id_rsa，那说明你没有开文件后缀名显示。这个很简单，百度一下就有，不再赘述。

用记事本打开**id_rsa.pub**，pub顾名思义public，公钥。复制里面所有的内容，为下一步在github添加ssh keys做准备。

## github添加ssh keys
首先登录你的github，点击右上角头像，有一个**setting**。

进入这个设置页面后，左侧的选项列表中有一个**SSH and GPG keys**。

点开后很明显能看到右侧有一个**New SSH keys**的绿色按钮，点击按钮，给它起个名（title），然后在key输入框中粘贴上面咱们复制好的公钥。再点下**Add SSH keys**，这就成了。

## 测试一下
在终端中输入以下命令

```
    ssh -T git@github.com
```

若是返回 *Hi [你的github名]! You’ve successfully authenticated……*

说明ssh连接成功。本地和github已经打通，以后你就不需要输密码了。
