---
layout: default
lang: zh
title: "联系我们 | 亚洲人本研究院"
alternate_url: "/en/contact"
contact_title: "联系我们"
contact_intro: "若您对我们的项目感兴趣，或希望与我们建立合作关系，请随时与我们联系！"
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
      <p><strong>电话：</strong>{{ page.contact_phone }}</p>
      <p><strong>邮箱：</strong>{{ page.contact_email }}</p>
      <p><strong>地址：</strong>{{ page.contact_address }}</p>
    </div>
  </div>
</section>

<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>