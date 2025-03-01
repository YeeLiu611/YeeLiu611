---
layout: default
lang: zh
title: "项目 | 亚洲人本研究院"
alternate_url: "/en/programs"
programs_title: "我们的项目"
---

<section class="page-header">
  <h1>{{ page.programs_title }}</h1>
</section>

<section class="page-content container content-container programs-content">

  <p>欢迎查看我们最新的项目列表：</p>

  <ul>
  {% for item in site.programs_zh %}
    <li>
      <!-- 标题，链接到项目详情页 -->
      <a href="{{ item.url }}">{{ item.title_zh }}</a>
      <!-- 可按需补充显示地点或时间等信息 -->
      <br>
      <small>地点：{{ item.location }} | 时间：{{ item.date | date: '%Y-%m-%d' }}</small>
    </li>
    <hr>
  {% endfor %}
  </ul>

</section>

