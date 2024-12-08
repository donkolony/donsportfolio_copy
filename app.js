const mobileMenu = document.querySelector("#header__mobile-menu");
const navbarMenu = document.querySelector(".header__navbar__menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
