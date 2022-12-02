const nav = document.querySelector('.block');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 10) {
    nav.classList.add('show');
  } else {
    //nav.classList.remove('show');
  }
});

