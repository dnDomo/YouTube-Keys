// ==UserScript==
// @name         YouTube Keyboard Shortcuts
// @namespace    https://github.com/dnDomo
// @version      1.1
// @description  Auto focus (and keep focused) on video player to make keyboard shortcuts work correctly.
// @author       D'n Domo
// @match        *://*.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let timeout = 500;
    let videoPlayer;

    function searchVideoPlayer() {
        videoPlayer = document.getElementsByClassName("html5-video-player")[0];

        if (videoPlayer != null) {
            videoPlayer.focus();
            videoPlayer.onblur = function () {
                refocus();
            };
        } else {
            setTimeout(searchVideoPlayer, timeout);
        }
    }

    function refocus() {
        setTimeout(function () {
            let currentElement = document.activeElement;
            if (currentElement != videoPlayer) {
                if (currentElement.tagName == "INPUT" || currentElement.tagName == "TEXTAREA") {
                    currentElement.onblur = function () {
                        refocus();
                    };
                }
                else {
                    videoPlayer.focus();
                }
            }
        }, timeout);
    }

    searchVideoPlayer();

})();