---
layout: default
lang: en
title: "Programs | The Person-Centered Institute of Asia"
alternate_url: "/zh/programs"
programs_title: "Our Programs"
---

<section class="page-header">
  <h1>{{ page.programs_title }}</h1>
</section>

<div class="programs-content container content-container">
  <!-- 遍历 _programs/en 集合中的所有项目 -->
  {% for project in site.programs_en %}
    <div class="program-item">
      <h2>
        <a href="{{ project.url }}">
          {{ project.title_en }}
        </a>
      </h2>
      <p>Location: {{ project.location }}</p>
      <p>      
        {{ page.date | date: "%Y-%m-%d" }}
        {% if page.time %}
        --- {{ page.time | date: "%Y-%m-%d"}}
        {% endif %}
      </p>
      <div>
        {{ project.body_en | markdownify }}
      </div>
      <hr class="program-divider" />
    </div>
  {% endfor %}
</div>
