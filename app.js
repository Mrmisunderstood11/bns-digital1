window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(13, 110, 253, 0.9)";
  } else {
    navbar.style.background = "transparent";
  }
});