window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#menu_btn');
const menu = document.querySelector('#mobile-nav');
  btn.addEventListener('click', () => {
    menu.style.display = 'block';
  })
})