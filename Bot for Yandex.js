// ==UserScript==
// @name         My bot Yandex 2
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Bot for Yandex 2
// @author       Ostatochnikova Liubov
// @match        https://ya.ru/*
// @match        https://napli.ru/*
// @grant        none
// ==/UserScript==
console.log(location.hostname);

let targetHost = "napli.ru";
let searchHost = "https://ya.ru/";
if (location.hostname == "ya.ru") {
  let searchInput = document.getElementsByName("text")[0];
  let links = document.links;
  let searchBtn = document.getElementsByClassName(
    "search3__button mini-suggest__button"
  )[0];
  let keywords = [
    "Базовые вещи про GIT. Настройка и основные команды.",
    "Отключение редакций и ревизий",
    "Webpack, Parcel и Rollup",
    "Napli Вывод произвольных типов записей и полей",
  ];
  let keyword = keywords[getRandom(0, keywords.length)];

  let refs = document.getElementsByClassName(
    "Link Link_theme_normal OrganicTitle-Link organic__url link"
  );
  for (let ref of refs) {
    ref.removeAttribute("target");
  }

  if (searchBtn !== undefined) {
    let i = 0;
    let timerId = setInterval(() => {
      searchInput.value += keyword[i];
      i++;
      if (i == keyword.length) {
        clearInterval(timerId);
        searchBtn.click();
      }
    }, 500);
  } else {
    let nextYandexPage = true;
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.indexOf(targetHost) != -1) {
        let link = links[i];
        nextYandexPage = false;
        console.log("Нашел строку" + link);
        setTimeout(() => {
          link.click();
        }, getRandom(3000, 5000));

        break;
      }
    }

    let currentPage = document.getElementsByClassName(
      "Pager-Item Pager-Item_type_page Pager-Item_current"
    )[0];
    console.log("currntPage : " + currentPage.innerText);

    if (currentPage.innerText == "5") {
      nextYandexPage = false;
      location.href = searchHost;
      location.href.removeAttribute("target");
    }

    if (nextYandexPage) {
      let bottons = document.getElementsByClassName(
        "VanillaReact Pager-Item Pager-Item_type_page"
      );
      for (let iter of bottons) {
        console.log(iter.innerText);
      }

      let nexPageIter = 0;
      let inText = Number(currentPage.innerText);
      if (!isNaN(inText)) {
        if (inText === 0) {
          nexPageIter = 0;
        }
        if (inText === 1) {
          nexPageIter = 1;
        }
        if (inText > 1) {
          nexPageIter = 2;
        }

        let y = +currentPage.innerText;
        if (y < 5) {
          console.log("nexPage :" + bottons[nexPageIter].innerText);
          setTimeout(() => {
            document
              .getElementsByClassName(
              "VanillaReact Pager-Item Pager-Item_type_page"
            )
            [nexPageIter].click();
          }, getRandom(7000, 8000));
        }
      }
    }
  }
}

if (location.hostname == targetHost) {
  let links = document.links;
  console.log("Мы на " + targetHost + "!!");

  setInterval(() => {
    let index = getRandom(0, links.length);
    let localLink = links[index];

    if (getRandom(0, 101) > 75) {
      location.href = searchHost;
      location.href.removeAttribute("target");
    }

    if (localLink.href.includes("napli.ru")) {
      localLink.click();
    }
  }, getRandom(2000, 4000));
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
