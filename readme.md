# IT之家资讯列表广告屏蔽 ithome CPS Filter

过滤IT之家资讯列表内的购物广告。 Remove CPS Ads in ithome.com's news list.

---

## 功能

泛科技媒体网站IT之家（ithome.com）会在其资讯列表中插入购物广告，这类广告链接与其它新闻链接混同，影响浏览体验。本脚本在网页加载过程中判断并移除这些 CPS 广告。

## 依赖

本脚本是一个用户脚本（user script，也因一个流行的管理器名字而被称作油猴脚本），在使用以前，你需要安装一个用户脚本管理器。

想了解什么是用户脚本、想查阅你所使用的浏览器有哪些用户脚本管理器可选择、或想浏览其他更多用户脚本，都请参阅[这里](https://greasyfork.org)。

例如，Google Chrome 与 Mozilla Firefox 用户，可以在扩展商店搜索并安装 Violentmonkey。

## 安装与使用

请在 [Greasy Fork 上的页面](https://greasyfork.org/zh-CN/scripts/39999-it%E4%B9%8B%E5%AE%B6%E8%B5%84%E8%AE%AF%E5%88%97%E8%A1%A8%E5%B9%BF%E5%91%8A%E5%B1%8F%E8%94%BD-ithome-cps-filter)安装。

大多用户脚本管理器提供了基于 Greasy Fork 的更新功能。

## 反馈与支持

请在 Github [提交 issue](https://github.com/Yves-X/ithome-CPS-Filter/issues)。

欢迎[打赏](https://www.yvesx.com/go/donate/)。

## 提示

本脚本只针对资讯列表内指向广告文章的链接，并不干预页面内横幅、轮播等其他形式广告。如果你有对于其他广告的屏蔽需求，可以在启用脚本的同时安装 uBlock Origin 等浏览器扩展插件。

---

## 更新日志

**1.3**

1. 完整支持 WAP 视图. 至此，主页、博客版、新闻日历、手机版全部四个视图的插入广告链接均已得到过滤.
2. 修复了上个版本引入的一处错误，它有时会导致页面载入不畅.

**1.2**

1. 完整支持博客版视图.
2. 修复了一处错误.

**1.1**

1. 加入了多页面支持，包括主页、新闻列表以及尚不完整的博客版、WAP视图
2. 修复了一处错误

**1.0**

0. Initial release.