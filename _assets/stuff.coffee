jQuery ->

  $.each $("[data-time]"), ( index, ele ) ->
    $(ele).html( prettyDate( new Date( $(this).data("time") ) ) )
  
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