"use strict";

const storieScrollBtn = document.querySelector(".scroll-btn");
const container = document.querySelector(".stories-container");

storieScrollBtn.addEventListener("click", (e) => {
  console.log(container.scrollLeft);
  container.scrollLeft += 173;
});
