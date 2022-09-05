import { Swiper, Navigation, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination]);

export default function productsSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-products-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
            
        });
    });
}
