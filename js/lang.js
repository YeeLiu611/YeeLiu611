// js/lang.js

// 全局字典，用于存放从 lang.json 加载的UI文本
let translations = {};

/**
 * 切换 [data-key] 的元素，用于UI文案（从 lang.json 读取）
 * @param {String} lang  'zh' or 'en'
 */


/**
 * 切换 单篇博客文章 (post.html) 中的标题、正文
 * 依赖 .post-title、.post-body 的 data-zh/data-en 属性
 * @param {String} lang
 */
function updateBlogPostLang(lang) {
  const titleEl = document.querySelector(".post-title");
  const bodyEl = document.querySelector(".post-body");
  // 如果不是博客文章页面，就没有这些元素
  if (!titleEl || !bodyEl) return;

  // 标题
  const newTitle = titleEl.dataset[lang];
  if (newTitle !== undefined) {
    titleEl.textContent = newTitle;
  }

  // 正文: data-zh / data-en
  const newBodyHTML = bodyEl.dataset[lang];
  if (newBodyHTML !== undefined) {
    // 这里直接替换 innerHTML
    bodyEl.innerHTML = newBodyHTML;
  }
}

/**
 * 切换 博客列表页面(blog.md) 中的文章链接标题
 * 依赖 a.post-link 的 data-zh/data-en 属性
 * @param {String} lang
 */
function updateBlogListLang(lang) {
  const links = document.querySelectorAll(".post-link");
  links.forEach(link => {
    const text = link.dataset[lang];
    if (text !== undefined) {
      link.textContent = text;
    }
  });
}

// 在DOM加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 优先从 localStorage 获取当前语言，默认 'en'
  let currentLang = localStorage.getItem("siteLang") || "en";

  // 加载 lang.json 文件
  fetch('/lang.json')
    .then(response => response.json())
    .then(data => {
      // 保存到全局 translations
      translations = data;

      // 1) 更新 UI 文案 (data-key)
      updateLanguage(currentLang);
      // 2) 若在单篇博客页面，切换正文
      updateBlogPostLang(currentLang);
      // 3) 若在博客列表页面，切换链接文字
      updateBlogListLang(currentLang);

      // 语言切换按钮
      const langToggleBtn = document.getElementById("lang-toggle-btn");
      if (langToggleBtn) {
        // 初始化按钮文字
        langToggleBtn.textContent = (currentLang === "zh") ? "EN" : "中文";

        langToggleBtn.addEventListener("click", () => {
          // 在中英文之间切换
          currentLang = (currentLang === "zh") ? "en" : "zh";
          localStorage.setItem("siteLang", currentLang);

          // 切换UI文案
          updateLanguage(currentLang);
          // 切换博客正文
          updateBlogPostLang(currentLang);
          // 切换博客列表
          updateBlogListLang(currentLang);

          // 更新按钮本身文字
          langToggleBtn.textContent = (currentLang === "zh") ? "EN" : "中文";
        });
      }
    })
    .catch(error => {
      console.error("无法加载语言文件:", error);
    });
});
