console.log("Hello world");
// Адаптивное меню
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const bodyLook = document.querySelector("body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    bodyLook.classList.toggle("_look");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

//Смена текстовой информации при табах
let phrases = [
  {
    text: `Our best-selling refillable deodorant, in a new scent for summer. 
    Shop Lemongrass`,
  },
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, voluptates totam.",
  },
  {
    text: "Lorem ipsum, dolor sit amet.",
  },
  {
    text: "Beautifully designed bathroom essentials in solid, no-waste packaging and refillable containers.",
  },
];
let tab_1 = document.querySelector(".first__block__tab-1");
let tab_2 = document.querySelector(".first__block__tab-2");
let tab_3 = document.querySelector(".first__block__tab-3");
let quote__slide_1 = document.querySelector(".quote__slide__tab-1");
let quote__slide_2 = document.querySelector(".quote__slide__tab-2");
let quote__slide_3 = document.querySelector(".quote__slide__tab-3");
let quote__slide_4 = document.querySelector(".quote__slide__tab-4");
let quote__slide_5 = document.querySelector(".quote__slide__tab-5");
let phrase = document.querySelector(".phrase");
let phrase_2 = document.querySelector(".quote__slide__text");
console.log(phrase);
console.log(phrase_2);
tab_1.addEventListener("click", function () {
  let firstElement = phrases[0];
  smoothly(phrase, "textContent", firstElement.text);
  tab_1.classList.toggle("_active");
  tab_2.classList.remove("_active");
  tab_3.classList.remove("_active");
});
tab_2.addEventListener("click", function () {
  let secondElement = phrases[1];
  smoothly(phrase, "textContent", secondElement.text);
  tab_2.classList.toggle("_active");
  tab_1.classList.remove("_active");
  tab_3.classList.remove("_active");
});
tab_3.addEventListener("click", function () {
  let thirdElement = phrases[2];
  smoothly(phrase, "textContent", thirdElement.text);
  tab_3.classList.toggle("_active");
  tab_1.classList.remove("_active");
  tab_2.classList.remove("_active");
});

quote__slide_1.addEventListener("click", function () {
  let elementQuoleOne = phrases[3];
  smoothly(phrase_2, "textContent", elementQuoleOne.text);
  quote__slide_1.classList.toggle("_active_2");
  quote__slide_2.classList.remove("_active_2");
  quote__slide_3.classList.remove("_active_2");
  quote__slide_4.classList.remove("_active_2");
  quote__slide_5.classList.remove("_active_2");
});
quote__slide_2.addEventListener("click", function () {
  let elementQuoleTwo = phrases[3];
  smoothly(phrase_2, "textContent", elementQuoleTwo.text);
  quote__slide_1.classList.remove("_active_2");
  quote__slide_2.classList.toggle("_active_2");
  quote__slide_3.classList.remove("_active_2");
  quote__slide_4.classList.remove("_active_2");
  quote__slide_5.classList.remove("_active_2");
});
quote__slide_3.addEventListener("click", function () {
  let elementQuolethree = phrases[2];
  smoothly(phrase_2, "textContent", elementQuolethree.text);
  quote__slide_1.classList.remove("_active_2");
  quote__slide_2.classList.remove("_active_2");
  quote__slide_3.classList.toggle("_active_2");
  quote__slide_4.classList.remove("_active_2");
  quote__slide_5.classList.remove("_active_2");
});
quote__slide_4.addEventListener("click", function () {
  let elementQuoleFour = phrases[3];
  smoothly(phrase_2, "textContent", elementQuoleFour.text);
  quote__slide_1.classList.remove("_active_2");
  quote__slide_2.classList.remove("_active_2");
  quote__slide_3.classList.remove("_active_2");
  quote__slide_4.classList.toggle("_active_2");
  quote__slide_5.classList.remove("_active_2");
});

quote__slide_5.addEventListener("click", function () {
  let elementQuoleFifth = phrases[3];
  smoothly(phrase_2, "textContent", elementQuoleFifth.text);
  quote__slide_1.classList.remove("_active_2");
  quote__slide_2.classList.remove("_active_2");
  quote__slide_3.classList.remove("_active_2");
  quote__slide_4.classList.remove("_active_2");
  quote__slide_5.classList.toggle("_active_2");
});

// Выпадающие списки
let intervalId;

document.querySelectorAll(".footer__column__title").forEach((e) => {
  e.addEventListener("click", (e) => {
    const menu = e.currentTarget.dataset.path;
    const iconFooter = document.querySelectorAll(".footer__column__icon");
    document.querySelectorAll(".footer__column__list").forEach((e) => {
      if (
        !document
          .querySelector(`[data-target=${menu} ]`)
          .classList.contains("open")
      ) {
        document
          .querySelector(`[data-target=${menu} ]`)
          .classList.add("menu_active");
        document.querySelector(`[id=${menu}]`).classList.add("active");
        // iconFooter.classList.toggle("active");

        intervalId = setTimeout(() => {
          document
            .querySelector(`[data-target=${menu} ]`)
            .classList.add("open");
        }, 0);
      }
      if (
        document
          .querySelector(`[data-target=${menu} ]`)
          .classList.contains("open")
      ) {
        clearTimeout(intervalId);
        document
          .querySelector(`[data-target=${menu} ]`)
          .classList.remove("menu_active");
        document.querySelector(`[id=${menu}]`).classList.remove("active");

        document;
        intervalId = setTimeout(() => {
          document
            .querySelector(`[data-target=${menu} ]`)
            .classList.remove("open");
        }, 0);
      }
    });
  });
});
