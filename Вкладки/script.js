"use strict";

const allLi = document.querySelectorAll("li");
const allBlock = document.querySelectorAll("#tabs div");

allLi[0].classList.add("active");

allBlock.forEach((elem) => (elem.style.display = "none"));
allBlock[0].style.display = null;

allLi.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    allLi.forEach((elem) => elem.classList.remove("active"));
    elem.classList.add("active");
    allBlock.forEach((elem) => (elem.style.display = "none"));
    allBlock[index].style.display = null;
  });
});
