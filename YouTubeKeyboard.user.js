// ==UserScript==
// @name         YouTube Keyboard Shortcuts
// @namespace    https://github.com/dnDomo
// @version      1.0
// @description  Auto focus (and keep focused) on video player to make keyboard shortcuts work correctly.
// @author       D'n Domo
// @match        *://*.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function searchVideoPlayer() {
        let videoFrame = document.getElementsByClassName("html5-video-player")[0];
        let searchInput =  document.getElementById("search-input");
        
        if (videoFrame != null && searchInput != null) {
            videoFrame.focus();

            videoFrame.onblur = function() {
                if (document.activeElement != searchInput) {
                    videoFrame.focus();
                }
            };

            searchInput.onblur = function() {
                if (document.activeElement != videoFrame) {
                    videoFrame.focus();
                }
            }
        } else {
            setTimeout(searchVideoPlayer, 500);
        }
    }

    searchVideoPlayer();

})();