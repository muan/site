jQuery ->

  $.each $("[data-time]"), ( index, ele ) ->
    $(ele).html( prettyDate( new Date( $(this).data("time") ) ) )

  $(document).on "keydown", (e) ->
    if e.keyCode == 39 && $("#js-next-post").length
      location.href = $("#js-next-post").attr("href")
    if e.keyCode == 37 && $("#js-previous-post").length
      location.href = $("#js-previous-post").attr("href")
  
  # tracking stuff
  $.each $("a[id]"), (index, ele) ->
    $(ele).click (e) ->
      e.stopImmediatePropagation()
      _gaq.push ["_trackEvent", "Clicks", "clicked on " + e.target.id]

  $.each $("a:not([id])"), (index, ele) ->
    $(ele).click (e) ->
      e.stopImmediatePropagation()
      console.log e.currentTarget.innerText
      _gaq.push ["_trackEvent", "Clicks", "clicked on " + $(ele).text()]