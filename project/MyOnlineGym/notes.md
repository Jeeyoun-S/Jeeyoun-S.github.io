---
layout: page
title: 학습 노트
sitemap: false
permalink: /project/my-online-gym/notes/
---

{%- for post in site.tags['my-online-gym'] -%}
<article class="post-item" id="results-container">
    <span class="post-item-date">{{ post.date | date: "%b %d, %Y" }}</span>
    <h3 class="post-item-title">
    <a href="{{ post.url }}">{{ post.title | escape }}</a>
    </h3> 
</article>
{%- endfor -%}