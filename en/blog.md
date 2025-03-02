---
layout: default
lang: en
title: "Articles | The Person-Centered Institute of Asia"
alternate_url: "/zh/blog"
---

<section class="page-header">
  <h1>{% if page.lang == "zh" %} 博客文章 {% else %} Articles {% endif %}</h1>
</section>

<section class="container content-container">
  <div class="blog-listing">
    <ul class="blog-list">
      {% if site.blog_en and site.blog_en.size > 0 %}
        {% assign blog_posts = site.blog_en | sort: 'date' | reverse %}
      {% else %}
        <p>⚠️ No blog posts found! Check if _blog_en/ contains markdown files with correct front matter.</p>
      {% endif %}

      {% for post in blog_posts %}
        <li class="blog-item">
          <a class="post-link" href="{{ post.url }}">
            {% if page.lang == "zh" %}
              {{ post.title_zh }}
            {% else %}
              {{ post.title_en }}
            {% endif %}
          </a>
          <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

