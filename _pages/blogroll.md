---
layout: default
title: Blogroll
links:
  - title: Garen J. Torikian
    url: https://www.gjtorikian.com/
  - title: Javier Acre
    url: https://javier.computer/
  - title: Robert Heaton
    url: https://robertheaton.com/
  - title: 原田梨沙
    url: https://note.com/risacan
  - title: Monica Dinculescu
    url: https://meowni.ca/
  - title: Timothy Guan-tin Chien
    url: https://blog.timdream.org/
  - title: Brian J Brennan
    url: https://bjb.dev/
  - title: Adam Morse
    url: https://mrmrs.cc/
  - title: Zach Holman
    url: https://zachholman.com/
  - title: Hidde de Vries
    url: https://hidde.blog/
  - title: Alice Bartlett
    url: https://alicebartlett.co.uk/
---

This page is under construction. Only websites that are being actively updated are included (in theory), and the order is randomized on build. 

{% assign links = page.links | sort: "title" | sample: page.links.size %}
{%- for item in links %}
- [{{ item.title }}]({{ item.url }})
{%- endfor %}