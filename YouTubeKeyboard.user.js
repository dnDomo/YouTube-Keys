// ==UserScript==
// @name         YouTube Keyboard Shortcuts
// @namespace    https://github.com/dnDomo
// @version      1.0
// @description  Auto focus (and keep focused) on video player to make keyboard shortcuts work correctly.
// @author       D'n Domo
// @match        *://*.youtube.com/*
// @match        *://*.youtu.be/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function searchVideoPlayer() {
        let videoFrame = document.getElementsByClassName("html5-video-player")[0];
        if (videoFrame != null) {
            videoFrame.focus();
            videoFrame.onblur = function() {
                videoFrame.focus();
            };
        } else {
            setTimeout(searchVideoPlayer, 500);
        }
    }

    searchVideoPlayer();

})();