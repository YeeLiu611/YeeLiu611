---
layout: page
title: "证书领取"
lang: zh
---

<h1>证书领取</h1>

<form id="certificateForm">
  <label for="name">姓名：</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">邮箱：</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">领取密码：</label>
  <input type="text" id="password" name="password" required>
  
  <button type="submit">领取证书</button>
</form>

<div id="result"></div>

<script>
document.getElementById("certificateForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const response = await fetch("/.netlify/functions/claimCertificate", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email, password })
  });
  const data = await response.json();
  document.getElementById("result").innerHTML = data.message + (data.certificateNumber ? "<br>证书编号: " + data.certificateNumber : "");
});
</script>