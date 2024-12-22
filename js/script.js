$('.carousel-slide').slick({
    centerMode: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});


//карточки партнеров
const partner = document.getElementsByClassName('partner-item');
for (let i = 0; i < partner.length; i++) {
    partner[i].onclick = function () {
        let popup = partner[i].nextElementSibling;
        if (popup && popup.classList.contains('partner-item-popUp')) {
            popup.style.display = 'flex';
        }
    }
}
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-close')) {
        e.target.closest('.partner-item-popUp').style.display = 'none';
    }
});

//КНОПКА МЕНЮ
let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('close-menu');
burger.onclick = function () {
    menu.style.display = 'flex';
}
closeMenu.onclick = function () {
    menu.style.display = 'none';
}
// Закрытие меню при клике на ссылки
let menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.onclick = function () {
        if (window.innerWidth <= 756) { // Проверяем ширину окна
            menu.style.display = 'none';
        }
    }
});