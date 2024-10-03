$(function(){
    // ---header scroll 내려가면 fix---
    // ---top-btn 스크롤 내리면 show---
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
            $('#m-header').addClass('fix');
            $('#top-btn').addClass('show');
        }else{
            $('#header').removeClass('fix');
            $('#m-header').removeClass('fix');
            $('#top-btn').removeClass('show');
        }
    });
    $(window).on('resize', function() {
        // 필요에 따라 헤더의 상태를 재조정
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('fix');
        } else {
            $('#header').removeClass('fix');
        }
    });



    $('.nav-btn').on('click', function(){
        $(this).toggleClass('slideOn');
    });

    // ---util icon hover 변경---
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

    // ---이벤트---
    $('#winner li .winner-item').on('click', function(e) {
        e.preventDefault(); // 링크 기본 동작 방지
        var $p = $(this).closest('li').find('.detail'); // 클릭한 .winner-item의 부모 li 안에 있는 p를 찾음
    
        if ($p.is(':visible')) {
            $p.slideUp(500); // 이미 열려 있으면 닫기
        } else {
            $('#winner li .detail').slideUp(500); // 다른 모든 p는 슬라이드 업
            $p.slideDown(500); // 해당 p는 슬라이드 다운
        }
    });
    // p 태그 클릭 시 닫기
    $('#winner li .detail').on('click', function() {
        $(this).slideUp(500); // p를 클릭하면 해당 p를 슬라이드 업
    });

    // ---자주하는 질문---
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
    
    // ---공지사항---
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


    
    // ---1:1 문의---
    $('#ask-page .toggle-btn').on('click', function() {
        var $content = $('#content-' + $(this).data('id'));
        $('#ask-page .details').not($content).slideUp(500).removeClass('active');
        $content.slideToggle(500).toggleClass('active');
    });

    $('#ask-page .details').on('click', function() {
        $(this).slideUp(500).removeClass('active');
    });
    // ---자유게시판---
    $('#free-page .toggle-btn').on('click', function() {
        var $content = $('#content-' + $(this).data('id'));
        $('#free-page .details').not($content).slideUp(500).removeClass('active');
        $content.slideToggle(500).toggleClass('active');
    });

    $('#free-page .details').on('click', function() {
        $(this).slideUp(500).removeClass('active');
    });

    // --- 자주하는질문 누르면 해당 탭으로 이동 ---
    var hash = window.location.hash;
    if (hash) {
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('a[href="' + hash + '"]').addClass('active');
        $(hash).addClass('show active');
    }   
});

// ---인기축제순위---
// 축제 데이터
const festivalData2 = {
    'img-01': {
        image: '/img/winner/w-img-01.jpg',
        alt: '태백산 눈축제',
        name: '태백산 눈축제',
        date: '2025.01.26 ~ 2025.02.04',
        navi: '강원 태백시 소도동 180'
    },
    'img-02': {
        image: '/img/winner/w-img-02.jpg',
        alt: '양주 눈꽃축제',
        name: '양주 눈꽃축제',
        date: '2024.12.29 ~ 2025.02.18',
        navi: '경기 양주시 장흥면 권율로 594'
    },
    'img-03': {
        image: '/img/winner/w-img-03.jpg',
        alt: '제주감귤박람회',
        name: '제주감귤박람회',
        date: '2024.11.13 ~ 2024.11.19',
        navi: '제주 서귀포시 납원읍 중산간동로 7413'
    },
    'img-04': {
        image: '/img/winner/w-img-04.jpg',
        alt: '영양꽁꽁축제',
        name: '영양꽁꽁축제',
        date: '2025.01.05 ~ 2025.01.28',
        navi: '경북 영양군 영양읍 현리 670'
    }
};


// 클릭 이벤트 등록
document.querySelectorAll('.second-list li').forEach(item => {
    item.addEventListener('click', () => {
        const className = item.className; // img-01, img-02 등
        const festival = festivalData2[className];

        if (festival) {
            // 이미지 변경
            const mainImage = document.querySelector('.first-list .img-file img');
            mainImage.src = festival.image;
            mainImage.alt = festival.alt;

            // 텍스트 박스 선택
            const imgText = document.querySelector('.img-text');

            // 애니메이션 초기화
            imgText.classList.remove('show'); // 텍스트 박스 숨기기

            // 일정 시간 후에 텍스트 업데이트 및 애니메이션 시작
            setTimeout(() => {
            // 텍스트 업데이트
                imgText.querySelector('.name').textContent = festival.name;
                imgText.querySelector('.date').textContent = festival.date;
                imgText.querySelector('.navi').textContent = festival.navi
            
                imgText.classList.add('show'); // 텍스트 박스 보이기
            }, 500); // 500ms 후에 텍스트 업데이트 및 보이기
        }
    });
});

// 초기 텍스트 박스 보이기
const imgText = document.querySelector('.img-text');
imgText.classList.add('show'); // 첫 번째 텍스트 박스 표시

// ---팝업창---
// 검색창 모달
document.querySelector('.search-btn').addEventListener('click', function(event) {
    event.preventDefault(); // 링크 기본 동작 방지
    const searchBox = document.querySelector('.search-box');
    const searchModalBg = document.querySelector('.search-modal');
    const searchIcon = document.querySelector('.search-icon');

    // 검색 박스가 보이지 않으면 나타나게 하고, 그렇지 않으면 숨기기
    if (!searchBox.classList.contains('active')) {
        // 검색 박스와 모달을 활성화
        searchBox.classList.add('active');
        searchModalBg.classList.add('active');
        searchIcon.src = '/img/icon/icon-close.svg'; // 변경할 이미지 경로
        searchBox.style.visibility = 'visible'; // 보이도록 설정
        searchModalBg.style.visibility = 'visible'; // 모달 배경도 보이도록 설정
    } else {
        // 검색 박스를 숨기고 모달 배경을 숨깁니다.
        searchBox.classList.remove('active');
        searchIcon.src = '/img/icon/icon-search.svg'; // 아이콘 원래대로 복구
        

        // 애니메이션 후에 visibility 변경
        setTimeout(() => {
            searchBox.style.visibility = 'hidden'; // 숨김 처리
        }, 400); // search-box의 opacity transition 시간에 맞춤

        setTimeout(() => {
            searchModalBg.classList.remove('active'); // 모달 배경 비활성화
            searchModalBg.style.visibility = 'hidden'; // 모달 배경 숨김 처리
        }, 100); // search-box의 opacity transition 시간에 맞춤
    }
});

// searchModalBg 클릭 시 동작을 하지 않도록 설정
document.querySelector('.search-modal').addEventListener('click', function(event) {
// 아무 동작도 하지 않도록 유지
});


// main.js는 팝업이나 이런애들 들어감
// 플러그인.js는 따로 만들어야 함



