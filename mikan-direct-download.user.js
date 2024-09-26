// ==UserScript==
// @name         Mikan Direct Download
// @namespace    https://github.com/zhxie/mikan-direct-download
// @version      2024-09-26
// @author       Xie Zhihao
// @description  Show direct download link in Mikan.
// @homepage     https://github.com/zhxie/mikan-direct-download
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mikanani.me
// @match        https://mikanani.me/Home/Bangumi/*
// @match        https://mikanani.me/Home/Search
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const links = document.getElementsByClassName("js-magnet magnet-link");
  for (const link of links) {
    link.href = link.getAttribute("data-clipboard-text");
    link.removeAttribute("data-clipboard-text");
    link.textContent = "[立即下载]";
  }
})();
