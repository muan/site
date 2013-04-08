jQuery ->

  mobile = (width) ->
    if width < 768
      $("section.info").addClass("one")
    else
      $("section.info").removeClass("one")
  
  $(window).resize () ->
    mobile( $(this).width() )
  
  $(window).resize()
  $("[data-title]").tooltip()

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

  $.each $("[data-time]"), ( index, ele ) ->
    $(ele).html( prettyDate( new Date( $(this).data("time") ) ) )
  
  # scrollTo
  $("a[href^='#']").click ->
    top = $("a[name='" + $(this).attr("href").replace("#","") + "']").offset().top - 10
    current_top = $(window).scrollTop()
    scroll = setInterval( () ->
      if $(window).scrollTop() > top
        $(window).scrollTop $(window).scrollTop() - 15
      else
        i = $("a[id^=ind]").length
        order = 0
        jumpp = setInterval () ->
          if order <= i
            $($("a[id^=ind]")[order]).addClass "jump"
            ++order
          else
            clearInterval jumpp
            setTimeout () -> 
              $("a[id^=ind]").removeClass "jump"
            , (600*i - 100*i)
        , 100
        clearInterval scroll
    , 0.1 )
    false

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

