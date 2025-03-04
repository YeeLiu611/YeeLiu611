---
layout: default
lang: zh
title: "博客 | 亚洲人本研究院"
alternate_url: "/en/blog"
---

<section class="page-header">
  <h1>博客文章</h1>
</section>

<section class="container content-container">
  <div class="blog-listing">
    <ul class="blog-list">
      {% if site.blog_zh and site.blog_zh.size > 0 %}
        {% assign blog_posts = site.blog_zh | sort: 'date' | reverse %}
      {% else %}
        <p>⚠️ No blog posts found! Check if _blog_en/ contains markdown files with correct front matter.</p>
      {% endif %}

      {%- comment -%}
      先输出标题以“*”开头的文章（置顶文章）
      {%- endcomment -%}
      {% for post in blog_posts %}
        {% if page.lang == "zh" %}
          {% assign title = post.title_zh %}
        {% else %}
          {% assign title = post.title_en %}
        {% endif %}
        {% if title | slice: 0, 1 == '*' %}
          <li class="blog-item">
            <a class="post-link" href="{{ post.url }}">
              {{ title | remove_first: '*' }}
            </a>
            <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
          </li>
        {% endif %}
      {% endfor %}

      {%- comment -%}
      再输出其他文章
      {%- endcomment -%}
      {% for post in blog_posts %}
        {% if page.lang == "zh" %}
          {% assign title = post.title_zh %}
        {% else %}
          {% assign title = post.title_en %}
        {% endif %}
        {% unless title | slice: 0, 1 == '*' %}
          <li class="blog-item">
            <a class="post-link" href="{{ post.url }}">
              {{ title }}
            </a>
            <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
          </li>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
</section>
