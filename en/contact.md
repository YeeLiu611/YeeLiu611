---
layout: default
lang: en
title: "联系我们 | 亚洲人本研究院"
alternate_url: "/zh/contact"
contact_title: "Contact Us"
contact_intro: "Contact Us"
contact_phone: "+1 778-636-2517"
contact_email: "info@pcia.asia"
contact_address: "Hong Kong"
---

<section class="page-header">
  <h1>{{ page.contact_title }}</h1>
</section>

<section class="contact-content">
  <div class="container content-container">
    <p>{{ page.contact_intro }}</p>
    <div class="contact-info">
      <p><strong>Phone: </strong>{{ page.contact_phone }}</p>
      <p><strong>Email: </strong>{{ page.contact_email }}</p>
      <p><strong>Address: </strong>{{ page.contact_address }}</p>
    </div>
  </div>
</section>

<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>