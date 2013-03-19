$.fn.tooltip = () ->
  $.each $(this), (index, element) ->
    content = $(element).data "title"
    tooltip = $("<div class=\"tooltip\"><div class=\"arrow\"></div>" + content + "</div>")
    $(element).after tooltip

    top = $(element).position().top - tooltip.height() - $(element).outerHeight()
    left = $(element).position().left
    tooltip.css("top": top).css("left": left)

    $(element).hover () ->
      tooltip.toggleClass('show')
