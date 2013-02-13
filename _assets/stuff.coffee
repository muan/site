jQuery ->

  mobile = (width) ->
    if width < 770
      $("section.info").addClass("one")
    else
      $("section.info").removeClass("one")
  
  $(window).resize () ->
    mobile( $(this).width() )
  
  $(window).resize()

  $.each $("pre"), ( index, code ) ->
    new CodeMirror (node) ->
      code = code.get(0) if code instanceof jQuery
      code.parentNode.replaceChild(node, code)
    ,
      value: $.trim(code.textContent.split("||")[1])
      readOnly: true
      mode: $.trim(code.textContent.split("||")[0])
      theme: "monokai"
      lineNumbers: $.trim(code.textContent.split("||")[1]).match("\\n")
      matchBrackets: true

  # tracking stuff
  $.each ["tweaker-dl", "tldr-tweaker-dl", "twitter", "tweaker", "copyin", "instagram", "github", "subscribe", "email", "hn", "zeczec"], (index, val) ->
    $("#" + val).click (e) ->
      _gaq.push ["_trackEvent", e.target.id, "clicked"]

  $.each $("[data-time]"), ( index, ele ) ->
    $(ele).html( prettyDate( new Date( $(this).data("time") ) ) )
