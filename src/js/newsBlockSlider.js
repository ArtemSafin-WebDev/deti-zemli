import { Swiper, Navigation, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination]);

export default function newsBlockSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-news-block-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
            
        });
    });
}
