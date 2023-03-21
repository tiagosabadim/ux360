const navbarMenu = document.querySelector(".navbar__menu");
const navbarMenuIcon = document.querySelector(".navbar__menu-icon");
const linksMenu = document.querySelectorAll('.navbar__menu li a');

navbarMenuIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar__menu--active");
});

function fecharMenu() {
  navbarMenu.classList.remove("navbar__menu--active");
}

linksMenu.forEach(function(link) {
  link.addEventListener('click', function() {
    fecharMenu();
  });
});


