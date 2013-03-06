$.fn.tooltip = () ->
  content = $(this).attr "title"
  tooltip = $("<div class=\"tooltip\"><div class=\"arrow\"></div>" + content + "</div>")
  $(this).after tooltip

  top = $(this).position().top
  left = $(this).position().left
  tooltip.css("top": top).css("left": left)
  $(this).hover () ->
    tooltip.show()
  , () ->
    tooltip.hide()