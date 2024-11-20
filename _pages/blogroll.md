---
layout: default
title: Blogroll
type: static
---

<a href="/blogroll.xml">RSS</a>

This page is frequently updated. Only websites that are being actively updated are included (in theory), and the order is randomized on build.

---

{% assign links = site.data.blogroll | sort: "title" | sample: site.data.blogroll.size %}
{%- for item in links %}
## [{{ item.title }}]({{ item.url }}) <code class="smol">({{ item.lang }})</code>    
{{ item.description }}
{%- endfor %}
