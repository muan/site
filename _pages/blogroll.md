---
layout: default
title: Blogroll
---

This page is under construction. Only websites that are being actively updated are included (in theory), and the order is randomized on build.

{% assign links = site.data.blogroll | sort: "title" | sample: site.data.blogroll.size %}
{%- for item in links %}
- [{{ item.title }}]({{ item.url }})
{%- endfor %}
