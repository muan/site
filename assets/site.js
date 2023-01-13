function settime() {
  const timestamp = document.querySelector('[data-timestamp-text]')
  if (!timestamp || !('Intl' in window)) return

  const options = {
    timeZone: "Asia/Taipei",
    timeStyle: "short",
    hour12: false
  }

  // https://gist.github.com/muan/e7414b6241f088090acd916ed965540e
  let time = new Intl.DateTimeFormat(navigator.language || "zh-TW", options).format(new Date())

  // https://bugs.chromium.org/p/chromium/issues/detail?id=1262801
  if (time.match(/^24:/)) time = time.replace('24:', '00:')

  // Setting interpolated string instead of just the time because
  // if there's no JS there should be no mentions of current time
  const text = timestamp.getAttribute('data-timestamp-text').replace('{time}', time)
  timestamp.innerHTML = text.replace(':', '<span class="timestamp-colon" data-colon>:</span>')

  const now = new Date()
  const sec = now.getSeconds()
  const secondIsEven = sec % 2 === 0
  const colon = document.querySelector('[data-colon]')
  if (colon) colon.style.animationDelay = `${(secondIsEven ? 0 : 1000) - now.getMilliseconds()}ms`

  const delay = 60000 - ((sec * 1000) + now.getMilliseconds())
  setTimeout(settime, delay)
}

settime()
