// ==UserScript==
// @name         YouTube Keyboard Shortcuts
// @namespace    https://github.com/dnDomo
// @version      1.0
// @description  Auto focus (and keep focused) on video player to make keyboard shortcuts work correctly.
// @author       D'n Domo
// @match        *://*.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let timeout = 500;
    let videoFrame;

    function searchVideoPlayer() {
        videoFrame = document.getElementsByClassName("html5-video-player")[0];

        if (videoFrame != null) {
            videoFrame.onblur = function () {
                refocus();
            };
            refocus();
        } else {
            setTimeout(searchVideoPlayer, timeout);
        }
    }

    function refocus() {
        setTimeout(function () {
            let currentElement = document.activeElement;
            if (currentElement != videoFrame) {
                if (currentElement.tagName == "INPUT" || currentElement.tagName == "TEXTAREA") {
                    currentElement.onblur = function () {
                        refocus();
                    };
                }
                else {
                    videoFrame.focus();
                }
            }
        }, timeout);
    }

    searchVideoPlayer();

})();