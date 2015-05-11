$(document).pjax("a", ".wrapper", {fragment: ".wrapper"})

$(document).on("click", "a[id]", function (e) {
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + e.target.id]
})

$(document).on("click", "a:not([id])", function (e) {
  _gaq.push ["_trackEvent", "Clicks", "clicked on " + $(this).text()]
})

$(document).on("read pjax:end", function () {
  $(".wrapper").toggleClass("post-layout", Boolean($("article").length))
})

