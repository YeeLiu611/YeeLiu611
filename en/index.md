---
layout: default
lang: en
title: The Person Centered Institute of Asia | Home
alternate_url: /zh/index
carousel:
  - image: /images/uploads/06ef73d050c4fb7f57c110819ad6f9bfd73303090dac9f0c954ec79860094601.png
    title: In Light We Grow
    description: PCA | Training | Education | Conference | Journal | Encounter Group
    button_text: About Us
    button_link: https://pcia.asia/en/about/
  - image: /images/uploads/640.jpg
    title: Welcome to the 12-presentation series in 2025
    description: Please click the button below to view details
    button_text: Learn More
    button_link: https://pcia.asia/en/programs/presentations/
  - title: The Core Values of the Person-Centered Approach
    description: The individual has within him or her self vast resources for
      self-understanding, for altering her or his self-concept, attitudes, and
      self-directed behavior–and that these resources can be tapped if only a
      definable climate of facilitative psychological attitudes can be provided.
    button_text: Read Article
    button_link: https://pcia.asia/en/blog/core_values/
    image: /images/uploads/cleanshot-2025-03-02-at-21.36.56.jpg
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
