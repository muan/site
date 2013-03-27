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

  if $("ul.posts").length > 0 && window.location.origin.indexOf("localhost") < 0
    $.each $("ul.posts li a"), ( index, a ) ->
      url = "http://muan.co" + $(a).attr("href")
      twitter_query = 'http://urls.api.twitter.com/1/urls/count.json?callback=?&url=' + url
      facebook_query = 'http://graph.facebook.com/?id=' + url
      t = a
      $.getJSON twitter_query, (res) -> 
        t.t_count = res.count || 0
        appd() if typeof t.f_count != "undefined"

      $.getJSON facebook_query, (res) -> 
        t.f_count = res.shares || 0
        appd() if typeof t.t_count != "undefined"
      
      appd = () ->
        $(a).find(".shares").html "⚑ " + (t.t_count + t.f_count)

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
  
  # tracking stuff
  $.each $("a[id]"), (index, ele) ->
    $(ele).click (e) ->
      e.stopImmediatePropagation()
      _gaq.push ["_trackEvent", "Clicks", "clicked", e.target.id]

  $.each $("a:not([id])"), (index, ele) ->
    $(ele).click (e) ->
      e.stopImmediatePropagation()
      console.log e.currentTarget.innerText
      _gaq.push ["_trackEvent", "Visits", "clicked on" + e.currentTarget.innerText, e.currentTarget.href]

