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

// 新增: 切换博客正文
function updateBlogPostLang(lang) {
  const titleEl = document.querySelector(".post-title");
  const bodyEl = document.querySelector(".post-body");
  if (!titleEl || !bodyEl) return;

  // 标题: data-zh / data-en
  const newTitle = titleEl.dataset[lang];
  if (newTitle !== undefined) {
    titleEl.textContent = newTitle;
  }

  // 正文: data-zh / data-en
  const newBodyHTML = bodyEl.dataset[lang];
  if (newBodyHTML !== undefined) {
    // unescape HTML if necessary
    bodyEl.innerHTML = newBodyHTML;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 默认语言
  let currentLang = localStorage.getItem("siteLang") || "en";

  // 加载 lang.json
  fetch('/lang.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
      // 更新UI
      updateLanguage(currentLang);
      // 更新博客正文(若当前是博客页)
      updateBlogPostLang(currentLang);

      const langToggleBtn = document.getElementById("lang-toggle-btn");
      if (langToggleBtn) {
        // 根据当前语言设置按钮初始文本
        langToggleBtn.textContent = (currentLang === "zh") ? "EN" : "中文";

        langToggleBtn.addEventListener("click", () => {
          currentLang = (currentLang === "zh") ? "en" : "zh";
          localStorage.setItem("siteLang", currentLang);

          // 切换UI
          updateLanguage(currentLang);
          // 切换博客正文
          updateBlogPostLang(currentLang);

          langToggleBtn.textContent = (currentLang === "zh") ? "EN" : "中文";
        });
      }
    })
    .catch(error => {
      console.error("无法加载语言文件:", error);
    });
});
