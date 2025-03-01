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

<section class="useful-info container content-container">
  <h2>所有项目</h2>
  <div class="events-and-blogs" style="margin-top: 2rem;">
    <!-- 这里展示“项目列表” -->
    <div class="recent-posts" style="flex: 1;">
      <ul class="blog-list">
        <!-- 遍历 _programs/zh 文件夹中的项目 -->
        {% for program in site.programs_zh %}
          <!-- 如果只想展示中文 lang 的，可加判断: program.lang == "zh" -->
          <li class="blog-item">
            <a class="post-link" href="{{ program.url }}">
              <!-- 展示项目标题(中文) -->
              {{ program.title_zh }}
            </a>
            <!-- 日期可选，不需要就去掉 -->
            <span class="blog-date"> - {{ program.date | date: "%Y-%m-%d" }}</span>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>
