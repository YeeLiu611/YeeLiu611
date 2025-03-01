---
layout: default
lang: zh
title: "亚洲人本研究院 | PCIA - 首页"
alternate_url: "/en/index"
---

<div class="hero">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Slide 1 -->
      <div class="swiper-slide" style="background-image: url('/images/slide1.jpg');">
        <div class="slide-content">
          <h1>生长自有光</h1>
          <p>以人为中心 培训 教育 会议 期刊 会心团体</p>
          <a href="/zh/about.html" class="btn">了解更多</a>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="swiper-slide" style="background-image: url('/images/slide2.jpg');">
        <div class="slide-content">
          <h1>欢迎来到亚洲人本研究院</h1>
          <p>以人为中心 培训 教育 会议 期刊 会心团体</p>
          <a href="/zh/programs/" class="btn">查看我们的项目</a>
        </div>
      </div>
    </div>
    <!-- 分页器（小圆点） -->
    <div class="swiper-pagination"></div>
    <!-- 左右箭头，如果要的话 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</div>

<section class="intro">
  <div class="container">
    <h2>我们的使命</h2>
    <p>我们致力于通过以人为中心方法，帮助个人和组织发掘潜力、促进成长，构建以关怀、尊重、理解为核心的亚洲人本教育社区。</p>
  </div>
</section>

<!-- 最新动态区块 -->
<section class="useful-info">
  <div class="container content-container">
    <h2>最新动态</h2>
    <div class="events-and-blogs">
      <!-- 近期活动 -->
      <div class="upcoming-events">
        <h3>近期活动</h3>
        <div class="event-item">
          <h4>亚洲人本大会</h4>
          <p>时间：2025 年 5 月 10 日 - 12 日</p>
          <p>地点：上海虹桥国际会议中心</p>
          <a href="/zh/programs/">查看详情</a>
        </div>
        <div class="event-item">
          <h4>以人为中心咨询工作坊</h4>
          <p>时间：2025 年 6 月 2 日 - 4 日</p>
          <p>地点：北京海淀区某教育中心</p>
          <a href="/zh/programs/">查看详情</a>
        </div>
      </div>
      <!-- 最新博客文章 -->
      <div class="recent-posts">
        <h3>最新博客</h3>
        <ul class="blog-list">
          {% for post in site.posts limit:3 %}
            {% if post.lang == "zh" %}
              <li class="blog-item">
                <a class="post-link" href="{{ post.url }}">{{ post.title_zh }}</a>
                <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
