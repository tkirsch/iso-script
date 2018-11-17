// ==UserScript==
// @name         iso-script
// @namespace    https://github.com/tkirsch
// @version      0.1
// @description  script wrapper for https://github.com/jasonlong/isometric-contributions
// @author       tkirsch
// @match        https://github.com/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM.getResourceUrl
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require      https://raw.githubusercontent.com/jasonlong/isometric-contributions/master/chrome/obelisk.min.js
// @require      https://raw.githubusercontent.com/jasonlong/isometric-contributions/master/chrome/jquery.min.js
// @require      https://raw.githubusercontent.com/jasonlong/isometric-contributions/master/chrome/iso.js
// @resource isoCSS https://raw.githubusercontent.com/jasonlong/isometric-contributions/master/chrome/iso.css
// ==/UserScript==

(async () => {
    'use strict';

    let cssTxt = await GM_getResourceText("isoCSS");
    GM_addStyle(cssTxt);

})();