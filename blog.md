---
layout: default
title: "Blog"
permalink: /blog.html
---

<!-- 
  1) 标题通过 data-key 从 lang.json 里取文字 
  2) 也可在 lang.json 中设置 "blog_listing_title" : { zh, en } 
-->

<h1 data-key="blog_listing_title">Blog Posts (默认显示英文)</h1>

<!-- 
  2) 遍历 site.posts，列出每篇文章的链接
  每篇文章在 front matter 里有 title_zh, title_en
  我们用 data-zh / data-en 存起来，切换按钮可变换它的文字
-->
<ul>
  {% for post in site.posts %}
    <li>
      <a 
        href="{{ post.url }}"
        class="post-link"
        data-zh="{{ post.title_zh }}"
        data-en="{{ post.title_en }}"
      >
        {{ post.title_zh }} <!-- 默认先显示中文 -->
      </a>
      <span> - {{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
