// js/lang.js

// 全局字典，用于存放从 lang.json 加载的 UI 文案
let translations = {};

/**
 * 切换 [data-key] 的元素，用于 UI 文案（从 lang.json 读取）
 * @param {String} lang  'zh' 或 'en'
 */
function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[key] && translations[key][lang]) {
      const text = translations[key][lang];
      if (text.includes('\n')) {
        const paragraphs = text
          .split('\n')
          .map((paragraph) => paragraph.trim() ? `<p>${paragraph.trim()}</p>` : '')
          .join('');
        el.innerHTML = paragraphs;
      } else {
        el.textContent = text;
      }
    }
  });
}

/**
 * 切换博客文章页面中的标题和正文
 * 该函数直接根据文章模板中 data-zh/data-en 属性进行更新
 * @param {String} lang 'zh' 或 'en'
 */
function updateBlogPostLang(lang) {
  // 更新文章标题
  const postTitle = document.querySelector(".post-title");
  if (postTitle && postTitle.dataset[lang]) {
    postTitle.textContent = postTitle.dataset[lang];
  }
  
  // 更新文章正文
  const postBody = document.querySelector(".post-body");
  if (postBody && postBody.dataset[lang]) {
    // 如果需要保留 markdown 渲染效果，可用 innerHTML 更新
    postBody.innerHTML = postBody.dataset[lang];
  }
}

/**
 * 切换博客列表页面 (blog.md) 中的文章链接标题
 * 依赖 a.post-link 的 data-zh/data-en 属性
 * @param {String} lang 'zh' 或 'en'
 */
function updateBlogListLang(lang) {
  const links = document.querySelectorAll(".post-link");
  links.forEach((link) => {
    const text = link.dataset[lang];
    if (text !== undefined) {
      link.textContent = text;
    }
  });
}

// 在 DOM 加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 优先从 localStorage 获取当前语言，默认为 'en'
  let currentLang = localStorage.getItem("siteLang") || "en";

  // 加载 lang.json 文件
  fetch('/lang.json')
    .then(response => response.json())
    .then(data => {
      translations = data;

      // 1) 更新 UI 文案（data-key 元素）
      updateLanguage(currentLang);
      // 2) 如果在博客文章页，则更新标题和正文
      updateBlogPostLang(currentLang);
      // 3) 如果在博客列表页，则更新文章链接标题
      updateBlogListLang(currentLang);

      // 语言切换按钮逻辑
      const langToggleBtn = document.getElementById("lang-toggle-btn");
      if (langToggleBtn) {
        langToggleBtn.textContent = (currentLang === "zh") ? "EN" : "中文";
        langToggleBtn.addEventListener("click", () => {
          currentLang = (currentLang === "zh") ? "en" : "zh";
          localStorage.setItem("siteLang", currentLang);
          updateLanguage(currentLang);
          updateBlogPostLang(currentLang);
          updateBlogListLang(currentLang);
          langToggleBtn.textContent = (currentLang === "zh") ? "EN" : "中文";
        });
      }
    })
    .catch(error => {
      console.error("无法加载语言文件:", error);
    });
});
