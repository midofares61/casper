let element = document.getElementById("toggle");
let menu = document.getElementById("menu");

element.onclick = function () {
  menu.classList.toggle("menu");
};

let btn = document.querySelector("a");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
