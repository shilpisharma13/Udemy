"use strict";

const btnOpen = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", showModal);
}

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
