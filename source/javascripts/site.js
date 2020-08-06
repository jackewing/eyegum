// This is where it all goes :)
document.addEventListener("DOMContentLoaded", function (e) {
  var flower = document.querySelector(".flower");
  var lines = document.querySelector(".lines");
  var moon = document.querySelector(".moon");
  var people = document.querySelector(".people");
  var star1 = document.querySelector(".star1");
  var star2 = document.querySelector(".star2");
  var star3 = document.querySelector(".star3");
  var star4 = document.querySelector(".star4");
  var sun = document.querySelector(".sun");
  var tents = document.querySelector(".tents");

  function scrollHandler(params) {
    console.log(window.pageYOffset / document.body.scrollHeight);
    // star1.style.top = parseInt(star1.offsetTop) + window.scrollY * 1.2 + "px";
    // star2.style.top = parseInt(star2.offsetTop) + window.scrollY * 0.7 + "px";
    // star3.style.top = parseInt(star3.offsetTop) + window.scrollY * 1.3 + "px";
    // star4.style.top = parseInt(star4.offsetTop) + window.scrollY * 0.6 + "px";
    // window.requestAnimationFrame(scrollHandler);
  }

  document.addEventListener("scroll", function () {
    window.requestAnimationFrame(scrollHandler);
  });
});
