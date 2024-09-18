$(function(){
    // header scroll 내려가면 fix
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
        }else{
            $('#header').removeClass('fix');
        }
    });

    // util icon hover 변경
    const hoverImg = [
        '/img/icon/icon-hover-login.svg',
        '/img/icon/icon-hover-join.svg',
        '/img/icon/icon-hover-mypage.svg',
    ];

    $('.util-list li a img').each(function(index, el) {
        const originalSrc = $(this).data('origin');
    
        $(this).on('mouseenter', function() {
            $(this).attr('src', hoverImg[index]);
        });
    
        $(this).on('mouseleave', function() {
            $(this).attr('src', originalSrc);
        });
    });
    
    // 검색 버튼 클릭 이벤트
    // $('.search-btn').on('click', function() {
    //     const $searchBox = $('.search-box');
    //     const $searchModal = $('.search-modal');

        // 검색 박스와 모달 표시/숨김 토글
    //     if ($searchBox.is(':visible')) {
    //         $searchBox.hide(); // 검색 박스 숨기기
    //         $searchModal.hide(); // 모달 숨기기
    //         $searchModal.css('pointer-events', 'none'); // 포인터 이벤트 비활성화
    //     } else {
    //         $searchBox.css('display', 'flex'); // flex로 변경
    //         $searchModal.css('display', 'block'); // block으로 변경
    //         $searchModal.css('pointer-events', 'auto'); // 포인터 이벤트 활성화
    //     }
    // });
    


    // top-btn top 가면 none
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#top-btn').addClass('show');
        }else{
            $('#top-btn').removeClass('show');
        }
    });

    // 이벤트
    $('#winner li .winner-item').on('click', function() {
        var $p = $(this).closest('li').find('p'); // 클릭한 .winner-item의 부모 li 안에 있는 p를 찾음
        $p.slideDown(500); // 해당 p를 슬라이드 다운
        $('#winner li .detail').not($p).slideUp(500); // 다른 p는 슬라이드 업
    });

    $('#winner li .detail').on('click', function() {
        $(this).slideUp(500); // p를 클릭하면 슬라이드 업
    });


    // 자주하는 질문
    $('#faq-page dl dt').on('click', function() {
        var $dd = $(this).next('dd'); // 현재 클릭한 dt의 다음 dd를 선택
        
        if ($dd.is(':visible')) {
            $dd.slideUp(500); // 이미 열려 있으면 닫기
            $(this).removeClass('active'); // active 클래스 제거
        } else {
            $('#faq-page dl dd').slideUp(500); // 다른 모든 dd를 슬라이드 업
            $('#faq-page dl dt').removeClass('active'); // 다른 dt의 active 클래스 제거
            $dd.slideDown(500); // 해당 dd를 슬라이드 다운
            $(this).addClass('active'); // active 클래스 추가
        }
    });
    $('#faq-page dl dd').on('click', function() {
        $(this).slideUp(500); // dd를 클릭하면 해당 dd를 슬라이드 업
        $(this).prev('dt').removeClass('active'); // 열려 있는 dt의 active 클래스 제거
    });
    
    // 공지사항
    $('#notice-page dl dt').on('click', function() {
        var $dd = $(this).next('dd'); // 현재 클릭한 dt의 다음 dd를 선택
        
        if ($dd.is(':visible')) {
            $dd.slideUp(500); // 이미 열려 있으면 닫기
        } else {
            $('#notice-page dl dd').slideUp(500); // 다른 모든 dd를 슬라이드 업
            $dd.slideDown(500); // 해당 dd를 슬라이드 다운
        }
    });
    $('#notice-page dl dd').on('click', function() {
        $(this).slideUp(500); // dd를 클릭하면 해당 dd를 슬라이드 업
    });


    
    // 1:1 문의
    $('#ask-page .toggle-btn').on('click', function() {
        var $content = $('#content-' + $(this).data('id'));
        $('#ask-page .ask-details').not($content).slideUp(500).removeClass('active');
        $content.slideToggle(500).toggleClass('active');
    });

    $('#ask-page .ask-details').on('click', function() {
        $(this).slideUp(500).removeClass('active');
    });


});

// 인기축제순위
// .first-list의 요소를 선택합니다.
const firstImgFile = document.querySelector('#winner .first-list .img-file img');
const firstImgText = document.querySelector('#winner .first-list .img-text');

// 아이콘 경로 정의
const icons = {
    name: '/img/icon/icon-tag.svg',
    date: '/img/icon/icon-date.svg',
    navi: '/img/icon/icon-navi.svg',
    time: '/img/icon/icon-time.svg',
    call: '/img/icon/icon-call.svg',
    goal: '/img/icon/icon-goal.svg'
};

