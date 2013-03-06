---
layout: post
title: Place cage everywhere
date: 2013-03-06 20:13:52
---

[Placecage.com](http://www.placecage.com/) is awesome, so is [Fillmurray.com](http://fillmurray.com), so is [Nicenicejpg.com](http://nicenicejpg.com/).

We need all the placeholder images we can get, anytime, anywhere. So you need this bookmarklet.

<pre>javascript||
javascript:for(var i=0,item;item=document.getElementsByTagName("img")[i];i++){item.setAttribute("src","http://placecage.com/"+item.clientWidth+"/"+item.clientHeight)}
</pre>

Add a bookmark and change the url to the above code. 

Try now:

<a onclick="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://placecage.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button green">&hearts; Cage</a>

<a onclick="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://fillmurray.com/g/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button red">&hearts; Murry</a>

<a onclick="javascript:for(var i=0,item;item=document.getElementsByTagName('img')[i];i++){item.setAttribute('src','http://nicenicejpg.com/'+item.clientWidth+'/'+item.clientHeight)}" class="big-button yellow">Ice Ice Baby</a>

<img src="http://placecage.com/g/80/200" />
<img src="http://placecage.com/g/310/200" />
<img src="http://placecage.com/g/100/200" />