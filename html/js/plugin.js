// 플러그인 js
// var 스와이퍼01로 바꾸고 클래스 앞에 아이디 줘서 각각 다른객체라고 인식시키기
// 메인배너 슬라이드
var main_swiper = new Swiper("#main-banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnlnteraction: false,
    },
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
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});
// 이벤트 슬라이드 hover 멈춤
$("#event-swiper").each(function() {
    var swp = this.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
});

// 후원사 슬라이드
var partner_swiper_1 = new Swiper("#partner-swiper-1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    }
});

var partner_swiper_2 = new Swiper("#partner-swiper-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    }
});


// 서브페이지
// 이벤트
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.pagination').addEventListener('click', (event) => {
        if (event.target.matches('.page-link')) {
            event.preventDefault(); // 링크의 기본 동작 방지
            
            // 현재 활성화된 페이지 링크의 부모 요소에서 'active' 클래스 제거
            document.querySelector('.page-item.active')?.classList.remove('active');
            
            // 클릭된 페이지 링크의 부모 요소에 'active' 클래스 추가
            event.target.parentElement.classList.add('active');
        }
    });
});