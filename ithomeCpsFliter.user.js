// ==UserScript==
// @name                IT之家资讯列表广告屏蔽 ithome CPS Filter
// @name:zh-CN          IT之家资讯列表广告屏蔽
// @description         移除IT之家（ithome.com）资讯列表内投放的购物广告；Remove CPS Ads in ithome.com's news list.
// @description:zh-CN   移除IT之家（ithome.com）资讯列表内投放的购物广告。
// @version             1.1
// @author              YvesX https://www.yvesx.com
// @namespace           https://github.com/Yves-X
// @contributionURL     https://www.yvesx.com/go/donate/
// @supportURL          https://github.com/Yves-X/ithome-CPS-Filter/issues
// @match               https://*.ithome.com/*
// @grant               none
// ==/UserScript==

(function () {

    'use strict';

    var url = window.location.href;
    if (url == 'https://www.ithome.com/') {
        forHomepage();
    }
    else if (url.indexOf('www.ithome.com/list/') >= 0) {
        forList();
    }
    else if (url.indexOf('www.ithome.com/blog/') >= 0) {
        forBlog();
    }
    else if (url.indexOf('wap.ithome.com') >= 0) {
        forWap();
    }

    function forHomepage() {
        var newsSpan = $('.title a');
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().parent().html('&nbsp;');
            }
        });
    }
    function forList() {
        var newsSpan = $('.ulcl a');
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().remove();
            }
        });
    }
    function forBlog() {
        forList();
    }
    function forWap() {
        var newsSpan = $('.jsonplist a');
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().remove();
            }
        });
    }

})();