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
// 맞춤형축제
const festivalData = [
    {
        imgSrc: '/img/customize/c-img-01.jpg',
        name: '2024 섬 겨울꽃 축제',
        address: '전남 신안군 압해읍 무지개길 330',
        date: '2024.12.06 ~ 2025.01.01',
        detail: '압해도에 있는 천사섬분재정원이며 이곳에 있는 애기동백숲에서 약 20,000그루의 애기동백꽃을 12월부터 이듬해 2월까지 감상할 수 있습니다. 또한 이번 축제에서는 오전에 인공눈으로 만들어진 눈길 위의 애기동백숲 걷기 체험, 2025년 크로코스미아축제 때 배달되는 느린 우체통 체험, 동백꽃으로 조성해놓은 예쁜 포토존 등이 있습니다. 1004번째, 2004번째, 10004번째 입장객에게는 기념품을 선물하는 입장객 이벤트도 진행합니다.'
    },
    {
        imgSrc: '/img/customize/c-img-02.jpg',
        name: '겨울엔 양평 축제',
        address: '경기 양평군 양평읍 물안개공원길 38',
        date: '2024.12.01 ~ 2025.01.31',
        detail: '다양한 겨울 스포츠와 문화 체험을 즐길 수 있는 행사입니다. 눈썰매, 얼음 낚시, 눈 조각 전시 등 가족 단위로 참여할 수 있는 프로그램이 마련되어 있어, 방문객들에게 겨울의 즐거움을 선사합니다. 지역 특산물 판매와 공연 등도 함께 진행되어, 양평의 아름다운 자연 속에서 특별한 겨울을 만끽할 수 있는 기회를 제공합니다.'
    },
    {
        imgSrc: '/img/customize/c-img-03.jpg',
        name: '지리산바래봉 겨울축제',
        address: '전북 남원시 운봉읍 바래봉길 214',
        date: '2025.01.10 ~ 2025.02.25',
        detail: '지리산의 아름다운 자연을 배경으로 다양한 겨울 체험과 문화 프로그램이 진행됩니다. 눈꽃 트레킹, 얼음 낚시, 지역 특산물 장터 등 다양한 활동이 마련되어 있어 가족과 함께 즐길 수 있는 기회입니다. 또한, 지역 예술가들의 공연과 전통문화 체험도 포함되어 있어, 겨울의 낭만을 만끽하며 지리산의 매력을 느낄 수 있는 축제입니다.'
    },
    {
        imgSrc: '/img/customize/c-img-04.jpg',
        name: '백운계곡 동장군 축제',
        address: '경기 포천시 이동면 포화로 236-11',
        date: '2024.12.22 ~ 2025.02.12',
        detail: '얼음 조각 전시, 눈썰매, 얼음 낚시 등 다양한 겨울 스포츠와 체험 프로그램을 제공합니다. 방문객들은 아름다운 겨울 풍경 속에서 다양한 활동을 즐기며, 지역 특산물을 맛보고 구매할 수 있는 기회도 있습니다. 축제 기간 동안 지역 예술가들의 공연과 전통 문화 체험도 마련되어 있어, 가족 단위 방문객들에게 즐거운 시간을 선사합니다.'
    },
    {
        imgSrc: '/img/customize/c-img-05.jpg',
        name: '화천 산천어축제',
        address: '강원 화천군 화천읍 산천어길 137',
        date: '2025.01.11 ~ 2025.02.02',
        detail: '얼음 위에 마련된 낚시 구멍에서 산천어를 잡는 체험은 물론, 얼음 썰매, 눈 조각 전시, 먹거리 장터 등 여러 즐길 거리가 마련되어 있습니다. 축제 기간 동안 지역 특산물과 다양한 음식도 판매되어, 방문객들에게 풍성한 겨울 경험을 제공합니다. 아름다운 겨울 풍경 속에서 가족과 친구들과 함께 즐거운 시간을 보낼 수 있는 행사입니다.'
    },
];
$('.customize-list').slick({
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 0,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('.prev-arr'),
    nextArrow: $('.next-arr'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                speed: 400
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                speed: 400
            }
        }
    ]
}).on('afterChange', function(event, slick, currentSlide) {
    const festival = festivalData[currentSlide];

    $('.customize-text img').attr('src', festival.imgSrc);
    $('.festi-name').html(`<storg>#</storg>${festival.name}`);
    $('.festi-address').text(festival.address);
    $('.festi-date').text(festival.date);
    $('.festi-detail').text(festival.detail);
});

// 좋아요 버튼 클릭 이벤트
$('.fav-btn').on('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    const $this = $(this);
    const $defaultIcon = $this.find('.default-icon');
    const $filledIcon = $this.find('.filled-icon');

    // 아이콘 전환
    if ($defaultIcon.is(':visible')) {
        $defaultIcon.hide();
        $filledIcon.show();
    } else {
        $defaultIcon.show();
        $filledIcon.hide();
    }
});

// 초기 내용 설정
$('.customize-text img').attr('src', festivalData[0].imgSrc);
$('.festi-name').html(`<storg>#</storg>${festivalData[0].name}`);
$('.festi-address').text(festivalData[0].address);
$('.festi-date').text(festivalData[0].date);
$('.festi-detail').text(festivalData[0].detail);



// 이벤트 슬라이드
var event_swiper = new Swiper("#event-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    // breakpoints: {
    // 375: {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    // },
    // 580: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    // },
    // 990: {
    //     slidesPerView: 2,
    //     spaceBetween: 35,
    //     },
    // 1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //     }
    // }
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
        580: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        990: {
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
        580: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        990: {
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
