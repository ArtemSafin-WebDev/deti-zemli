import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newsSlider from './newsSlider';
import products from './products';
import newsBlockSlider from './newsBlockSlider';
import productsSlider from './productsSlider';
import clientHeight from './clientHeight.';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();
    newsSlider();
    products();
    newsBlockSlider();
    productsSlider();
    clientHeight();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
