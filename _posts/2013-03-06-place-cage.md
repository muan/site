---
layout: post
title: Place cage everywhere
date: 2013-03-07 13:54:43
---

{% include twitter.html %}

[Placecage.com](http://www.placecage.com/) is awesome, so is [Fillmurray.com](http://fillmurray.com), so is [Nicenicejpg.com](http://nicenicejpg.com/).

We need all the placeholder images we can get, anytime, anywhere. So you need this bookmarklet.
Just drop any of the buttons below to your bookmark bar, and fill your world with...

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://placecage.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button green">Nicolas Cage</a>

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://fillmurray.com/g/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button red">Bill Murry</a>

<a href="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://nicenicejpg.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button yellow">Vanilla Ice</a>

<img src="http://placecage.com/g/80/200" />
<img src="http://placecage.com/g/310/200" />
<img src="http://placecage.com/g/100/200" />

---

Facebook is so much more fun when you're friends with Nicolas Cage.

<iframe src="http://vine.co/v/bH0jaqxl9jZ/card" width="100%" height="500" frameborder="0"></iframe>

or Bill Murry.

<iframe src="http://vine.co/v/bH0VaxuHvBY/card" width="100%" height="500" frameborder="0"></iframe>

---

Here's the actually code for it if you're curious:

<pre>javascript||
javascript:for(var i=0,item;item=document.getElementsByTagName("img")[i];i++)
{item.setAttribute("src","http://placecage.com/"+item.clientWidth+"/"+item.clientHeight)}
</pre>

---

In all seriousness, I made this because when I run localhost using Production DB I get error images as it's trying to link to production AWS bucket, this way I get real images in the img tags, and a smile. :)

Happy Thursday!

{% include twitter.html %}