// ==UserScript==
// @name                IT之家资讯列表广告屏蔽 ithome CPS Filter
// @name:zh-CN          IT之家资讯列表广告屏蔽
// @description         移除IT之家（ithome.com）资讯列表内投放的购物广告；Remove CPS Ads in ithome.com's news list.
// @description:zh-CN   移除IT之家（ithome.com）资讯列表内投放的购物广告。
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