const vidio = document.querySelector('.vidio-background')

const swiperText = new  Swiper('.swiper', {
    speed: 1600,
    mousewheel: {  },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
});
swiperText.on('slideChange', function() {
    gsap.to(vidio, 1.6, {
        currentTime: (vidio.duration / (this.slides.length - 1)) * this.realIndex,
        ease: Power2.easeOut
    })
});
swiperText.on('slideChangeTransitionStart', function () {
    vidio.classList.add('change')
}).on('slideChangeTransitionEnd', function() {
    vidio.classList.remove('change')
});
