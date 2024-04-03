// ==UserScript==
// @name         My New Bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bot for big new
// @author       Ostatochnikova Liubov
// @match        https://www.bing.com/
// @grant        none
// ==/UserScript==

let input = document.getElementsByName("q")[0];
let links = document.links;
let searchBtn = document.getElementsById("search_icon");
let keywords = ["Базовые вещи про GIT", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0,keywords.length)];

if(searchBtn !==null) {
  input.value = keyword;
  searchBtn.click();
} else {
  for(let i = 0; i<links.length; i++) {
    if (links[i].href.indexOf("naply.ru") != -1) {
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



