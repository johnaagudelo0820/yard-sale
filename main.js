const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const ButtonShoppingCart = document.querySelector('.navbar-shopping-card');
const DetailShoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', () => toggleMenu(menu));
menuBurgerIcon.addEventListener('click', () => toggleMenu(mobileMenu));
ButtonShoppingCart.addEventListener('click', () =>
  toggleMenu(DetailShoppingCart)
);

function toggleMenu(element) {
  element.classList.toggle('inactive');
}
