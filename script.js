function toggleMenu() {
  var nav = document.querySelector(".site-nav");
  nav.classList.toggle("active");
}

document.querySelector(".hero-button").addEventListener("click", function () {
  window.location.href = "#about";
});

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});
