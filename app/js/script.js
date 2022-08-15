window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav_container");
  navbar.classList.toggle("active", window.scrollY > 50);
});

const toggleMenu = document.querySelector(".mobile_nav-toggle");
const navItem = document.querySelector(".nav_lists");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  navItem.classList.toggle("active");
});

document.querySelectorAll(".nav_list-item").forEach((e) =>
  e.addEventListener("click", () => {
    toggleMenu.classList.remove("active");
    navItem.classList.remove("active");
  })
);
