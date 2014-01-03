---
layout: post
title: Toggle Stories in Pivotal
date: 2012-11-27 21:54:13
---

In Chrome, add a new bookmark, and change the url to:

{% highlight javascript %}
javascript:void(jQuery(".item[id*='itemList_story']:not(:has(a[title='Mu-An Chiou']))").toggle())
{% endhighlight %}

Et voila, you can toggle to see only your stories! Of course, change my name to yours first.

---

When I first saw Pivotal I hated it. It was so cluttered and there were lots of colours that served as nothing but noise to me. But over time it grew on me with its wonderful integration with git, and stuff(?). (The “reject” story feature is questionable as it hurts my feeling.) So then I decided to try to work with it, by creating my own little feature using JavaScript and clearer visuals using CSS(Chrome plugin - Stylish).

Here’s one for you all. :)

---

Screenshot of my pivotal tracker in use:

![screenshot](/images/12112701.png)