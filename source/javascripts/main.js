window.onload = function () {
  document.querySelector(".loading-screen").classList.add("clear");
  setTimeout(function () {
    document.querySelector(".loading-screen").classList.add("hide");
  }, 3000);
  document.cookie = "welcome_to_nowhere";
};

var ticketsButton = document.querySelector("#buy-splash");
var merchButton = document.querySelector("#buy-merch");

[ticketsButton, merchButton].forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".tickets-scroll").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });
});

document.querySelectorAll(".merchandise img").forEach(function (el) {
  el.addEventListener("click", function (el) {
    el.target.parentElement.classList.toggle("lightbox");
  });
});

document.querySelectorAll(".merchandise h4").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelector(".tickets-scroll").scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });
});
