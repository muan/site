const emoji = ['🌚', '🌵', '🦔', '🤷🏻', '🆗', '👩🏻‍💻', '🎮']
const randomEmoji = document.querySelector('.js-random-emoji')

if (randomEmoji) {
  randomEmoji.textContent = emoji[Math.floor(Math.random() * emoji.length)]
}

const supportsLocalStorage = 'localStorage' in window
const darkModeCheckbox = document.querySelector('#dark-mode')
if (supportsLocalStorage) {
  darkModeCheckbox.addEventListener('change', rememberMode)
  const darkModeOn = localStorage.getItem('darkMode')
  if (darkModeOn) darkModeCheckbox.checked = true

  function rememberMode () {
    darkModeCheckbox.checked ? localStorage.setItem('darkMode', true) : localStorage.removeItem('darkMode')
  }
}

var activeElement = document.activeElement
var nextIntent = 'mousedown'

document.body.classList.add('has-js')

document.addEventListener('mousedown', setNextIntent)
document.addEventListener('keydown', setNextIntent)
document.addEventListener('focusout', setIntent)

function setIntent() {
  document.body.classList.toggle('mousedown', 'mousedown' === nextIntent)
  document.body.classList.toggle('keydown', 'keydown' === nextIntent)
}

function setNextIntent(event) {
  nextIntent = event.type
}
