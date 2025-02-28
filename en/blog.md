---
layout: default
lang: en
title: "博客 | 亚洲人本研究院"
alternate_url: "/en/blog.html"
permalink: /blog.html
---

<section class="page-header">
  <h1>博客文章</h1>
</section>

<section class="container content-container">
  <div class="blog-listing">
    <ul class="blog-list">
      {% for post in site.posts %}
        <li class="blog-item">
          <a class="post-link" href="{{ post.url }}">
            {{ post.title_zh }}
          </a>
          <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
