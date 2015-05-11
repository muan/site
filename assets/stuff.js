$(document).pjax("a", ".wrapper", {fragment: ".wrapper"})

$(document).on("click", "a[id]", function (e) {
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + e.target.id]
})

$(document).on("click", "a:not([id])", function (e) {
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + $(this).text()]
})

$(document).on("ready pjax:end", function () {
  var heads = ["👋", "🍉", "🐝", "💥", "🌵", "🎈", "🐧", "👓", "💎", "🐞", "🐬", "🐈", "🌳", "👻", "🍟", "🍅", "🍐", "⚓", "️🏡", "🚷"]
  $(".js-head").text(heads[Math.floor(Math.random() * heads.length)])
  $(".wrapper").toggleClass("post-layout", Boolean($("article").length))
})

