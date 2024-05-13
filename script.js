function toggleMenu() {
  var nav = document.querySelector(".site-nav");
  nav.classList.toggle("active");
}

document.querySelector(".hero-button").addEventListener("click", function () {
  window.location.href = "#about";
});
