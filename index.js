window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#menu_btn');
  const menu = document.querySelector('#mobile-nav');
  const close = document.querySelector('#mobile-nav span');
  btn.addEventListener('click', () => {
      menu.style.display = 'flex';
  })
  close.addEventListener('click', () => {
    menu.style.display = 'none';
})
})