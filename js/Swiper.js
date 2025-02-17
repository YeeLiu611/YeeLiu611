document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: { delay: 5000 },  // 每 5 秒切换一次
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });