const menuButton = document.querySelector(".hamburger-menu");
const menu = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

menuButton.addEventListener("click", function () {
  menu.classList.add("flex", "flex-col");
  menu.style.gap = "20px";
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);

function closeMenu() {
  menu.classList.remove("flex", "flex-col");
  menu.style.gap = "";
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

function closeMenuEsc(e) {
  if (e.key === "Escape") {
    closeMenu();
  }
}
