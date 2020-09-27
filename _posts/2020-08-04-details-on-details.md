---
layout: default
date: 2020-08-04
title: Details on &lt;details&gt;
image_text: Details on <details>
---

Find links and references mentioned in this post at [muan/details-on-details](https://github.com/muan/details-on-details).

<iframe src="https://anchor.fm/muan/embed/episodes/Details-on-details-English-ehlu8i/a-a2s4pnu" height="102px" width="100%" frameborder="0" scrolling="no"></iframe>

## Intro

This is Details on `<details>`, a talk I gave at Brooklyn JS in July 2018.

## A little bit about me

My name is Mu-An Chiou, I work at GitHub as an engineer on the Web Systems team.

My team is responsible for the frontend infrastructure, assets pipeline, client side performance and interaction accessibility. I spend the bulk of my time working on GitHub's suite of open source Web Components.

## `<details>` basics

I want to share with you all a bit about the HTML element called details. It is heavily used in the github.com frontend for progressive enhancement, but most people don't know about its existence or its usefulness.

Details is specced as a "disclosure widget from which the user can obtain additional information or controls". It is made of two elements, a parent element being details, and a child element called summary. Everything inside of the details element, except from the summary tag, will be invisible by default.

Summary is an interactive element, in the same category as anchor and button tags. It is focusable by default and has an activation behavior attached, which can be triggered by clicks or enter keypresses.

When the summary tag is clicked on, content inside of the details tag will become visible, and an open boolean attribute will be added to the details tag. A non-bubbling toggle event will also be fired from the details element whenever this state changes.

There is also a property on the details element called open, which you can get or set.

## Why `<details>`

A toggling widget isn't hard to make. With JS, you can easily bind a click handler on a button, query for some content, and then set its visibility. With CSS, there is a popular approach that uses a checkbox input element, and styling its siblings through the check state selector. So how is Details better?

Details is native to the browser, which means browser and screen readers know what it is. When user focuses on a summary element, browser knows it's supposed to be expanded, and it knows that additional content or controls will show up through the activation behavior. This semantic can be faked through scripting, but they are free when you use details.

Because browser is doing all the work, this means the toggling behavior works as soon as the page is parsed. If a toggle behavior depends on JavaScript, it means user will probably need to wait for the another 200k of script to be parsed and executed before users can interact with your button.

Since HTML is allowed in markdown, people are already using the details element in issue comments to create expandable bug report backtraces.

## GitHub's use cases

At GitHub, we value progressive enhancement, not because we think a lot of people uses GitHub without JavaScript, but because we believe this approach makes our website faster and incurs less wait time for the user.

In 2017 we started a project to ensure that critical paths on github.com can be used with JavaScript. The first obstacle we faced was all the dropdown menus on the site. To go to the user settings page, you need to open a dropdown menu, which back then was powered by JavaScript.

We initially investigated the CSS checkbox approach, but it was clear that approach won't be accessible. That's when `<details>` came into play.

We quickly started prototyping a dropdown menu with the details element. There were only two features missing: first, the ability to click anywhere to close a menu, and second, pressing escape to close a menu.

Inevitably a keyboard shortcut requires JavaScript, but we were able to create an overlay for users to click on by simply expanding the summary with CSS through a pseudo element when details is open.

With that, we were able to delete dropdown menu code.

Soon after, we started looking into places where a disclosure interaction is used, and found many. Nowadays emoji reactions are using details element, so are the build status popovers. The build status popover used to be the one thing that annoys me daily- When I see a commit and want to check the build status, I used to have to wait for JavaScript to load before clicking on the checkmark becomes interactive, but not anymore!

We then took a step even further.

One of the most common pattern on GitHub is dialog. We decided to progressively enhance dialog as well!

To get started, we simply but a div that is styled like a dialog inside of the details element, and that gets us 50% of the way.

The other 50% is ensuring that dialog is accessible. If you have ever tried to code a dialog from scratch, you'd know how difficult it is. Because of the lack of web APIs, it is quite hard to make dialogs accessible. For this reason, we created a custom element called "details-dialog". It is meant to be used inside of a details tag, and comes with focus management, tab trapping, and ARIA attributes you'd need to make a dialog accessible.

Now if a user has JavaScript disabled and wants delete their GitHub account, they can. They are able to open a dropdown menu, go to their personal settings page, then open a dialog, and submit a form to delete their account.

## Browser compatibility

I hope at this point you are excited to try out the details element. So let's talk about browser support! According to caniuse.com, 94% of your users use browsers that have support for details. But if you really care about supporting users on IE 11 or Edge 18, you can find a link to the polyfill that we used to use, it was created by the folks at Basecamp. We had made sure the polyfill is accessible, so you should have no problems.

Other than this, unfortunately the details user agent style still is a bit of a mess, which is why we have a CSS utility that resets the disclosure triangle styling across browsers and polyfills. You can find this in my GitHub repository as well.

## Closing

In researching this talk I dug through the old HTML mailing list, and I found out that people had put in a wild amount of work not just writing the spec, but also hours and hours having heated discussions about what to call `<summary>`, and even just fighting to keep details in the official recommendation. And that was 10 years ago.

I think `<details>` is a very useful element that makes our lives as web developers much easier. For that I have the spec editors to thank for. 10 years later today, details is only used for about 2% of the web traffic. Let's change that!

Lastly, I have also given talk called "A dialog on `<dialog>`", in which I walk through the problems in the dialog element spec, the challenges around its lack of browser support, and the web APIs that are supposed to save us all from this. You can find it in my GitHub account as well.
