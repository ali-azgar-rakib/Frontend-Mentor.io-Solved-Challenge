const hamburgerBtn = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const items = document.querySelectorAll('.hamburger-item');


hamburgerBtn.onclick = () => {


    let index = 1;
    for (let item of items) {
        item.classList.toggle('hamburger-item-' + index);
        index++;
    }
    mobileNav.classList.toggle('active');
}