const emoji = ["🐝", "🌵", "🐧", "🥑", "🍅", "️🏡", "👩‍💻", "🎮"]
const randomEmoji = document.querySelector(".js-random-emoji")

if (randomEmoji) {
  randomEmoji.textContent = emoji[Math.floor(Math.random() * emoji.length)]
}

const supportsLocalStorage = 'localStorage' in window
const darkModeButton = document.querySelector(".js-toggle-dark-mode")

if (darkModeButton) {
  darkModeButton.addEventListener('click', switchMode)
}

if (supportsLocalStorage) {
  const darkModeOn = localStorage.getItem('darkMode')
  if (darkModeOn) switchMode()
}

function switchMode () {
  const on = document.body.classList.toggle('dark-mode')
  if (darkModeButton) darkModeButton.setAttribute('aria-pressed', on)

  if (supportsLocalStorage) {
    on ? localStorage.setItem('darkMode', true) : localStorage.removeItem('darkMode')
  }
}

_gaq.push(['_trackPageview'])
