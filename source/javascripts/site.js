// This is where it all goes :)
document.addEventListener("DOMContentLoaded", function (e) {
  var flower = document.querySelector(".flower");
  var lines = document.querySelector(".lines");
  var moon = document.querySelector(".moon");
  var people = document.querySelector(".people");
  var star1 = document.querySelector(".star1");
  var star2 = document.querySelector(".star2");
  // var star3 = document.querySelector(".star3");
  var star4 = document.querySelector(".star4");
  var star5 = document.querySelector(".star5");
  var sun = document.querySelector(".sun");
  var tents = document.querySelector(".tents");

  var edgeLeft = document.querySelector(".edge-left");
  var edgeLeftDouble = document.querySelector(".edge-left-double");
  var edgeRight = document.querySelector(".edge-right");
  var edgeRightDouble = document.querySelector(".edge-right-double");

  var background = document.querySelector(".background");

  function scrollHandler(params) {
    // var percentage =
    // window.pageYOffset / (edgeLeft.scrollHeight - window.innerHeight);
    // star1.style.top = percentage * 400 + 120 + "px";
    // star2.style.top = percentage * 400 + 80 + "px";
    // star3.style.top = percentage * -100 + 800 + "px";
    // star4.style.top = percentage * 400 + 500 + "px";
    // star5.style.top = percentage * 400 + 400 + "px";
    // edgeLeftDouble.style.marginTop = percentage * 100 + 0 + "px";
    // edgeRightDouble.style.marginTop = percentage * 100 + 0 + "px";
    // background.style.marginTop = percentage * 200 + 0 + "px";
  }

  document.addEventListener("scroll", function () {
    window.requestAnimationFrame(scrollHandler);
  });

  window.requestAnimationFrame(scrollHandler);

  ctaButton();
});

function ctaButton() {
  // document.querySelector("#buy-splash").addEventListener("click", function () {
  //   document.querySelector("#tt-widget-inline-0").scrollIntoView({
  //     behavior: "smooth",
  //   });
  // });
}
