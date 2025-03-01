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

<section class="page-content container content-container programs-content">

  <p>Welcome to our latest project list:</p>

  <ul>
  {% for item in site.programs_en %}
    <li>
      <a href="{{ item.url }}">{{ item.title_en }}</a>
      <br>
      <small>Location: {{ item.location }} | Date: {{ item.date | date: '%Y-%m-%d' }}</small>
    </li>
    <hr>
  {% endfor %}
  </ul>

</section>
