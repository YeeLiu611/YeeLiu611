---
layout: default
lang: en
title: "联系我们 | 亚洲人本研究院"
alternate_url: "/zh/contact"
contact_title: "Contact Us"
contact_intro: "Contact Information"
contact_phone: "+1 778-636-2517"
contact_email: "info@pcia.asia"
contact_address: "Hong Kong"
---

<section class="page-header">
    <h1>{{ page.contact_title }}</h1>
</section>

<section class="container">
    <h2 style="text-align: center">{{ page.contact_intro }}</h2>
    <div class="contact-info">
    <br>
      <p><strong>Phone：</strong>{{ page.contact_phone }}</p>
      <p><strong>Email：</strong>{{ page.contact_email }}</p>
      <p><strong>Address：</strong>{{ page.contact_address }}</p>
    </div>
    <br>
    <h2 style="text-align: center">Or submit the form below and we will contact you shortly</h2>
    <br>
</section>

<form class="form" name="contact" method="POST" data-netlify="true" action="/ThankYou" netlify>
  <input class="form-group" type="text" name="name" placeholder="Your Name" required>
  <input class="form-group" type="email" name="email" placeholder="Your Email" required>
  <textarea class="form-group" name="message" placeholder="Your Message" required></textarea>
  <button class="btn" type="submit">Send</button>
</form>