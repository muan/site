function settime() {
  const timestamp = document.querySelector('[data-timestamp-text]')
  if (!timestamp || !('Intl' in window)) return
  const options = {
    timeZone: "Asia/Taipei",
    timeStyle: "short",
    hour12: false
  }
  let time = new Intl.DateTimeFormat(navigator.language || "zh-TW", options).format(new Date())
  // https://gist.github.com/muan/e7414b6241f088090acd916ed965540e
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1262801
  if (time.match(/^24:/)) time = time.replace('24:', '00:')
  // Setting interpolated string instead of just the time because
  // if there's no JS there should be no mentions of current time
  timestamp.innerHTML = timestamp.getAttribute('data-timestamp-text')
    .replace('{time}', time)
    .replace(':', '<span class="timestamp-colon">:</span>')

  setTimeout(settime, (60 - new Date().getSeconds()) * 1000)
}
settime()
