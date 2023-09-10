new Swiper('.sliders-content', {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,

    loopedSlides: 2,

    slideToClickedSlide: true,

    navigation: {
        nextEl: '.auto-slider__next',
        prevEl: '.auto-slider__prev'
    },
});