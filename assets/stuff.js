const emoji = ['☁️', '🆗', '👩🏻‍💻', '🎮', '🌵', '🌿', '📬']
const randomEmoji = document.querySelector('.js-random-emoji')

if (randomEmoji) {
  randomEmoji.textContent = emoji[Math.floor(Math.random() * emoji.length)]
}

const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
const supportsLocalStorage = 'localStorage' in window
const darkModeCheckbox = document.querySelector('#dark-mode')
if (supportsLocalStorage) {
  darkModeCheckbox.addEventListener('change', rememberMode)
  const darkMode = localStorage.getItem('darkMode')
  if (darkMode !== null) {
    // Has set preference
    darkModeCheckbox.checked = darkMode === '1'
  } else if (osDarkMode && darkMode === null) {
    // OS default dark mode
    // This doesn't matter now I want to default dark mode
    darkModeCheckbox.checked = true
  }

  function rememberMode () {
    darkModeCheckbox.checked ? localStorage.setItem('darkMode', '1') : localStorage.setItem('darkMode', '0')
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
