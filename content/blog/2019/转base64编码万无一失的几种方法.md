---
title: 转base64编码万无一失的几种方法
date: 2019-09-01 13:54:36
tags:
  - nodejs
  - base64
---

base64 是挺常用的一种编码格式, 本来貌似是邮件用的编码格式.

不过平常咱也就转个图片用, 比如富文本编辑器里放个图标啥的, 或者 markdown 里放个图片啥的,base64 我觉得还是最方便不过了.

咱就拿图片举几个转换的例子, 反正字符串比图片更简单使用频率也更低.
再恶劣的条件我寻思这几个方法也够用了

### 网站

最简单的就是不用自己做的, 拿人家现成的, 这是最为智慧的选择.
随便拿个搜索引擎, 搜一下字符串转 base64, 图片转 base64, 网站一抓一堆.

图片传上去, 字符取下来; ctrlC 一把, 下班早回家.
(说的什么玩意...)

咱就放一个比较'专业'的网站 (意思它就干转换这一样, 别的都不干);
[Base64 Img Encoder](https://www.base64-image.de/)

### 还不够万无一失

当然有人要说了, 不行.
要是图片比较大, 网站不给转.
或者我要是没有网上不了网站呢?

### 编程转换

图片比较大这理由可以, 没有网我寻思就有点杠了.
不忙, 咱们可以找个编程语言写个脚本转换.

以 nodejs 为例, 读个文件可以直接输出 base64 编码, 考虑到字符不少, 存到另一个文件里比较好

#### 如以下例子代码

```javascript
const fs = require("fs")

// 读取当前路径下image.jpg这个文件
fs.readFile(__dirname + "/image.jpg", (err, data) => {
  if (err) {
    throw err
  }
  // 把转换后的字符串写入当前路径下的base64string.txt这个文件
  fs.writeFile(
    __dirname + "/base64string.txt",
    data.toString("base64"),
    err => {
      if (err) {
        throw err
      }
    }
  )
})
```

你也可以转换字符串

```javascript
const fs = require("fs")

const str = "abcde"

// 字符串转换为二进制后转换为base64, 输出到当前路径下的base64string.txt这个文件
fs.writeFile(
  __dirname + "/base64string.txt",
  Buffer.from(str).toString("base64"),
  err => {
    if (err) {
      throw err
    }
  }
)
```

其他语言诸如 python, java 都可以很简单的实现, 不列了, 自己找下就好.
(成功避开自己根本不会的事实)

### 还不够万无一失

有人又要说了
有人: 不成, 我电脑没 nodejs 也没 py 还没 java, 什么编程语言都没有, 我还没有网.
你给我转一个看看

作者: 嗯? 你那个单位的? 你是不是存心...

![鸡哥][img-chicken-brother]

### 钻木取火

算了? 笑话, 我怎么会算了
没网是吧, 不用编程语言是吧?
咱们讲讲 base64 的原理, 钻木取火, 手动转换!
base64 的原理就是把每 6bit 的数据, 按 64 个字符的字典生成一个字符.
众所周知, 一个字符是 8bit, 所以三个字符恰好可以转换为四个 base64 字符. 这也是为什么经过 base64 转换后, base64 字符串比原文件会大三分之一.

事先说下 base64 的字典构成,0-25 对应 A-Z, 26-51 对应 a-z, 52-62 对应 0-9, 最后两个是+和/.

#### 来个例子

比如说把'a'这个字符转换成 base64 字符串
'a'的十进制大家都知道是 97, 那二进制就是`110 0001`. 那现在能转了么, 不行, 一个字符是 8bit, 这才 7bit, 得在前面加一位, 凑 8bit 才行. 所以是`0110 0001`.

转换之前再说一句, base64 转换后的字符串的数量肯定是 4 的倍数, 不足 4 的末尾补等于号.

来开始吧, `0110 0001`, 按 6 位拆成`011000`和`01`, `011000`是 24, 对应'Y'; `01`不足六位末尾补 0 变成`010000`, 是 16, 对应'Q'.

然后不足 4 个字符末尾补'=', 所以最终'a'的 base64 编码为`YQ==`.

好, base64 的原理咱们有了, 那么理论上只要你有一个 16 进制编辑器, 你就能把图片一点点的翻译成 base64 编码.

下面我给大家演示把这张靓妹图片手动翻译成 base64.

![靓妹][img-pretty-girl]

...
...
...
嗯? 你还往下看? 你在想什么?
我真的会把一张图片手动翻译成 base64? 你在想 peach!
这张分辨率 320\*388 的图转换后的字符就有 7 万个好吗!

### 还不够万无一失

有人又要说了
有人: 我连电脑都没有, 这里有个我画纸上的图
你把这图给我转个看看

作者:

![打脸][img-hit-face]

END.

[img-chicken-brother]: https://blog-1255878920.cos.ap-nanjing.myqcloud.com/memes/chicken-brother.png
[img-pretty-girl]: https://blog-1255878920.cos.ap-nanjing.myqcloud.com/memes//pretty-girl.png
[img-hit-face]: https://blog-1255878920.cos.ap-nanjing.myqcloud.com/memes//hit-face.gif
