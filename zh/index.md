---
layout: default
lang: zh
title: 亚洲人本研究院 | PCIA - 首页
alternate_url: /en/
carousel:
  - image: /images/uploads/06ef73d050c4fb7f57c110819ad6f9bfd73303090dac9f0c954ec79860094601.png
    title: 生长自有光
    description: 以人为中心 培训 教育 会议 期刊 会心团体
    button_text: 了解更多
    button_link: https://pcia.asia/zh/about/
  - image: /images/uploads/640.jpg
    title: 欢迎参加2025年度12场讲座项目
    description: 请点击下方按钮查看详情
    button_text: 了解详情
    button_link: https://pcia.asia/zh/programs/presentations/
  - image: /images/uploads/cleanshot-2025-03-02-at-21.36.56.jpg
    title: 以人为中心方法的核心价值
    button_text: 阅读文章
    description: 每个人都蕴藏着强大的自我理解能力，能够改变自我概念、态度以及产生自我导向的行为
    button_link: https://pcia.asia/zh/blog/core_values/
---

<div class="hero">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      {% for slide in page.carousel %}
        <div class="swiper-slide" style="background-image: url('{{ slide.image }}');">
          <!-- 这里加一个遮罩层 -->
          <div class="overlay"></div>
          <div class="slide-content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            {% if slide.button_text and slide.button_link %}
              <a href="{{ slide.button_link }}" class="btn">{{ slide.button_text }}</a>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
    <!-- 分页器（小圆点） -->
    <div class="swiper-pagination"></div>
    <!-- 左右箭头（可选） -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</div>

<section class="intro">
  <div class="container">
    <h2 class="post-body">我们的使命</h2>
    <p>我们致力于促进亚洲地区以人为中心方法的传播与实践，搭建跨国界的连接平台，支持个人与组织在真实、共情和尊重的环境中成长，并推动社会文化向更包容、更人性的方向迈进。</p>
  </div>
</section>

<!-- 最新动态区块 -->
<section class="useful-info">
  <div class="container content-container">
    <h2>最新动态</h2>
    <div class="events-and-blogs">
      <!-- 近期活动（项目） -->
      <div class="upcoming-events">
        <h3>近期活动</h3>
        {% if site.programs_zh and site.programs_zh.size > 0 %}
          {% assign latest_projects = site.programs_zh | sort: "date" | reverse | slice: 0, 2 %}
          {% for project in latest_projects %}
            <div class="event-item">
              <h4>{{ project.title_zh }}</h4>
              <p>
                时间：{{ project.date | date: "%Y 年 %m 月 %d 日" }}
                {% if project.time %}
                  - {{ project.time | date: "%Y 年 %m 月 %d 日" }}
                {% endif %}
              </p>
              <p>地点：{{ project.location }}</p>
              <a href="{{ project.url }}">查看详情</a>
            </div>
          {% endfor %}
        {% else %}
          <p>暂无近期活动。</p>
        {% endif %}
      </div>
      <!-- 最新博客文章 -->
      <div class="recent-posts">
        <h3>最新博客</h3>
        <ul class="blog-list">
          {% assign zh_posts = site.blog_zh | where: "lang", "zh" | sort: "date" | reverse %}
          {% for post in zh_posts limit:4 %}
            <li class="blog-item">
              <a class="post-link" href="{{ post.url }}">
                {{ post.title_zh }}
              </a>
              <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
