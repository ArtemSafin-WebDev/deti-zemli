import { Swiper, Navigation, Pagination } from 'swiper';


Swiper.use([Navigation, Pagination]);

export default function newsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-news-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.news-slider__arrow--next'),
                prevEl: element.querySelector('.news-slider__arrow--prev')
            },
            pagination: {
                el: element.querySelector('.news-slider__pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}