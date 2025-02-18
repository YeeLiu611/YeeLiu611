// js/lang.js

let translations = {};

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
}

// 等待页面 DOM 加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 获取当前语言，默认为英文（或根据需要设置）
  let currentLang = localStorage.getItem("siteLang") || "en";

  // 加载 lang.json 文件
  fetch('/lang.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
      updateLanguage(currentLang);
      const langToggleBtn = document.getElementById("lang-toggle-btn");
      if (langToggleBtn) {
        // 根据当前语言设置按钮初始文本
        langToggleBtn.textContent = currentLang === "zh" ? "EN" : "中文";
        langToggleBtn.addEventListener("click", () => {
          currentLang = currentLang === "zh" ? "en" : "zh";
          localStorage.setItem("siteLang", currentLang);
          updateLanguage(currentLang);
          langToggleBtn.textContent = currentLang === "zh" ? "EN" : "中文";
        });
      }
    })
    .catch(error => {
      console.error("无法加载语言文件:", error);
    });
});
