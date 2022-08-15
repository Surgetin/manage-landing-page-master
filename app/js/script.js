window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav_container");
  navbar.classList.toggle("active", window.scrollY > 50);
});
