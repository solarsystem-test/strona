const mobileNav = document.querySelector('.nav_links');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
})
