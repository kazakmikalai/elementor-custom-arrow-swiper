document.addEventListener("DOMContentLoaded", function () {

  // Список всех свайперов и соответствующих контейнеров для стрелок
  const sliders = [
    { id: "#loop-gallery",          arrows: ".swiper-gallery" },
  ];

  sliders.forEach(({ id, arrows }) => {
    const wait = setInterval(() => {
      const el = document.querySelector(`${id} .swiper`);
      if (!el || !el.swiper) return;

      clearInterval(wait);
      const swiper = el.swiper;

      document.addEventListener("click", (e) => {
        const nextBtn = e.target.closest(`${arrows} .arrow-right`);
        const prevBtn = e.target.closest(`${arrows} .arrow-left`);
        if (!nextBtn && !prevBtn) return;

        e.preventDefault();
        e.stopPropagation();

        if (nextBtn) swiper.slideNext();
        if (prevBtn) swiper.slidePrev();
      });
    }, 200);

    setTimeout(() => clearInterval(wait), 10000);
  });

});  