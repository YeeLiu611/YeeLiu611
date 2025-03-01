---
layout: default
lang: zh
title: "亚洲人本研究院 | PCIA - The Person Centered Institute of Asia"
alternate_url: "/en/index"
hero_title: "生长自有光"
hero_subtitle: "以人为中心 培训 教育 会议 期刊 会心团体"
hero_btn: "了解更多"
intro_title: "我们的使命"
intro_text: "我们致力于通过以人为中心方法，帮助个人和组织发掘潜力、促进成长，构建以关怀、尊重、理解为核心的亚洲人本教育社区。"
---

<section class="hero">
  <div class="hero-content">
    <h1>{{ page.hero_title }}</h1>
    <p>{{ page.hero_subtitle }}</p>
    <a href="/zh/about.html" class="btn">{{ page.hero_btn }}</a>
  </div>
</section>

<section class="intro">
  <div class="container">
    <h2>{{ page.intro_title }}</h2>
    <p>{{ page.intro_text }}</p>
  </div>
</section>

<section class="features">
  <div class="container content-container">
    <h2>我们的主要项目</h2>
    <div class="feature-list">
      <div class="feature-item">
        <h3>人本教育培训</h3>
        <p>这里是关于人本教育培训的占位文本，介绍培训内容和目标。</p>
      </div>
      <div class="feature-item">
        <h3>国际研讨会与论坛</h3>
        <p>这里是关于国际研讨会与论坛的占位文本，展示活动信息和亮点。</p>
      </div>
      <div class="feature-item">
        <h3>线上资源与课程</h3>
        <p>这里是关于线上资源与课程的占位文本，介绍在线学习平台和课程详情。</p>
      </div>
    </div>
    <a href="/zh/programs.html" class="btn">查看所有项目</a>
  </div>
</section>

<!-- 新增：最新博客文章（仅示例3篇） -->
<section class="recent-posts container content-container">
  <h2>最新博客文章</h2>
  <ul class="blog-list">
    {% for post in site.posts limit:3 %}
      {% if post.lang == "zh" %}
      <li class="blog-item" style="margin: 1rem 0;">
        <a class="post-link" href="{{ post.url }}">
          {{ post.title_zh }}
        </a>
        <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
        <p style="margin-top: 0.5rem;">
          {{ post.excerpt | strip_html | truncate: 80 }}
          <a href="{{ post.url }}">[阅读全文]</a>
        </p>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>

<!-- 新增：近期活动与工作坊示例 -->
<section class="upcoming-events container content-container">
  <h2>近期活动与工作坊</h2>
  <div class="event-item" style="margin-bottom: 1.5rem;">
    <h3>亚洲人本大会</h3>
    <p>时间：2025 年 5 月 10 日 - 12 日</p>
    <p>地点：上海虹桥国际会议中心</p>
    <p>详情：工作坊、圆桌论坛、会心团体，多国嘉宾共同探讨以人为中心在亚洲的实践与未来。</p>
    <a href="/zh/programs/">查看详情</a>
  </div>
  <div class="event-item" style="margin-bottom: 1.5rem;">
    <h3>以人为中心咨询工作坊</h3>
    <p>时间：2025 年 6 月 2 日 - 4 日</p>
    <p>地点：北京海淀区某教育中心</p>
    <p>详情：针对在校教师与心理咨询师，学习和实践以人为中心的核心条件。</p>
    <a href="/zh/programs/">查看详情</a>
  </div>
</section>
