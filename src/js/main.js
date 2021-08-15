const menuIcon = document.querySelector('#menu-hamburguer');
const nav = document.querySelector('nav');

function menuMobile() {
  const header = document.querySelector('.header');

  if (window.screen.width <= 790) {
    nav.classList.add('mobile');
    menuIcon.classList.add('active');
  } else {
    nav.classList.remove('mobile');
    menuIcon.classList.remove('active');
  }
}

function menuClose() {
  nav.classList.remove('active');
  setTimeout(() => nav.style.opacity = 0, 1)
}

function menuOpen() {
  nav.classList.add('active')
  setTimeout(() => nav.style.opacity = 1, 1)
}
