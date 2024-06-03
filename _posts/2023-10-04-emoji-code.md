---
layout: default
date: 2023-10-04
title: ":tada:, on emoji code and more"
feature: 1
---

🎉, what do you call this emoji? To many of us it is memorized as `:tada:`, or `:hooray:`. However, if you put that into macOS/iOS emoji searcher, neither tada nor hooray would yield any results.

This is not a post about emoji naming, but about what we all now refer to as the `:emoji_code:`. Emoji naming is a can of worms that I would rather not open.

For a bit of context, I am a bit of an emoji enthusiast, and also kind of a fundamentalist. I maintain [several](https://github.com/muan/emojilib) [emoji](https://github.com/muan/unicode-emoji-json) [related](https://github.com/muan/emoji-minesweeper) projects. My friendship with many people in tech started through our shared interest in emoji, which is why I have been thinking about writing this post for a while.

To all the lovelies at Slack, I don't mean to pick on you all. You just got too popular and people start to attribute things to you. So I aim to set some records straight.

- What is Emoji?
- Slack custom "emoji" are not Emoji.
- Slack did not invent `:emoji_code:`.

## What is Emoji?

You can find the origin story of Emoji (<ruby>絵文字<rp>(</rp><rt>えもじ</rt><rp>)</rp> </ruby>) in [Mariko](https://twitter.com/kosamari)'s [Evolution of Emoji 🖼🔤✨](https://speakerdeck.com/kosamari/evolution-of-emoji) or [Monica](https://meowni.ca/)'s [Emoji: how do you get from U+1F355 to 🍕?](https://meowni.ca/posts/emoji-emoji-emoji/). They have done a fantastic job telling you all its glory that there's nothing I can add.

My very brief version of the introduction is: Emoji is a character or a sequence of characters in the emoji category, as defined and maintained by the Unicode Consortium. Emoji are characters, similarly [龜 is a character that means turtle](https://www.compart.com/en/unicode/U+9F9C), and [🐢 is a character that means turtle](https://www.compart.com/en/unicode/U+1F422).

The Unicode Consortium does a lot of other things, like [preserving near-extinct languages](https://restofworld.org/2021/tulu-unicode-script/), like [figuring out how to design spaces for multiple versions of the same origin character that are different in cultures as they continue to change over time](https://en.wikipedia.org/wiki/Han_unification).

## Slack custom "emoji"

Slack custom emoji on the other hand, are images that rendered in character sized to mimic the graphical yet character-like nature of Emoji. They are usually assigned a shortcode, but has no _definition_ nor does it occupy a space in [the Unicode Character Code Charts](https://unicode.org/charts/).

As an Emoji fundamentalist, I hope you can see why I have a problem with people calling them emoji. The "文字"（words/characters) part is kind of important. These are tiny stickers. I am not saying it's bad; they are just not emoji.

## Who _invented_ `:emoji_code:`?

It's hard to say, but shortcodes like these that represents text-sized imagery have existed since the dawn of the world wide web, and particularly around the time internet forum blossomed. In this case I want to talk about specifically using shortcodes for emoji, so it's going to be between _the standardization of emoji_ (read the linked posts if you didn't in the previous paragraphs) and the birth of Campfire. Here I will let [Jeremy Daer](https://twitter.com/bitsweat) who introduced the first 10 `:emoji_code:` to [Campfire](https://en.wikipedia.org/wiki/37signals#Campfire) do the talking:

> Nice to meet you, Mu-An.
>
> `:sunny:` ☀️ and `:leaves:` 🍃 were the first two. They're still favorites. 😊
> 
> This was a quick hack to have fun with an easter egg in Campfire since native emoji were broadly unsupported at the time (fall 2010). The colon style mimicked `*other*` `/forms/` of `~emphasis~` common in message boards and IRC using `:noun-like:` punctuation that seemed otherwise unclaimed.
> 
> Names were assigned to feel right in chat rather than mirroring the long Unicode descriptors, like `:+1:` for 👍🏼 rather than `:thumbs_up_sign:` and `:zzz:` for 💤 rather than `:sleeping_symbol:`.
> 
> We gradually added more shortcodes as we used them, including in Campfire /play sounds.
> 
> Soon after, [emoji-cheat-sheet.com](https://web.archive.org/web/20111231100534/http://www.emoji-cheat-sheet.com/) popped up, thanks to [Arvid Andersson](http://arvidandersson.se/).
> 
> GitHub used Campfire at the time and they caught on to the hidden feature right away. They requested more and started to use them internally, so in winter 2011 we extracted a gem that became [gemoji](https://github.com/github/gemoji).
> 
> Arvid probably has a keener sense of history from here: tons of others either adopted those shortcodes as-is or introduced their own sets and he compiled their usage on emoji-cheat-sheet. (Note, it appears he sold the site, but the original is still in archive.org and the GitHub repo still has full history.)
> 
> Thanks for the email! Fun to look back at this. I had no idea it had spread so widely. (We dropped support for shortcodes in Basecamp 3 since nearly all browsers had native emoji support by then.)
> 
> Best,
> Jeremy

That's it! Many thanks to Jeremy Daer for providing these context.

To this day the naming of `:emoji_code:` is still non-standardized, and I don't know what it'd take for it to be. There are emoji projects that attempts to consolidate all the codes used in different chat platforms, but because there [isn't a consistent source of truth](https://github.com/muan/emojilib/issues/194#issuecomment-1731797669), these libraries will always be playing catch.

## How to use Emoji?

Lastly, let me rant on for a little bit more. 

Since Emoji are characters by definition, they should not be used as not iconography, especially when used for the imagery implied meanings. This is especially important when it comes to localization and assistive technologies. The operating systems knows how to read Emoji as they have definition, however this is not universal nor localized. 

For example, 🧵 is defined as "thread", which is commonly known in the English speaking internet as "a thread of discussions on a topic", however this definition is not localized to Chinese. To use 🧵 as a stand-in for "thread" it means you risk meaning getting lost in language barriers and cultural differences. 

For a microblog like "🚨🚨🚨🚨 Attention 🚨🚨🚨🚨 Wild fire alert in the following regions: ...., calling for immediate evacuation for all local residents," what assistive technology reads out is "police car's light police car's light police car's light police car's light attention police car's light police car's light police car's light police car's light wid fire alert in the following regions:..." Surely that is not considered an optimal experience nor messaging.

Or for a less hyperbole example: "Today is international 🥞 pancake 🥞 day!" reads "Today is international pancakes pancake pancakes day!"

We can argue how assistive technology, operating systems, or browser engines, should and may be able to fix this issues through automatic de-duplication. but in the case of user-generated content I personally do not think it's an easy problem to tackle. [VoiceOver on macOS now reads it by count of emoji](https://mastodon.social/@timdream/111174932479788790), [NVDA de-duplicates where possible](https://github.com/nvaccess/nvda/issues/8499); however, these fixes only apply when emoji are used as plain text, and aren't being replaced by images with alt text for flavors or cross operating system support, like they do in Slack, Discord, Twitter, and may other platforms.

I don't expect everyone with an emoji keyboard to know this, but I think these guidelines should be baseline knowledge for all the content writers.

---

As much as I love emoji, the Unicode Consortium undoubtedly does a lot of work that is way more important than maintaining and adding Emoji each year in my opinion (see: Mariko's [hot](https://twitter.com/kosamari/status/1222639816627687429) [take](https://twitter.com/kosamari/status/1222637150270840833)). However, if the attention they got through the worldwide adoption of Emoji helps fund their work, I guess that is a good thing. You can [adopt an emoji](https://unicode.org/consortium/adopt-a-character.html) to help fund their work.

[I adopted 😬](https://twitter.com/muanchiou/status/721096561808121856) a while ago; I used to make this face in photos because I don't like my smile, and to me it also is akin to 🤷🏻‍♀️, but there's really no way for people to know that I didn't mean to be [`:grimacing:`](https://dictionary.cambridge.org/dictionary/english/grimacing).

Now, go forth and enjoy Emoji responsibly. 👋🏼

---

Many thanks to [Javan](https://javan.us/), [Trevor](https://mastodon.social/@trevorturk@ruby.social), [Josh](https://github.com/josh), and [Jeremy](https://twitter.com/bitsweat) for the background information on the creation of shortcode.
Many thanks to [Monica](https://meowni.ca/) for reviewing this blog post.
Many thanks to [Julia](https://github.com/juliamae) for her wonderful emoji presentation in GitHub circa 2012 (find it and watch it, current hubbers!). 