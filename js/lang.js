// 定义所有需要翻译的文字，注意 key 名称与 index.html 中 data-key 值保持一致
const translations = {
    "title_index": {
      "zh": "亚洲人本学院 | The Person Centered Institute of Asia",
      "en": "Person Centered Institute of Asia | Home"
    },
    "nav_institute_name": {
      "zh": "亚洲人本学院",
      "en": "The Person Centered Institute of Asia"
    },
    "nav_home": {
      "zh": "首页",
      "en": "Home"
    },
    "nav_about": {
      "zh": "关于我们",
      "en": "About"
    },
    "nav_programs": {
      "zh": "项目",
      "en": "Programs"
    },
    "nav_contact": {
      "zh": "联系我们",
      "en": "Contact"
    },
    "hero_title": {
      "zh": "欢迎来到亚洲人本学院",
      "en": "Welcome to the Person Centered Institute of Asia"
    },
    "hero_subtitle": {
      "zh": "通过以人为本的教育与创新来助力成长。",
      "en": "Empowering growth through person-centered education and innovation."
    },
    "hero_btn": {
      "zh": "了解更多",
      "en": "Learn More"
    },
    "intro_title": {
      "zh": "我们的使命",
      "en": "Our Mission"
    },
    "intro_text1": {
      "zh": "我们致力于通过人本主义教育理念，帮助个人和组织挖掘潜力、促进成长，构建以关怀、尊重、理解为核心的亚洲人本教育社区。",
      "en": "We are committed to person-centered education, helping individuals and organizations unlock potential and foster growth, building an Asian educational community rooted in care, respect, and understanding."
    },
    "intro_text2": {
      "zh": "Our mission is to foster personal and organizational potential through person-centered education, building an Asian educational community based on empathy, respect, and understanding.",
      "en": "Our mission is to foster personal and organizational potential through person-centered education, building an Asian educational community based on empathy, respect, and understanding."
    },
    "features_title": {
      "zh": "我们的主要项目",
      "en": "Our Main Programs"
    },
    "feature_item1_title": {
      "zh": "人本教育培训",
      "en": "Person-Centered Education Training"
    },
    "feature_item1_desc": {
      "zh": "深入学习人本主义理论与实践，为教育工作者、心理咨询师、组织管理者等提供高质量培训。",
      "en": "An in-depth exploration of person-centered theory and practice, offering high-quality training for educators, counselors, and organizational leaders."
    },
    "feature_item2_title": {
      "zh": "国际研讨会与论坛",
      "en": "International Seminars & Forums"
    },
    "feature_item2_desc": {
      "zh": "定期举办国际研讨会与交流活动，与世界各地的专家学者分享研究与实践成果。",
      "en": "Regularly hosting international conferences and exchange events, sharing research and practice with experts worldwide."
    },
    "feature_item3_title": {
      "zh": "线上资源与课程",
      "en": "Online Resources & Courses"
    },
    "feature_item3_desc": {
      "zh": "为学员提供多样化的线上学习资源与互动课程，灵活安排时间与地点。",
      "en": "Providing diverse online learning resources and interactive courses for flexible scheduling."
    },
    "features_btn": {
      "zh": "查看所有项目",
      "en": "View All Programs"
    },
    "footer_copyright": {
      "zh": "© 2025 亚洲人本学院 (The Person Centered Institute of Asia). All rights reserved.",
      "en": "© 2025 The Person Centered Institute of Asia. All rights reserved."
    }
  };
  
  // 设置默认语言为中文（"zh"），你也可以改为 "en"
  let currentLang = "zh";
  
  // 根据当前语言更新页面中所有带 data-key 的元素的内容
  function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });
  }
  
  // 等待页面 DOM 加载完成后再执行
  document.addEventListener("DOMContentLoaded", () => {
    // 初始化页面语言
    updateLanguage(currentLang);
  
    // 找到语言切换按钮并添加点击事件
    const langToggleBtn = document.getElementById("lang-toggle-btn");
    if (langToggleBtn) {
      langToggleBtn.addEventListener("click", () => {
        // 切换语言：如果当前为中文，则切换为英文；反之亦然
        currentLang = currentLang === "zh" ? "en" : "zh";
        updateLanguage(currentLang);
        // 同时更新按钮文字：当前为中文时，按钮显示 "EN"，当前为英文时，按钮显示 "中"
        langToggleBtn.textContent = currentLang === "zh" ? "EN" : "中";
      });
    }
  });

  /* 为语言切换按钮添加样式 */
const style = document.createElement('style');
style.innerHTML = `
.btn-lang {
    margin-left: 20px;        /* 与其他元素有一定间距 */
    padding: 0.5em 1em;         /* 内边距 */
    border: none;
    border-radius: 4px;
    background-color: var(--color-primary); /* 使用你主题的主色调 */
    color: var(--color-light);              /* 白色文字 */
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  .btn-lang:hover {
    background-color: var(--color-secondary); /* 悬停时换成次要色调 */
  }
`;
document.head.appendChild(style);