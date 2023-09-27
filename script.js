// ==UserScript==
// @name         Google Calendar CollapsibleUI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://calendar.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let origw;

window.onload = () => {
    document.querySelector(".gb_Lc").remove();
    document.querySelector(".QQYuzf").style.transition = "width 0.2s";
    origw = document.querySelector(".QQYuzf").offsetWidth;
    document.querySelector(".QQYuzf").style.width = 0 + "px";
};

window.onmousemove = (event) => {
    if (event.pageX < 10) {
        document.querySelector(".QQYuzf").style.width = origw + "px";
    }
};

document.querySelector(".QQYuzf").onmouseleave = () => {
    document.querySelector(".QQYuzf").style.width = 0 + "px";
};
