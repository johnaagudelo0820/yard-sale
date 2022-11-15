const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  menu.classList.toggle('inactive');
}
