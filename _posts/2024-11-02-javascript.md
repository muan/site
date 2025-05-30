---
layout: default
date: 2024-11-02
title: JavaScript dos and donts
feature: 1
---

## Do

- When the core functionality of a feature cannot function with only HTML.
- When the core functionality of a feature can benefit from some JavaScript. Start with only HTML, then progressively enhance it, so it can still work without JavaScript. A table can be pure HTML; a sortable table needs only a dash of JavaScript.
- When HTML does not provide the user interface pattern required, then:
    - Is this user interface pattern absolutely essential? Can you use a checkbox or a select element and progressively enhance them? There is sometimes very legitimate reasons why this pattern does not exist in HTML.   
    Note that I used the word "legitimate" as opposed to "good", because HTML has a long legacy and some problems are so complex that it is very difficult to reach a consensus between all browser vendors, developers, assistive technology makers, and their users. Especially so since not everyone's interest aligns. I know, shocking.   
    This means your custom solution also needs to consider all the reasons why this pattern isn't part of HTML. And along with that—tech debt, browser compatibility issues, and maintenance cost.
    - If you are absolutely sure, still try to provide a non-JavaScript, bare bone path if possible, and then do use JavaScript, with caution.
- When the HTML solution is not accessible by default, like when you need an ARIA state change, `aria-expanded` or the sorts. Go to town, after checking [a11ysupport](http://a11ysupport.io)! Do everything WAI-ARIA tells you to. Skip nothing.
- When you think there’s a cool CSS hack to achieve an interactive behavior, because 95% of the times that solution will not be accessible without JavaScript.

## Don't

- All the other times.

---

## Addendum 12 Nov 2024

Since this middle of the night post that took less than five minutes to write got more eyeballs.

“Write JavaScript like it’s 2005” had been GitHub’s front-end team’s guideline since its inception, until React got pushed down from Microsoft management and most of us on the front-end team quit. If you are a user of github.com, consider how it has changed since 2020. 

This is an old practice that has gotten lost in the ways with the manufacture of JavaScript industrial complex/ecosystems and frameworks. I hate to be the one to tell old tales but this is just another reminder that you can absolutely avoid dependency hell, We used to review every single dependency that goes into GitHub Dotcom and during our time the JS bytes *continuously decreased* as features were added. See [Removing jQuery from GitHub.com front-end](https://github.blog/engineering/engineering-principles/removing-jquery-from-github-frontend/) for how at that time we approached GitHub front-end. jQuery was only one of the many dependencies that we _added with the goal to remove_ at some point.

I am sad to see new comers to web developments being bombarded with what you “MUST KNOW” when those things are **absolutely optional** for web development. One should not need to have `npm` installed in the first two months of your web development bootcamp, despite [what the industry perpetuates](https://muan.co/notes/2024-11-07-mm). I am disappointed that our once open and low barrier entry to web development was raised so unncessarily and arbitrarily high that we don’t even know exactly what we are serving to users. 

I to this day have zero front-end framework experience, but my knowledge in the web platform gets me hired, even by the framework making companies with great engineers, because they know my lack of knowledge for frameworks _does not matter_, what matters is that I know how the web works, I know how to trace back to the source and understand what each line of code does. 

We have an enterprise of mediocre restaurants that do not know/care to know the ingredients that go into making the food we are serving. 

---

Lastly,

- If you make websites, I encourage you to [exercise taking stock of your JavaScript usage](https://muan.co/notes/2024-11-11-uu).
- Alex Russell made [a flow chart](https://mastodon.social/@slightlyoff@toot.cafe/113432958268955739).
- Get [the original Anti-JavaScript JavaScript Club stickers](https://infrequently.org/stickers/) from Alex.
- Support the [Open Web Advocacy](https://open-web-advocacy.org) with [Anti-JavaScript JavaScript Club Tees](https://www.bonfire.com/anti-javascript-javascript-club/) by [Frances](https://fberriman.com).
- I also designed some [88 &times; 31 banners](https://github.com/muan/anti-js-js.club/issues/1) and made them into [stickers]({% link _pages/stuff.md %}).

---

From member of the Anti-JavaScript JavaScript Club,
Mu-An Chiou