// 축제 정보 배열
const festivalInfo = {
    'img-01': {
        image: '/img/winner/w-img-01.jpg',
        alt: '지리산피아골 단풍축제',
        details: [
            { label: '이름', value: '지리산피아골 단풍축제', icon: icons.name },
            { label: '날짜', value: '2024.11.04 ~ 2024.11.05', icon: icons.date },
            { label: '위치', value: '전남 구례군 토지면 내서리', icon: icons.navi },
            { label: '시간', value: '09:30 ~ 17:00', icon: icons.time },
            { label: '문의', value: '문화관광실 061-780-2255', icon: icons.call },
            { label: '주최', value: '지리산 피아골 단풍축제 추진 위원회', icon: icons.goal }
        ]
    },
    'img-02': {
        image: '/img/winner/w-img-02.jpg',
        alt: '고흥 유자축제',
        details: [
            { label: '이름', value: '고흥 유자축제', icon: icons.name },
            { label: '날짜', value: '2024.11.07 ~ 2024.11.10', icon: icons.date },
            { label: '위치', value: '전남 고흥군 풍양면 한동리 701-7', icon: icons.navi },
            { label: '시간', value: '10:00 ~ 18:00', icon: icons.time },
            { label: '문의', value: '061-830-5658', icon: icons.call },
            { label: '주최', value: '고흥군, 고흥군축제추진위원회', icon: icons.goal }
        ]
    },
    'img-03': {
        image: '/img/winner/w-img-03.jpg',
        alt: '창덕궁 달빛기행',
        details: [
            { label: '이름', value: '창덕궁 달빛기행', icon: icons.name },
            { label: '날짜', value: '2024.09.12 ~ 2024.11.10', icon: icons.date },
            { label: '위치', value: '서울특별시 종로구 율곡로 99', icon: icons.navi },
            { label: '시간', value: '19:00 ~ 20:10', icon: icons.time },
            { label: '문의', value: '국가유산진흥원 고객센터 1522-2295', icon: icons.call },
            { label: '주최', value: '국가유산청 궁능유적본부, 국가유산진흥원', icon: icons.goal }
        ]
    },
    'img-04': {
        image: '/img/winner/w-img-04.jpg',
        alt: '정약용 문화제',
        details: [
            { label: '이름', value: '정약용 문화제', icon: icons.name },
            { label: '날짜', value: '2024.10.11 ~ 2024.10.12', icon: icons.date },
            { label: '위치', value: '남양주시 조안면 다산로747번길 11', icon: icons.navi },
            { label: '시간', value: '09:30 ~ 17:00', icon: icons.time },
            { label: '문의', value: '추진위원회 031-590-8842', icon: icons.call },
            { label: '주최', value: '남양주시', icon: icons.goal }
        ]
    }
};

// 클릭 이벤트 핸들러 함수
function handleImageClick(event) {
    event.preventDefault(); // 링크 클릭 시 기본 동작 방지

    const clickedItem = event.currentTarget; // 클릭한 요소
    const imgClass = clickedItem.classList[0]; // 클릭한 이미지의 클래스
    const imgSrc = clickedItem.querySelector('img').src; // 클릭한 이미지의 src
    const imgAlt = clickedItem.querySelector('img').alt; // 클릭한 이미지의 alt

    // .first-list의 이미지와 alt 텍스트 업데이트
    firstImgFile.src = imgSrc;
    firstImgFile.alt = imgAlt;

    // .first-list의 img-text 업데이트
    if (festivalInfo[imgClass]) {
        let newHtml = '';
        for (const detail of festivalInfo[imgClass].details) {
            newHtml += `<li><a href="#"><img src="${detail.icon}" alt="${detail.label} 아이콘"><span>${detail.label}</span><span>${detail.value}</span></a></li>`;
        }
        firstImgText.innerHTML = newHtml;
    }
}

// .second-list의 각 요소에 클릭 이벤트 리스너 추가
const secondListItems = document.querySelectorAll('#winner .second-list > li');
secondListItems.forEach(item => item.addEventListener('click', handleImageClick));



// main.js는 팝업이나 이런애들 들어감
// 플러그인.js는 따로 만들어야 함



// 검색창 모달
document.querySelector('.search-btn').addEventListener('click', function(event) {
    event.preventDefault(); // 링크 기본 동작 방지
    const searchBox = document.querySelector('.search-box');
    const searchModalBg = document.querySelector('.search-modal');
    const searchIcon = document.querySelector('.search-icon');

    // 검색 박스가 보이지 않으면 나타나게 하고, 그렇지 않으면 숨기기
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'flex';
        searchModalBg.style.display = 'block';
        // 아이콘 변경
        searchIcon.src = '/img/icon/icon-close.svg';  // 변경할 이미지 경로
    } else {
        searchBox.style.display = 'none';
        searchModalBg.style.display = 'none';
        // 아이콘 원래대로 복구
        searchIcon.src = '/img/icon/icon-search.svg';
    }
});

// searchModalBg 클릭 시 동작을 하지 않도록 설정
document.querySelector('.search-modal').addEventListener('click', function(event) {
    // 아무 동작도 하지 않도록 유지
});
