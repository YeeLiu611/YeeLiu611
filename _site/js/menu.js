document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");
  
    if (hamburgerBtn && navLinks) {
      hamburgerBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });

  // 滑动自动隐藏/显示 header
let lastScroll = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  // 当向下滚动且滚动位置超过一定值时隐藏 header
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScroll = currentScroll;
});