$('.carousel-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
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