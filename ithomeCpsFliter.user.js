// ==UserScript==
// @name                ithome cps filter
// @name:zh-CN          IT之家资讯列表广告屏蔽
// @description         Remove CPS Ads in ithome.com's news list.
// @description:zh-CN   Remove CPS Ads in ithome.com's news list.
// @version             1.0
// @author              YvesX https://www.yvesx.com
// @namespace           https://github.com/Yves-X
// @contributionURL     https://www.yvesx.com/go/donate/
// @supportURL          https://github.com/Yves-X/ithome-CPS-Filter/issues
// @match               *://www.ithome.com/*
// @grant               none
// ==/UserScript==
(function () {
    'use strict';
        var newsSpan = $('.title').children('a');
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().parent().html('&nbsp;');
            }
        });
})();