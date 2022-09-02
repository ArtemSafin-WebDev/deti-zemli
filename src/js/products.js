export default function products() {
    const elements = Array.from(document.querySelectorAll('.js-products'));

    elements.forEach(element => {
        const toggle = element.querySelector('.products__toggle');

        toggle.addEventListener('click', event => {
            event.preventDefault();
            toggle.classList.toggle('active');

            element.classList.toggle('mode-switched')
        })
    })
}