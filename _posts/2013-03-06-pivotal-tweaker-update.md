---
layout: post
title: Pivotal Tweaker update
date: 2013-03-06 22:58:02
---

I updated Pivotal Tweaker, fixed some bugs and made a new feature. The feature is: You can now filter stories by requester. So, here you go again:

<a href="https://chrome.google.com/webstore/detail/pivotal-tweaker/aodalckpkgijlndlnlhblojedfboaglg" target="_blank" class="big-button green" id="tldr-tweaker-dl">Download Pivotal Tweaker &hearts;</a>

---

Recently we started to use requester heavily in [Copyin](http://copyin.com), so it became quite a pain not being able to filter stories by requester. But when I looked into it the first time, I realised there's no information about requester in the HTML by default in Pivotal interface, and story details are loaded when a story is expanded, removed when story is collapsed. It was quite an annoying set up to deal with, so I said: "well it's not happening."

But then one by one, my colleagues asked for this feature, and we all quite often want to see the stories we requested..., eventually I just can't, can't not do something.

So I spent tonight working on it, eventually I made it. It feels really stupid, but it works. So who cares? It involves expanding every single story, grab the requester info, put it somewhere, collapse the story. It takes quite a while, but.. I feel it's alright. So try it out, it's a beta feature(of course) so you'll need to opt-in from the options page.

Oh by the way, Tweaker is now on Github! Go nuts.

<a href="https://github.com/copyin/pivotal-tweaker" target="_blank" class="big-button red" id="tweaker-gh">Pivotal Tweaker on Github</a>
