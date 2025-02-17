// lang.js

// 1. 定义所有要翻译的文字（按照 data-key 匹配）
//   key: {
//       zh: "中文翻译",
//       en: "English translation"
//   }
const translations = {
    "title_index": {
      "zh": "亚洲人本学院 | The Person Centered Institute of Asia",
      "en": "Person Centered Institute of Asia | Home"
    },
    "nav_institute_name": {
      "zh": "亚洲人本学院",
      "en": "PCIA"
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
      "zh": "我们的目标是为更多人提供优质学习环境，并与世界各地的专家学者共享研究与实践成果。",
      "en": "Our goal is to provide quality learning environments for more people, sharing research and practice with experts and scholars worldwide."
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
  
  // 2. 设置一个变量来存储当前语言（默认为 'zh' 或者 'en'）
  //    你也可以从 localStorage 中读取，记住上一次用户的选择
  let currentLang = "zh";
  
  // 3. 定义一个函数，用于根据当前语言更新页面上的文本
  function updateLanguage(lang) {
    // 获取页面上所有带有 data-key 的元素
    const elements = document.querySelectorAll("[data-key]");
  
    elements.forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
        // 如果是 <title> 标签或者其他特定情况，需要考虑 .textContent vs. .innerText
        // 一般 textContent 就足够了
      }
    });
  }
  
  // 4. 监听切换按钮事件
  document.addEventListener("DOMContentLoaded", () => {
    // 默认先初始化一次语言（如果要默认中文，可以在这里写成 updateLanguage('zh')）
    updateLanguage(currentLang);
  
    // 获取切换按钮
    const langToggleBtn = document.getElementById("lang-toggle-btn");
    if (langToggleBtn) {
      langToggleBtn.addEventListener("click", () => {
        // 切换当前语言
        currentLang = currentLang === "zh" ? "en" : "zh";
        updateLanguage(currentLang);
        // 顺便更新按钮上的文字，比如如果切换到英文，就显示 "中"
        langToggleBtn.textContent = currentLang === "zh" ? "EN" : "中";
      });
    }
  });