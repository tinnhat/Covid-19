const show = document.querySelector(".icon-mobile-menu");
const closeBtn = document.querySelector(".icon-close-menu");
const menu = document.querySelector(".mobile-menu");

show.addEventListener("click", () => {
  menu.classList.remove("hide");
});
closeBtn.addEventListener("click", () => {
  menu.classList.add("hide");
});
