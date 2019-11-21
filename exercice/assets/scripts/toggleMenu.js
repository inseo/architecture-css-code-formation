const button = document.querySelector('.js-nav__button');
const menu = document.querySelector('.js-nav__list');
var links = menu.querySelectorAll('a');

var toggleMenu = function() {
  const open = JSON.parse(button.getAttribute('aria-expanded'));
  button.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
}

for (var i = 0; i < links.length; i += 1 ){
  var link = links[i];
  link.addEventListener('click', toggleMenu);
}

button.addEventListener('click', toggleMenu);
