// ==UserScript==
// @name                IT之家资讯列表广告屏蔽 ithome CPS Filter
// @name:zh-CN          IT之家资讯列表广告屏蔽
// @description         移除IT之家（ithome.com）资讯列表内投放的购物广告；Remove CPS Ads in ithome.com's news list.
// @description:zh-CN   移除IT之家（ithome.com）资讯列表内投放的购物广告。
// @version             1.2
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

    function forBlogAjax() {
        unsafeWindow.handleServerResponse = function () {
            if (xmlHttp.readyState == 1) {
                if (loading_mode) {
                    document.getElementById('loading').style.display = "";
                }
            }
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    var xmlResponse = xmlHttp.responseText;
                    PAdebug(return_data);
                    if (xmlResponse != "") {
                        PAdebug(xmlResponse);
                        if (return_data == "wapindexnewlist") {
                            $item = $(xmlResponse).hide();
                            $("#wapindexnewlist").append($item);
                            $item.fadeIn();
                        }
                        else if (return_data == "categorylist")
                            $("#categorylist").append(xmlResponse);
                        else
                            document.getElementById(return_data).innerHTML = xmlResponse;
                        removeOnBlog();
                    } else {
                        document.getElementById('error_data').innerHTML = '<font color=red>Error!</font>';
                    }
                    if (loading_mode) {
                    }
                }
                else {
                    PAdebug("There was a problem accessing the server: " + xmlHttp.statusText);
                }
            }
        };
    }
    function forWapAjax() {
        unsafeWindow.wapjsonpage = function (page) {
            $.getScript("//dyn.ithome.com/jsonp/news/wappage?page=" + page, removeOnWap);
        }
    }

    function removeOnHomepage() {
        var newsSpan = $('.title a');
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().parent().html('&nbsp;');
            }
        });
    }
    function removeOnList() {
        var newsSpan = $('.ulcl a');
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().remove();
            }
        });
    }
    function removeOnBlog() {
        removeOnList();
    }
    function removeOnWap() {
        var newsSpan = $('.title').parent();
        newsSpan.each(function (i) {
            var newsUrl = $(this).attr("href");
            if (newsUrl.indexOf('lapin') >= 0) {
                $(this).parent().remove();
            }
        });
    }

    function forHomepage() {
        removeOnHomepage();
    }
    function forList() {
        removeOnList();
    }
    function forBlog() {
        forBlogAjax();
        removeOnBlog();
    }
    function forWap() {
        forWapAjax();
        removeOnWap();
    }


})();