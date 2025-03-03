---
layout: default
lang: zh
title: "联系我们 | 亚洲人本研究院"
alternate_url: "/en/contact"
contact_title: "联系我们"
contact_intro: "您可以通过这些信息联系我们"
contact_phone: "+1 778-636-2517"
contact_email: "info@pcia.asia"
contact_address: "Hong Kong"
---

<section class="page-header">
  <h1>{{ page.contact_title }}</h1>
</section>

<section class="container">
  <div class="content-container">
    <h2 style="text-align: center">{{ page.contact_intro }}</h2>
    <br>
    <div class="contact-info">
      <p><strong>电话：</strong>{{ page.contact_phone }}</p>
      <p><strong>邮箱：</strong>{{ page.contact_email }}  &nbsp; &nbsp;</p>
      <p><strong>地址：</strong>{{ page.contact_address }} &nbsp; &nbsp; &nbsp; &nbsp;</p>
    </div>
    <br>
    <h2 style="text-align: center">或在下方提交表单，我们会尽快与您联系</h2>
    <br>
  </div>
</section>



<form class="form" name="contact" method="POST" data-netlify="true"  action="/ThankYou" netlify>
  <input class="form-group" type="text" name="name" placeholder="你的名字" required>
  <input class="form-group" type="email" name="email" placeholder="你的邮箱" required>
  <textarea class="form-group" name="message" placeholder="你要给我们发送的消息" required></textarea>
  <button class="btn" type="submit">Send</button>
</form>