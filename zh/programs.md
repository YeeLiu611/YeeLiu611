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

<div class="programs-content container content-container">
  <!-- 遍历 _programs/zh 集合中的所有项目 -->
  {% for project in site.programs_zh %}
    <div class="program-item">
      <h2>
        <a href="{{ project.url }}">
          {{ project.title_zh }}
        </a>
      </h2>
      <p>Location: {{ project.location }}</p>
      <p>Time: {{ project.time | date: "%Y-%m-%d" }}</p>
      <div>
        {{ project.body_zh | markdownify }}
      </div>
      <hr class="program-divider" />
    </div>
  {% endfor %}
</div>
