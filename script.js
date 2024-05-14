function toggleMenu() {
  var nav = document.querySelector(".site-nav");
  nav.classList.toggle("active");
}
var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabcursor: true,
  initialSlide: 4,
  speed: 500,
  rotate: true,
  // autoplay: {
  //     delay: 1000,
  // },
  mousewheel: {
    invert: false,
  },
});
