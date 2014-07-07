$(document).on "keydown", (e) ->
  if e.keyCode == 39 && $("#js-next-post").length
    $("#js-next-post").click()
  if e.keyCode == 37 && $("#js-previous-post").length
    $("#js-previous-post").click()

$(document).on "click", "a[id]", (e) ->
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + e.target.id]

$(document).on "click", "a:not([id])", (e) ->
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + $(this).text()]

$(document).pjax 'a', '.wrapper', { fragment: 'body', timeout: 3000 }

$(document).on "ready pjax:end", ->
  if window.pics
    putImages(pics)
  else
    feed = "https://api.instagram.com/v1/users/10647409/media/recent/?count=30&client_id=14deafa2ddeb4ce1a521c97844ca8e6b&callback=?"
    $.getJSON feed, (data) ->
      window.pics = data.data.filter (pic)->
        pic.tags.length > 0 && pic.tags.indexOf("_") >= 0
      putImages(pics)

load = ->
  $(".img img").on "load", ->
    $(this).closest(".img").addClass("show")

putImages = (pics) ->
  pic = pics[Math.floor(Math.random() * pics.length)]
  box = $(".instagram")
  box.html ""
  box.append "<a target='_blank' href='#{pic.link}' class=img><img src='#{pic.images.low_resolution.url}'></div>"

  load()
