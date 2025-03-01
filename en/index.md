---
layout: default
lang: en
title: "The Person Centered Institute of Asia | Home"
alternate_url: "/zh/index"
---

<div class="hero">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Slide 1 -->
      <div class="swiper-slide" style="background-image: url('/images/slide1.jpg');">
        <div class="slide-content">
          <h1>In Light We Grow</h1>
          <p>Training | Education | Conferences | Journals | Encounter-Groups</p>
          <a href="/en/about.html" class="btn">Learn More</a>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="swiper-slide" style="background-image: url('/images/slide2.jpg');">
        <div class="slide-content">
          <h1>Welcome to PCIA</h1>
          <p>Training | Education | Conferences | Journals | Encounter-Groups</p>
          <a href="/en/programs/" class="btn">View Our Programs</a>
        </div>
      </div>
    </div>
    <!-- If you want pagination -->
    <div class="swiper-pagination"></div>
    <!-- If you want next/prev arrows -->
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

<!-- Latest Updates -->
<section class="useful-info">
  <div class="container content-container">
    <h2>Latest Updates</h2>
    <div class="events-and-blogs">
      <!-- Upcoming Projects -->
      <div class="upcoming-events">
        <h3>Upcoming Projects</h3>
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
      </div>
      <!-- Recent Blog Posts -->
      <div class="recent-posts">
        <h3>Recent Blog Posts</h3>
        <ul class="blog-list">
          {% assign en_posts = site.posts | where: "lang", "en" | sort: "date" | reverse %}
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
