---
layout: default
title: My First Pull Request
---

I still remember how hard it was to open my first pull request, but when I eventually did, it became probably one of the most rewarding things I've done. I wanted to share my story, in the hope of helping people getting over the first mental hurdle.

@andrew built this handy tool – [firstpr.me](http://firstpr.me), for looking up your first public pull request, and mine was to Bootstrap!

[![My first pull request as found on http://firstpr.me/#muan](/images/20150512-firstpr.png)](http://firstpr.me#muan)

---

At the time, I was working in a 4-person startup where I was a designer and front-end developer. We weren't using the GitHub flow, instead we mainly just rebased all the things. Therefore I wasn't familiar with branching or the GitHub UI, I didn't even visit github.com for work, let alone participate in the open source community.

We wanted all of our app's right-hand side tooltips to be one line, despite their length, so I added a workaround to override the max-width Bootstrap sets by default:

{% highlight css linenos %}
.tooltip.right .tooltip-inner {
  max-width: none;
}
{% endhighlight %}

It did kind of help, but then some of the tooltips became mispositioned. The problematic tooltips were the ones longer than the default, while the short ones were fine. After a bit of digging I *kind of* decided that this bug lies within Bootstrap.

But, what's the possibility of :crown: the authors of Bootstrap :crown: not knowing this already? Or that they did this intentionally? They know their shit, and do I?... well definitely not as much. I must have missed something, right?

I was putting off fixing this bug because I wasn't 100% sure if it was me who added a bad fix – and sadly I didn't know how else to achieve what we wanted, or if there was actually something wrong in Bootstrap.

The bug felt bigger than me, because it was in the ever so popular Twitter Bootstrap, what can I do about it? I'm not that good, certainly not Bootstrap contributors good, right?

At the same time I was getting pressure from my boss – why is this bug not fixed already? And after a bit of discussions, it turned out that my boss had the same concern, "how is it possible that you found a bug in Bootstrap?" and that got me riled up.

I wasn't stupid, I knew the code, I doubted myself indeed, but that was a confidence thing. Judging the evidence rationally, I had to be right!

Having another person also doubt my debugging outcome made me angry, and I wanted to stand up for myself. It was silly really, I was doing the exact same thing to myself, but I didn't feel it.

So, I got the courage and opened up the pull request on Bootstrap. As you can see on [twbs/bootstrap#6703](https://github.com/twbs/bootstrap/pull/6703). The fix was dead simple, but I still probably rewrote the PR body and redid the example tens of times. The jsbin URL was at the 10th revision! I read so many other pull requests trying to spot common mistakes, and thought I had covered them all, but as it turned out I missed one important thing – `CONTRIBUTING.md`[<sup>*</sup>](https://github.com/blog/1184-contributing-guidelines). It said you'd need to add tests and compile the code, so accordingly my pull request was closed by @fat, asking for a test.

OK, it was a setback, but that didn't mean I was wrong, I just missed something. I wasn't going to give up that easily.

I got back up, read through the contribution guidelines, combed through the unit test code, learned how to test JavaScript and compile my code, I opened another pull request: [twbs/bootstrap#7327](https://github.com/twbs/bootstrap/pull/7327), and I waited.

It got merged 4 months later, though I'd already left the startup, it – still – felt – hella – good.

I WON! :trophy:

---

From the time of my first pull request, to the time that the second pull request got merged, a lot had happened.

I stopped being afraid of GitHub and started putting all the things online. I put up my first real open source project (and got to experience getting lots of issues rather than pull requests!). I also made [a popular (in Taiwan) generator game](https://www.google.com.tw/search?q=%E8%88%89%E7%89%8C%E5%B0%8F%E4%BA%BA&espv=2&biw=1309&bih=707&source=lnms&tbm=isch&sa=X&ei=_ftQVaS_JYvz8QXSvICABw&ved=0CAYQ_AUoAQ) in collaboration with an illustrator friend of mine, and had to make the repository private overnight because he started making much money off of it.

Finally, and most amazingly, I also started interviewing at GitHub. During the interview process, the most memorable part was getting an email from @mdo, and hearing him say in FaceTime: "I saw your pull request, and thought holy shit that's muan! I recognize her!" :heart_eyes:

---

I wouldn't be here if not for having that courage to open the first pull request.

I used to think I was really far from this world of people worthy and capable of coding and collaborating in the open, but I was not, and **no one is, ever.** To not have participated would have been a huge loss for me.

---

[What's your first pull request?](http://firstpr.me) Would you share your story? If/when you do, please do let me know, and I will include them here.
