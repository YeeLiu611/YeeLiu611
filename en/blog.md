---
layout: default
title: "Blog"
permalink: /blog.html
---

<section class="page-header">
    <h1 data-key="blog_listing_title">Blog Posts</h1>
</section>


<section class="container content-container">
  <div class="blog-listing">
    <!-- 标题从 lang.json 加载多语言 -->
    <ul class="blog-list">
      {% for post in site.posts %}
        <li class="blog-item">
          <a 
            class="post-link"
            href="{{ post.url }}"
            data-zh="{{ post.title_zh }}"
            data-en="{{ post.title_en }}"
          >
            <!-- 默认显示中文标题 -->
            {{ post.title_zh }}
          </a>
          <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
