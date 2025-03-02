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
      {% if page.lang == "zh" %}
        {% assign blog_posts = site.collections.blog_zh.docs | default: [] | sort: 'date' | reverse %}
      {% else %}
        {% assign blog_posts = site.collections.blog_en.docs | default: [] | sort: 'date' | reverse %}
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

