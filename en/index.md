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

<section class="features">
  <div class="container content-container">
    <h2>Our Main Programs</h2>
    <div class="feature-list">
      <div class="feature-item">
        <h3>Person-Centered Education Training</h3>
        <p>
          Placeholder text about person-centered education training, introducing the content and goals.
        </p>
      </div>
      <div class="feature-item">
        <h3>International Seminars & Forums</h3>
        <p>
          Placeholder text about international seminars and forums, highlighting key activities and features.
        </p>
      </div>
      <div class="feature-item">
        <h3>Online Resources & Courses</h3>
        <p>
          Placeholder text about online learning platforms and course details.
        </p>
      </div>
    </div>
    <a href="/en/programs.html" class="btn">View All Programs</a>
  </div>
</section>

<!-- Recent Blog Posts (limit 3) -->
<section class="recent-posts container content-container">
  <h2>Recent Blog Posts</h2>
  <ul class="blog-list">
    {% for post in site.posts limit:3 %}
      {% if post.lang == "en" %}
      <li class="blog-item" style="margin: 1rem 0;">
        <a class="post-link" href="{{ post.url }}">
          {{ post.title_en }}
        </a>
        <span class="blog-date"> - {{ post.date | date: "%Y-%m-%d" }}</span>
        <p style="margin-top: 0.5rem;">
          {{ post.excerpt | strip_html | truncate: 80 }}
          <a href="{{ post.url }}">[Read more]</a>
        </p>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>

<!-- Upcoming Events or Workshops -->
<section class="upcoming-events container content-container">
  <h2>Upcoming Events & Workshops</h2>
  <div class="event-item" style="margin-bottom: 1.5rem;">
    <h3>Person-Centered Asia Conference</h3>
    <p>Date: May 10 - 12, 2025</p>
    <p>Location: Shanghai Hongqiao International Conference Center</p>
    <p>Details: Workshops, roundtable forums, and encounter groups with guests from multiple countries 
       exploring the future of Person-Centered approaches in Asia.</p>
    <a href="/en/programs/">Learn more</a>
  </div>
  <div class="event-item" style="margin-bottom: 1.5rem;">
    <h3>Person-Centered Counseling Workshop</h3>
    <p>Date: June 2 - 4, 2025</p>
    <p>Location: Haidian District, Beijing</p>
    <p>Details: Tailored for school teachers and psychological counselors, focusing on 
       experiential learning of core conditions in Person-Centered approach.</p>
    <a href="/en/programs/">Learn more</a>
  </div>
</section>
