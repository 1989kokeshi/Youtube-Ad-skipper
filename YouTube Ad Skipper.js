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

    const checkElement = (mutationsList, observer) => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const adElement = document.querySelector("#movie_player > div.video-ads.ytp-ad-module");
                if (adElement?.hasChildNodes()) {
                    document.querySelector("#movie_player > div.html5-video-container > video").currentTime = 60;
                    ["#skip-button\\:5", "#skip-button\\:6", "#skip-button\\:p > span > button"].forEach(selector => {
                        let element = document.querySelector(selector);
                        if (element) {
                            console.log("Element found: " + selector);
                            console.log(element);
                            element.click();
                        }
                    });
                }
            }
        }
    };

    // MutationObserverを作成し、checkElement関数をコールバックとして設定
    const observer = new MutationObserver(checkElement);

    // 監視の設定
    const config = { childList: true, subtree: true };

    // YouTubeのプレーヤー要素を監視開始
    observer.observe(document.querySelector("#movie_player"), config);
})();
