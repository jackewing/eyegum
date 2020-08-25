var menuButton = document.querySelector("button.menu");

menuButton.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("active");
  menuButton.classList.toggle("open");
});
