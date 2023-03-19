const navbarMenu = document.querySelector(".navbar__menu");
const navbarMenuIcon = document.querySelector(".navbar__menu-icon");

navbarMenuIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar__menu--active");
});