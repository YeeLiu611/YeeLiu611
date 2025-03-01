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
      <!-- Upcoming Events -->
      <div class="upcoming-events">
        <h3>Upcoming Events</h3>
        <div class="event-item">
          <h4>Person-Centered Asia Conference</h4>
          <p>Date: May 10 - 12, 2025</p>
          <p>Location: Shanghai Hongqiao International Conference Center</p>
          <a href="/en/programs/">Learn More</a>
        </div>
        <div class="event-item">
          <h4>Person-Centered Counseling Workshop</h4>
          <p>Date: June 2 - 4, 2025</p>
          <p>Location: A venue in Haidian District, Beijing</p>
          <a href="/en/programs/">Learn More</a>
        </div>
      </div>
      <!-- Recent Blog Posts -->
      <div class="recent-posts">
        <h3>Recent Blog Posts</h3>
        <ul class="blog-list">
          {% for post in site.posts limit:3 %}
            {% if post.lang == "en" %}
              <li class="blog-item">
                <a class="post-link" href="{{ post.url }}">{{ post.title_en }}</a>
                <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
