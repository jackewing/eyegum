window.onload = function () {
  setTimeout(function () {
    document.querySelector(".loading-screen").classList.add("clear");
  }, 1500);
  setTimeout(function () {
    document.querySelector(".loading-screen").classList.add("hide");
  }, 3000);
};

var ticketsButton = document.querySelector("#buy-splash");

ticketsButton.addEventListener("click", function () {
  document.querySelector(".tickets-anchor").scrollIntoView({
    behavior: "smooth",
  });
});

var ticketsButton = document.querySelector("#buy-splash");

ticketsButton.addEventListener("click", function () {
  document.querySelector(".tickets-anchor").scrollIntoView({
    behavior: "smooth",
  });
});
