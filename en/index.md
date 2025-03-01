---
layout: default
lang: en
title: "The Person Centered Institute of Asia | Home"
alternate_url: "/zh/index"
hero_title: "In Light We Grow"
hero_subtitle: "Training | Education | Conferences | Journals | Encounter-Groups"
hero_btn: "Learn More"
intro_title: "Our Mission"
intro_text: "We are dedicated to helping individuals and organizations unlock their potential and grow, building a community rooted in care, respect, and understanding."
---

<section class="hero">
  <div class="hero-content">
    <h1>{{ page.hero_title }}</h1>
    <p>{{ page.hero_subtitle }}</p>
    <a href="/en/about.html" class="btn">{{ page.hero_btn }}</a>
  </div>
</section>

<section class="intro">
  <div class="container">
    <h2>{{ page.intro_title }}</h2>
    <p>{{ page.intro_text }}</p>
  </div>
</section>

<!-- New: Latest Updates Section -->
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
