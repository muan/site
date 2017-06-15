const emoji = ["👋", "🍉", "🐝", "💥", "🌵", "🎈", "🐧", "👓", "💎", "🐞", "🐬", "🐈", "🌳", "👻", "🍟", "🍅", "🍐", "⚓", "️🏡", "🚷"]

document.querySelector(".js-head").textContent = emoji[Math.floor(Math.random() * emoji.length)]
_gaq.push(['_trackPageview'])

const darkModeButton = document.querySelector(".js-toggle-dark-mode")

darkModeButton.addEventListener('click', function () {
  const on = document.body.classList.toggle('dark-mode')
  this.setAttribute('aria-pressed', on)

  if ('localStorage' in window) {
    on ? localStorage.setItem('darkMode', true) : localStorage.removeItem('darkMode')
  }
})

if ('localStorage' in window) {
  const darkModeOn = localStorage.getItem('darkMode')

  if (darkModeOn) {
    darkModeButton.click()
  }
}
