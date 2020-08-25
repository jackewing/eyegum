window.onload = function (event) {
  setTimeout(function () {
    document.querySelector(".loading-screen").classList.add("clear");
  }, 1500);
  setTimeout(function () {
    document.querySelector(".loading-screen").classList.add("hide");
  }, 3000);
};

// var flower = document.querySelector(".flower");
// var lines = document.querySelector(".lines");
// var moon = document.querySelector(".moon");
// var people = document.querySelector(".people");
// var star1 = document.querySelector(".star1");
// var star2 = document.querySelector(".star2");
// // var star3 = document.querySelector(".star3");
// var star4 = document.querySelector(".star4");
// var star5 = document.querySelector(".star5");
// var sun = document.querySelector(".sun");
// var tents = document.querySelector(".tents");

// var edgeLeft = document.querySelector(".edge-left");
// var edgeLeftDouble = document.querySelector(".edge-left-double");
// var edgeRight = document.querySelector(".edge-right");
// var edgeRightDouble = document.querySelector(".edge-right-double");

// var background = document.querySelector(".background");

var ticketsButton = document.querySelector("#buy-splash");

ticketsButton.addEventListener("click", function () {
  document.querySelector(".tickets-anchor").scrollIntoView({
    behavior: "smooth",
  });
});

// function scrollHandler(params) {
//   var percentage =
//     window.pageYOffset / (edgeLeft.scrollHeight - window.innerHeight);

//   // star1.style.top = percentage * 200 + 120 + "px";
//   // star2.style.top = percentage * 200 + 80 + "px";
//   // // star3.style.top = percentage * -100 + 800 + "px";
//   // star4.style.top = percentage * 200 + 500 + "px";
//   // star5.style.top = percentage * 200 + 400 + "px";

//   // tents.style.transform = "translateY(" + percentage * 100 + 0 + "px)";

//   // people.style.transform = "translateY(" + percentage * 50 + 0 + "px)";

//   edgeLeft.style.marginTop = percentage * 100 + 0 + "px";
//   edgeRight.style.marginTop = percentage * 100 + 0 + "px";

//   // people.style.top = percentage * 400 + 0 + "px";
//   // tents.style.top = percentage * 200 + 0 + "px";
// }

// document.addEventListener("scroll", function () {
//   window.requestAnimationFrame(scrollHandler);
// });

// window.requestAnimationFrame(scrollHandler);

var ticketsButton = document.querySelector("#buy-splash");

ticketsButton.addEventListener("click", function () {
  document.querySelector(".tickets-anchor").scrollIntoView({
    behavior: "smooth",
  });
});
