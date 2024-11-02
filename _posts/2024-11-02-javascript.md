---
layout: default
date: 2024-11-02
title: JavaScript dos and donts
feature: 1
---

## Do use JavaScript

- when the core functionality of your feature cannot function with only HTML.
- when the core functionality of your feature can benefit from some JavaScript. Start with only HTML, then  progressively enhance it, so it can still work without JavaScript.
- when HTML does not provide the user interface you need, then:
    - Do you REALLY need this user interface? Can you use a checkbox or a select element and progressively enhance them? There is sometimes very legitimate reasons why this interface does not exist in HTML. Note that I used the word "legitimate" as opposed to "good", because HTML has a long legacy and some problems are so complex that it is very difficult to reach a consensus between all browser vendors, developers, Assistive Technology makers and their users, especially since not everyone's interest align. I know, shocking.
    - If you are absolutely sure, still try to provide a non-JavaScript, bare bone path if possible, and then yes do use JavaScript.
- when the HTML solution is not accessible by default, like when you need an ARIA state change, `aria-expanded` or the sorts. Go to town! As in do everything WCAG tells you to. Skip nothing.
- when you think there’s a cool CSS hack to achieve an interactive behavior, because 95% of the times that solution will not be accessible without JavaScript.

## Do not use JavaScript

- All the other times.

---

From member of the Anti-JavaScript JavaScript Club,
Mu-An Chiou
