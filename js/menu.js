document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");
  
    if (hamburgerBtn && navLinks) {
      hamburgerBtn.addEventListener("click", () => {
        // 如果导航菜单已显示，则隐藏；否则显示
        if (navLinks.style.display === "block") {
          navLinks.style.display = "none";
        } else {
          navLinks.style.display = "block";
        }
      });
    }
  });