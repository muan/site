if ('share' in navigator) {
  for (const shareButton of document.querySelectorAll('[data-share-url]')) {
    shareButton.hidden = false
    shareButton.addEventListener('click', event => {
      const url = shareButton.getAttribute('data-share-url')
      navigator.share({url})
    })
  }
}

for (const timeEl of document.querySelectorAll('[data-relative-time]')) {
  const rt = getRelativeTime(timeEl)
  const el = document.createElement('time')
  el.classList.add('monospace')
  el.textContent = `．${rt}`
  timeEl.append(el)
}

function getRelativeTime(el) {
  const epochSeconds = el.getAttribute('data-relative-time')
  const targetTime = epochSeconds * 1000
  const diffMs = targetTime - Date.now()
  
  const diffMinutes = Math.round(diffMs / (1000 * 60))
  const diffHours = Math.round(diffMs / (1000 * 60 * 60))
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))

  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })

  if (Math.abs(diffDays) >= 1) {
    return rtf.format(diffDays, 'day')
  }
  if (Math.abs(diffHours) >= 1) {
    return rtf.format(diffHours, 'hour')
  }
  
  return rtf.format(diffMinutes, 'minute')
}

