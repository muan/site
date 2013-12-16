$(document).on "keydown", (e) ->
  if e.keyCode == 39 && $("#js-next-post").length
    location.href = $("#js-next-post").attr("href")
  if e.keyCode == 37 && $("#js-previous-post").length
    location.href = $("#js-previous-post").attr("href")

$(document).on "click", "a[id]", (e) ->
  e.stopImmediatePropagation()
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + e.target.id]

$(document).on "click", "a:not([id])", (e) ->
  e.stopImmediatePropagation()
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + $(this).text()]

$ ->
  $.each $("[data-time]"), ( index, ele ) ->
    $(ele).html( prettyDate( new Date( $(this).data("time") ) ) )
