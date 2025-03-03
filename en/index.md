---
layout: default
lang: en
title: "The Person Centered Institute of Asia | Home"
alternate_url: "/zh/index"
carousel:
  - image: "/images/uploads/slide1.jpg"
    title: "欢迎来到我们的网站"
    description: "这里是网站的介绍内容"
  - image: "/images/uploads/slide2.jpg"
    title: "探索更多内容"
    description: "点击这里查看最新文章"
  - image: "/images/uploads/slide3.jpg"
    title: "联系我们"
    description: "有任何问题？请随时联系我们！"
---

<div class="hero">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      {% for slide in page.carousel %}
        <div class="swiper-slide" style="background-image: url('{{ slide.image }}');">
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
    <h2>Our Mission</h2>
    <p>We are dedicated to helping individuals and organizations unlock their potential and grow, building a community rooted in care, respect, and understanding.</p>
  </div>
</section>

<!-- Latest Updates Section -->
<section class="useful-info">
  <div class="container content-container">
    <h2>Latest Updates</h2>
    <div class="events-and-blogs">
      <!-- Upcoming Projects -->
      <div class="upcoming-events">
        <h3>Upcoming Projects</h3>
        {% if site.programs_en and site.programs_en.size > 0 %}
          {% assign latest_projects = site.programs_en | sort: "date" | reverse | slice: 0, 2 %}
          {% for project in latest_projects %}
            <div class="event-item">
              <h4>{{ project.title_en }}</h4>
              <p>
                Date: {{ project.date | date: "%B %d, %Y" }}
                {% if project.time %}
                  - {{ project.time | date: "%B %d, %Y" }}
                {% endif %}
              </p>
              <p>Location: {{ project.location }}</p>
              <a href="{{ project.url }}">Learn More</a>
            </div>
          {% endfor %}
        {% else %}
          <p>No upcoming projects available.</p>
        {% endif %}
      </div>
      <!-- Recent Blog Posts -->
      <div class="recent-posts">
        <h3>Recent Blog Posts</h3>
        <ul class="blog-list">
          {% assign en_posts = site.blog_en | where: "lang", "en" | sort: "date" | reverse %}
          {% for post in en_posts limit:4 %}
            <li class="blog-item">
              <a class="post-link" href="{{ post.url }}">
                {{ post.title_en }}
              </a>
              <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
