const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', () => toggleMenu(menu));
menuBurgerIcon.addEventListener('click', () => toggleMenu(mobileMenu));

function toggleMenu(element) {
  element.classList.toggle('inactive');
}
