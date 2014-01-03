$(document).on "keydown", (e) ->
  if e.keyCode == 39 && $("#js-next-post").length
    $("#js-next-post").click()
  if e.keyCode == 37 && $("#js-previous-post").length
    $("#js-previous-post").click()

$(document).on "click", "a[id]", (e) ->
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + e.target.id]

$(document).on "click", "a:not([id])", (e) ->
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + $(this).text()]

$(document).pjax 'a', 'body', { fragment: 'body', timeout: 3000 }
