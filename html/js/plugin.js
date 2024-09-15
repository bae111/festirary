// 플러그인 js
// var 스와이퍼01로 바꾸고 클래스 앞에 아이디 줘서 각각 다른객체라고 인식시키기
// 메인배너 슬라이드
var main_swiper = new Swiper("#main-banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnlnteraction: false,
    // },
    pagination: {
        el: "#main-banner-swiper .swiper-pagination",
        clickable: true,
    },
    
});

// 맞춤형축제 슬라이드
$(function(){
    $('.customize-list').slick({
        dots: false,
        infinite: true,
        speed: 0, //ms
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: $('.prev-arr'), //이전 화살표만 변경
        nextArrow: $('.next-arr'), //다음 화살표만 변경
    });

});

// 이벤트 슬라이드
var event_swiper = new Swiper("#event-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: "#event-swiper .swiper-pagination",
        clickable: true,
    },
});

// 후원사 슬라이드
var partner_swiper = new Swiper("#partner-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 1000,
    //     disableOnlnteraction: false,
    // },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});