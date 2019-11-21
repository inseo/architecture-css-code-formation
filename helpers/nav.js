var button = document.querySelector('.js-nav__button')
var menu = document.querySelector('.js-nav__list')
var links = menu.querySelectorAll('a')

function toggleMenu() {
  var open = JSON.parse(button.getAttribute('aria-expanded'))
  button.setAttribute('aria-expanded', !open)
  menu.hidden = !menu.hidden
}

for (var index = 0, len = links.length; index < len; index += 1) {
  var link = links[index]
  link.addEventListener('click', toggleMenu)
}
button.addEventListener('click', toggleMenu)
