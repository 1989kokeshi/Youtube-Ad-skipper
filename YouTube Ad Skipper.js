// ==UserScript==
// @name         YouTube Ad Skipper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip YouTube ads if they exist
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkElement = () => {
        const adElement = document.querySelector("#movie_player > div.video-ads.ytp-ad-module");
        if (adElement?.hasChildNodes()) {
            document.querySelector("#movie_player > div.html5-video-container > video").currentTime = 600;
            ["#skip-button\\:5", "#skip-button\\:6", "#skip-button\\:p > span > button"].forEach(selector => {
                let element = document.querySelector(selector);
                if (element) {
                    console.log("Element found: " + selector);
                    console.log(element);
                    element.click();
                }
            });
        }
    };

    // 1秒ごとにcheckElement関数を実行
    setInterval(checkElement, 1000);
})();
