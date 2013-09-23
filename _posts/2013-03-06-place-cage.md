---
layout: post
title: Place Cage Everywhere
date: 2013-03-07 13:54:43
---

Wouldn't it be nice if all your friends were Nicolas Cage. Or Bill Murray. Or Vanilla Ice.

<div class="slide-place-cage" onclick="window.open('/images/13030701.png')">&nbsp;</div>

[Placecage.com](http://www.placecage.com/) is awesome, so is [Fillmurray.com](http://fillmurray.com), so is [Nicenicejpg.com](http://nicenicejpg.com/).

We need all the placeholder images we can get, anytime, anywhere. So you need this bookmarklet.
Just drag any of the buttons below to your bookmark bar, and with a click you can replace all the images on a website with images of...

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://placecage.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button green">Nicolas Cage</a>

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://stevensegallery.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button green">Steven Segal</a>

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://nicenicejpg.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button green">Vanilla Ice</a>

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://fillmurray.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button blue">Bill Murray</a>


<img src="http://placecage.com/g/280/180" height="180" />
<img src="http://placecage.com/g/100/180" height="180" />
<img src="http://placecage.com/g/180/180" height="180" />

---

Here's the actual code for it if you're curious:

{% gist muan/4de4b806c4db59285beb place-cage.js %}

---

In all seriousness, I made this because when I run localhost using Production DB I get error images as it's trying to link to production AWS bucket, this way I get real images in the img tags, and a smile. :)

Happy Thursday!
