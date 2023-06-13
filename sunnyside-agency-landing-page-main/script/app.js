const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mobileNav = document.querySelector('#mobileNav');
console.log(hamburgerBtn, mobileNav);

const item1 = document.querySelector('#id_1');
const item2 = document.querySelector('#id_2');
const item3 = document.querySelector('#id_3');

hamburgerBtn.onclick = () => {
    console.log('hello');
    item1.classList.toggle('item-1');
    item2.classList.toggle('item-2');
    item3.classList.toggle('item-3');
    mobileNav.classList.toggle('mobile-nav-active');
}