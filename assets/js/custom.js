"use strict";

//String Limiter function
function limit(string, limit = 0) {
  return string.substring(0, limit) + "...";
}

let courseNodeList = document.querySelectorAll("#course-title");
let courseArr = Array.from(courseNodeList);
courseArr.forEach((cur) => {
  cur.textContent = limit(cur.innerHTML, 20);
});

Array.from(document.querySelectorAll("#event__item-title")).forEach((cur) => {
  cur.textContent = limit(cur.innerHTML, 16);
  console.log(cur);
});

//Courses Tab UI Movement
let overviewBtn = document.getElementById("overview-btn");
let faqBtn = document.getElementById("faq-btn");
let overviewContent = document.getElementById("overview-content");
let faqContent = document.getElementById("faq-content");

const inIt = () => {
  faqBtn.classList.remove("courses-details__link-item--active");
  overviewContent.classList.remove("courses-hidden");
  overviewBtn.classList.add("courses-details__link-item--active");
  faqContent.classList.add("courses-hidden");
};

inIt();

const faqHandler = () => {
  overviewBtn.classList.remove("courses-details__link-item--active");
  faqContent.classList.remove("courses-hidden");
  faqBtn.classList.add("courses-details__link-item--active");
  overviewContent.classList.add("courses-hidden");
};

overviewBtn.addEventListener("click", inIt);
faqBtn.addEventListener("click", faqHandler);
