document.addEventListener('DOMContentLoaded', function() {
    // 这里初始化 Swiper
    // 需确保在页面里已经加载过 https://unpkg.com/swiper/swiper-bundle.min.js
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,              // 轮播间隔 3 秒
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 其他可根据需要进行自定义
    });
  });
  