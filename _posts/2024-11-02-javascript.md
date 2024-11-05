---
layout: default
date: 2024-11-02
title: JavaScript dos and donts
feature: 1
---

## Do use JavaScript

- When the core functionality of a feature cannot function with only HTML.
- When the core functionality of a feature can benefit from some JavaScript. Start with only HTML, then progressively enhance it, so it can still work without JavaScript. A table can be pure HTML; a sortable table needs only a dash of JavaScript.
- When HTML does not provide the user interface pattern required, then:
    - Is this user interface pattern absolutely essential? Can you use a checkbox or a select element and progressively enhance them? There is sometimes very legitimate reasons why this interface does not exist in HTML.   
    Note that I used the word "legitimate" as opposed to "good", because HTML has a long legacy and some problems are so complex that it is very difficult to reach a consensus between all browser vendors, developers, assistive technology makers, and their users. Especially so since not everyone's interest aligns. I know, shocking.   
    This means your custom solution also needs to consider all the reasons why this pattern isn't part of HTML. And along with that—tech debt, browser compatibility issues, and maintenance cost.
    - If you are absolutely sure, still try to provide a non-JavaScript, bare bone path if possible, and then do use JavaScript, with caution.
- When the HTML solution is not accessible by default, like when you need an ARIA state change, `aria-expanded` or the sorts. Go to town, after checking [a11ysupport](http://a11ysupport.io)! Do everything WAI-ARIA tells you to. Skip nothing.
- When you think there’s a cool CSS hack to achieve an interactive behavior, because 95% of the times that solution will not be accessible without JavaScript.

## Do not use JavaScript

- All the other times.

---

From member of the Anti-JavaScript JavaScript Club,
Mu-An Chiou
