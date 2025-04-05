const wrapper = document.querySelector('.dropdown-wrapper');
const dropdown = wrapper.querySelector('.dropdown');
const menu = wrapper.querySelector('.dropdown-menu');
const items = wrapper.querySelectorAll('.dropdown-menu-item-text');

dropdown.addEventListener('click', () => {
    const isActive = wrapper.classList.toggle('active');

    dropdown.setAttribute('aria-expanded', isActive);
    menu.setAttribute('aria-hidden', !isActive);
    items.forEach(item => item.setAttribute('tabindex', isActive ? '0' : '-1'));
});
