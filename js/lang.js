// js/lang.js

// 全局字典，用于存放从 lang.json 加载的UI文本
let translations = {};

/**
 * 切换 [data-key] 的元素，用于UI文案（从 lang.json 读取）
 * @param {String} lang  'zh' or 'en'
 */
function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    // 如果 lang.json 中有这个 key
    if (translations[key] && translations[key][lang]) {
      const text = translations[key][lang];
      // 判断是否包含 '\n'，如果有，则渲染为多个 <p> 标签
      if (text.includes('\n')) {
        const paragraphs = text
          .split('\n')
          .map((paragraph) => {
            // 检查是否为空字符串，避免渲染空段落
            return paragraph.trim() ? `<p>${paragraph.trim()}</p>` : '';
          })
          .join('');
        el.innerHTML = paragraphs;
      } else {
        // 如果没有 \n，保持原本的 textContent
        el.textContent = text;
      }
    }
  });
}

/**
 * 切换 博客正文 (如果有需要在博客内容页进行切换)
 * @param {String} lang
 */
function updateBlogPostLang(lang) {
  // 如果需要对文章正文也做多语言切换，可以在此实现
  // 例如：根据类名或 data 属性，切换正文中某些段落
  // 这里先留空或简单演示
  const postElements = document.querySelectorAll(".post-content [data-key]");
  postElements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
}

/**
 * 切换 博客列表页面(blog.md) 中的文章链接标题
 * 依赖 a.post-link 的 data-zh/data-en 属性
 * @param {String} lang
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