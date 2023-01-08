---
layout: page
title: 학습 노트
sitemap: false
permalink: /project/my-online-gym/notes/
---
{{ site.tags }}
{%- for tag in ['my-online-gym'] -%}
  {%- capture name -%}{{ tag | first }}{%- endcapture -%}
  <h2 id="{{ name }}">{{ name | upcase }}</h2>
  {%- for post in site.tags[name] -%}
    <article class="post-item" id="results-container">
      <span class="post-item-date">{{ post.date | date: "%b %d, %Y" }}</span>
      <h3 class="post-item-title">
        <a href="{{ post.url }}">{{ post.title | escape }}</a>
      </h3> 
    </article>
  {%- endfor -%}
{%- endfor -%}