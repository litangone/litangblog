---
cover: https://c2.llyz.xyz/blog/2015/02/geek.jpg
date: '2015-03-04'
tags:
- develop
title: 非程序员别点:Geek Style开发思维、技巧、工具
---

![full-img](https://c2.llyz.xyz/blog/2015/02/geek.jpg) 首先忽略标题，不标题党点没人看。嗯哼，进入正题。

工作了一年，这一年，用一句话来形容，差不多就是：

> 从连JS都不会写的渣，经过悬梁刺骨、穿壁引光、卧薪尝胆、你是风儿我是沙，终于进化成了，会写点渣JS……的渣 ﾉ( ´ ▽ \` )ﾉ

这篇文章，来说说平时自己开发的一些小技巧和习惯，抛砖引玉，同行大牛莫笑低端，外行路过建议也可以瞅瞅，有些东西还是互通的嘛。

嗯哼，真的进入正题了。

## DRY原则

敲代码有个重要的原则就是DRY(Don't Repeat Yourself)，Code的过程中，尤其是前端开发中(好吧，其他开发我不了解就不评论)，经常有大量重复需求、重复代码，对于这些东西，少做重复的劳动（第一次写一个js方法、写一个css样式是创造，第二次还写同样功能的js、和css就是浪费时间了）。

## 自动化原则

对于程序员来说，所有能用电脑完成的事情，都是if和then而已，理论上，操作既然都是通过代码实现的，那就能用代码，通过指定条件，来进行自动化运行，解放自己的双手、解放自己的时间。

基于这两个原则，我说说我是怎么做的：

#### 1.dotfile

我的开发机器是一台Macbook Air 和 iMac 2013 ，我的服务器一台是centos，两台是Ubuntu，经常需要在不同的环境进行切换，对此，我每台设备都同步dotfile配置，只要配置一段脚本，就可以让所有的设备都使用自己常用的shell、zsh、vim配置，符合自己的开发习惯。

我过去写过一篇[《dotfiles新手教程》](https://luolei.org/dotfiles-tutorial/)，供参考。

#### 2.Mackup

[Mackup](https://github.com/lra/mackup)能让你的OSX应用配置配件通过Dropbox同步，原理跟dotfile有点类似，只不过是把所有APP的配置文件都进行同步了。

#### 3.Dropbox

iMac放在公司，Macbook随身，前端项目多而杂，不知道什么时候要改个东西，我的所有开发代码，都放在Dropbox文件夹下，开机的时候就自动同步（局域网内走LAN同步更加迅速），一台机器修改了代码，另外一台机器实时更新，就连Git仓库里的文件，都实时同步，十分方便。加上都是OSX系统（iMac当时是直接通过Time Machine直接还原），切换机器开发无违和感。

#### 3.Gist

常用的代码：微信webview里的网页分享方法，CSS3的动画，shell命令操作，git操作，有些命令偶尔需要用到，比如说一个星期可能用到一次，虽说每次都可以通过谷歌一下就能找到，但是不妨把这些代码收藏到自己的Gist中，目前我就用Github的Gist，客户端使用GistPal。遇到到用某段代码的情况，知道过去曾经用过并且存在gist中，一搜关键字，就能找到。

#### 4.印象笔记

很早之前，就养成用Evernote做笔记和整理资料的习惯，不管是读书笔记、技术学习摘要，正在进行的开发项目需求、代码片段，都会根据分类，摘要后记录到印象笔记。

![full-img](https://c2.llyz.xyz/blog/2015/02/yxbj.png)

![full-img](https://c2.llyz.xyz/blog/2015/02/yxbj2.png)

不是每个人的大脑都能记录长串的信息，对此，我的方法是这样的：**大脑负责浅索引，印象笔记进行深记忆**。

印象笔记提供了很强大的查询功能，开发过程中，我会把一些重要的资料（开发文档、API信息、项目的联系人、网络相关帐号密码）保存到印象笔记中对应的笔记本组中，需要用到的时候，搜索关键字就能定位。

公司使用的是Gmail企业邮箱，工作来往也是基于Gmail，我在Chrome上也安装了印象笔记的插件，随时把邮件、网页摘要保存在自己的笔记本中。

#### 5.Sublime 和 VIM

我使用的IDE是Sublime，服务器终端环境则用VIM。

相比DW,Notepad,WebStrom，Sublime更轻，通过package管理插件，可以自己安装不同的插件，打造适合自己开发习惯的个性化IDE。曾经写过一篇[《我的Sublime Text 2配置》](https://luolei.org/sublime-text-config/)的文章，供参考，目前已经更新到ST3，新的内核，速度更快。

VIM同样安装了一些插件，过段时间分享下自己的Vim插件和配置。通过修改`.vimrc`设置了map映射和快捷键。

对于vim是又恨又爱，刚刚上手的时候觉得这不是人用的，现在用了快两年了，嗯哼，还是觉得不是人用的，ﾉ( ´ ▽ \` )ﾉ ，掌握了几个基础的命令，啪啪啪啪用起来还是很爽快的，尤其是通过ssh连服务器直接修改文件的时候。

对了，sublime和vim的配置，都通过上面提到的mackup,dotfile自动同步哦，环环相连。

#### 6.Zsh和Item2

让你的终端更强大，比bash更加人性化，自己配置`.zshrc`，命令行操作啪啪啪。我的dotfile都放在Github上面了:[luolei-dotfiles](https://github.com/foru17/luolei-dotfiles)。

#### 7.Dash

文档查询工具，把常用的一些语言文档都下载到本地，直接在Dash里面搜索字段查询相关的方法，十分方便。

#### 8.Alfred

Mac上的神器，可以自己写插件，来实现一系列操作。过去曾经写过一篇[《Mac效率工具 Alfred 本土搜索功能优化》](https://luolei.org/mac-alfred/)，供参考。下图就是我通过alfred直接调用Dash查询JavaScript文档（需要Alfred插件）。

![full-img](https://c2.llyz.xyz/blog/2015/02/alfred.png)

#### 9.快捷键

对于习惯鼠标点击、键盘主要的用途就是拼音打字的大多数用户来说，快捷键不是一个讨人喜欢的东西，但是对于程序员这种需要大量进行键盘操作，尤其是重复键盘输入的职业来说，掌握不同的快捷键是技能树上最基础的一项。

Chrome的快捷键、Sublime的快捷键、OSX系统的快捷键，Gmail的快捷键（这个很实用）。

曾经写过一篇[《【像黑客那用Chrome】快捷键插件Vimium》](https://luolei.org/chrome-vimium/)，推荐下这个插件，同样是基于这个理念，仅用键盘就用自己浏览网页的时候也更爽。

#### 10.Alias

一行命令，通过跟上一大堆参数，就能实现某个功能，看起来的确是很拽很酷很悬很装逼，可是，对于我们这种小菜鸟来说，真的是太难记住了。对此，我的方法就是，对于常用的一大串命令，全部自己通过配置Alias，来缩写。

举个例子，`git commit -a -m '我就演示一下'`和`git push`是git操作，我就把这两个命令通过alias分别缩写成`gam`和`gp`，原来只需要输入一大串的字符，这下只需要两三个字母就搞定了。

#### 其他

前端开发中，我会用到Grunt和Gulp来自动化自己的工作流，使用Sass来进行CSS预处理，对于图片精灵、图片压缩，自己配置好了之后，全部交给机器来做。对此我写过一篇文章[《让前端工作更快、更智能:利用StaticPage自动化工作流》](https://luolei.org/rang-qian-duan-gong-zuo-geng-kuai-geng-zhi-neng-li-yong-staticpagezi-dong-hua-gong-zuo-liu/)

![full-img](https://file.is26.com/wp-image/2014/03/smart-with-static.jpg)

## 小结

在这篇文章，简单地说说自己的开发习惯和技巧，提供给大家一个思维和理念：有些技巧和工具，我们只需当下花点时间学习和入门，就能给以后的长期工作剩下大量的时间。

如果你还有什么其他好的方法，欢迎交流。