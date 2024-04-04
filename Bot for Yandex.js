// ==UserScript==
// @name         My bot Yandex
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bot for Yandex
// @author       Ostatochnikova Liubov
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==

let input = document.getElementsByName("text")[0];
let links = document.links;
let searchBtn = document.getElementsByClassName("search3__button mini-suggest__button")[0];
let keywords = ["вывод произвольных полей wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0,keywords.length)];

if(searchBtn !==undefined) {
  input.value = keyword;
  searchBtn.click();
} else {
  for(let i = 0; i<links.length; i++) {
    if(links[i].href.indexOf("tenchat.ru") != -1) {
      let link = links[i];
      console.log("Нашел строку" + link);
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

