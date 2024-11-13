---
layout: default
title: Blogroll
---

<a href="/blogroll.xml" class="">RSS</a>

This page is under construction. Only websites that are being actively updated are included (in theory), and the order is randomized on build.

{% assign links = site.data.blogroll | sort: "title" | sample: site.data.blogroll.size %}
{%- for item in links %}
- [{{ item.title }}]({{ item.url }}) <code class="smol">({{ item.lang }})</code>    
  {{ item.description }}
{%- endfor %}
