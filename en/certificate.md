---
layout: page
title: "Certificate Claim"
lang: en
---

<h1>Certificate Claim</h1>

<form id="certificateForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Claim Password:</label>
  <input type="text" id="password" name="password" required>
  
  <button class="btn" type="submit">Claim Certificate</button>
</form>

<!-- 进度条容器 -->
<div id="progressBarContainer">
  <div id="progressBar"></div>
</div>

<!-- 结果显示区域 -->
<div id="result"></div>

<style>
  /* 进度条容器 */
  #progressBarContainer {
    width: 100%;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    margin-top: 10px;
    display: none; /* 默认隐藏 */
  }
  /* 进度条 */
  #progressBar {
    width: 0%;
    height: 20px;
    background-color: #4caf50;
    text-align: center;
    line-height: 20px;
    color: white;
  }
</style>

<script>
  const progressBarContainer = document.getElementById("progressBarContainer");
  const progressBar = document.getElementById("progressBar");

  // 模拟进度条
  const startProgress = () => {
    progressBarContainer.style.display = "block";
    progressBar.style.width = "0%";
    progressBar.textContent = "0%";
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      if (progress >= 95) {
        progress = 95;
        clearInterval(interval);
      }
      progressBar.style.width = progress + "%";
      progressBar.textContent = progress + "%";
    }, 200);
    return interval;
  };

  const finishProgress = () => {
    progressBar.style.width = "100%";
    progressBar.textContent = "100%";
    setTimeout(() => {
      progressBarContainer.style.display = "none";
    }, 500);
  };

  document.getElementById("certificateForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    // 启动进度条
    const intervalId = startProgress();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
      const response = await fetch("/.netlify/functions/claimCertificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      
      // 完成进度条
      clearInterval(intervalId);
      finishProgress();
      
      if (data.certificateNumber && data.certUrl) {
        document.getElementById("result").innerHTML = `
          <p>${data.message}</p>
          <p>Certificate Number: ${data.certificateNumber}</p>
          <a id="downloadBtn" href="${data.certUrl}" download>
            <button class="btn" type="button">Download Certificate</button>
          </a>
        `;
      } else {
        document.getElementById("result").innerHTML = `<p>${data.message}</p>`;
      }
    } catch (err) {
      clearInterval(intervalId);
      finishProgress();
      console.error("Request failed:", err);
      document.getElementById("result").innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    }
  });
</script>