// swipper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    grabCursor: true,
    speed: 400,
    autoplay: {
        delay: 5000,
    },

    // Responsive breakpoints
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 18
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
            spaceBetween: 24
        }
    },

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});