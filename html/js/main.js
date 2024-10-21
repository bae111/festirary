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

    // --- 후기, 서브 후기 1번째 텍스트 고정 ---
    const $items = $('.r-img');
    const $reviewTexts = $('.review-text');
    const $subReviewTexts = $('.sub');

    // 기본적으로 첫 번째 항목의 설명을 active로 설정
    $reviewTexts.eq(0).addClass('active').css('bottom', '100%');
    $subReviewTexts.eq(0).addClass('active').css('bottom', '-10px');

    $items.each(function() {
        const $item = $(this);
        const $itemText = $item.find('.review-text');
        const $subItemText = $item.find('.sub');

        $item.on('mouseenter', function() {
            // 모든 설명 숨기기
            $reviewTexts.removeClass('active').css('bottom', '-300%');
            $subReviewTexts.removeClass('active').css('bottom', '-200px');

            // 현재 항목의 설명 표시
            $itemText.addClass('active').css('bottom', '100%'); 
            $subItemText.addClass('active').css('bottom', '-10px'); 
        });

        $item.on('mouseleave', function() {
            // 모든 설명 숨기기
            $reviewTexts.removeClass('active').css('bottom', '-300%'); 
            $subReviewTexts.removeClass('active').css('bottom', '-200px');

            // 첫 번째 항목의 설명 다시 표시
            $reviewTexts.eq(0).addClass('active').css('bottom', '100%');
            $subReviewTexts.eq(0).addClass('active').css('bottom', '-10px');
        });
    });

    // 회원가입
    // 체크박스 전체 선택
    $(".checkbox-group").on("click", "#all-agree", function () {
        $(this).parents(".checkbox-group").find('input').prop("checked", $(this).is(":checked"));
    });

    // 체크박스 개별 선택
    $(".checkbox-group").on("click", ".normal", function () {
        const is_checked = true;

        $(".checkbox-group .normal").each(function () {
            is_checked = is_checked && $(this).is(":checked");
        });

        $("#all-agree").prop("checked", is_checked);
    });
        const now = new Date();
        const year = now.getFullYear();
        const mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        const day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
        //년도 selectbox만들기               
        for (let i = 1900; i <= year; i++) {
            $('#year').append('<option value="' + i + '">' + i + '</option>');
        }

        // 월별 selectbox 만들기            
        for (let i = 1; i <= 12; i++) {
            let mm = i > 9 ? i : "0" + i;
            $('#month').append('<option value="' + mm + '">' + mm + '</option>');
        }

        // 일별 selectbox 만들기
        for (let i = 1; i <= 31; i++) {
            let dd = i > 9 ? i : "0" + i;
            $('#day').append('<option value="' + dd + '">' + dd + '</option>');
        }
        $("#year  > option[value=" + year + "]").attr("selected", "true");
        $("#month  > option[value=" + mon + "]").attr("selected", "true");
        $("#day  > option[value=" + day + "]").attr("selected", "true");

});
// 모바일 menu
document.querySelectorAll('.depth-01 > li > a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 클릭 동작 방지
        e.stopPropagation(); // 이벤트 전파 방지
        
        const parentLi = this.parentElement;
        const isActive = parentLi.classList.contains('active');

        // 모든 메뉴의 active 클래스 제거
        document.querySelectorAll('.depth-01 > li').forEach(li => li.classList.remove('active'));

        // 클릭된 메뉴가 비활성 상태였다면 active 클래스 추가
        if (!isActive) {
            parentLi.classList.add('active');
        }
    });
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
    // 초기 텍스트 박스 보이기
    const imgText = document.querySelector('.img-text');
    imgText.classList.add('show'); // 첫 번째 텍스트 박스 표시
});

// ---팝업창---
// 검색창 모달
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search-btn').addEventListener('click', function() {
        const searchModal = document.querySelector('.search-box');
        const searchModalBg = document.querySelector('.search-modal');
        const searchIcon = document.querySelector('.search-icon');

        if (searchModal.classList.contains('active')) {
            // 팝업을 닫는 코드
            searchModal.style.opacity = '0';
            searchModal.style.transform = 'translateY(-2rem)';
            searchModalBg.style.opacity = '0'; // 배경 숨김
            searchIcon.src = '/img/icon/icon-search.svg'; // 검색 아이콘으로 변경
            setTimeout(() => {
                searchModal.classList.remove('active');
                searchModalBg.classList.remove('active');
                searchModal.style.visibility = 'hidden'; // 팝업 숨김
                searchModalBg.style.visibility = 'hidden'; // 배경 숨김
            }, 600);
        } else {
            // 팝업을 여는 코드
            searchModal.style.visibility = 'visible'; // 팝업 표시
            searchModalBg.style.visibility = 'visible'; // 배경 표시
            searchModal.classList.add('active');
            searchModalBg.classList.add('active');
            searchIcon.src = '/img/icon/icon-close.svg'; // 닫기 아이콘으로 변경
            setTimeout(() => {
                searchModal.style.opacity = '1';
                searchModal.style.transform = 'translateY(0)';
                searchModalBg.style.opacity = '1'; // 배경 표시
            }, 10);
        }
    });
});

// searchModalBg 클릭 시 동작을 하지 않도록 설정
document.querySelector('.search-modal').addEventListener('click', function(event) {
// 아무 동작도 하지 않도록 유지
});


// 축제검색
// 새로운 축제 슬라이드
const listItems = document.querySelectorAll('.new-box ul li');

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // 모든 li에서 active 클래스 제거
        listItems.forEach(li => li.classList.remove('active'));
        // 현재 호버된 li에 active 클래스 추가
        item.classList.add('active');
    });
});
// 축제검색 내용
function addOptions(selectId, start, end) {
    const select = document.getElementById(selectId);
    for (let i = start; i <= end; i++) {
        select.add(new Option(i, i));
    }
}

// 각 선택 박스에 옵션 추가
addOptions('startYear', 2024, 2030);
addOptions('endYear', 2024, 2030);
addOptions('startMonth', 1, 12);
addOptions('endMonth', 1, 12);
addOptions('startDay', 1, 31);
addOptions('endDay', 1, 31);



const festivalSearchData = {
    "서울": {
        "문화": [
            { name: "서울야외도서관 : 광화문 책마당", image: "/img/sub/select/seoul/seoul-culture-img-01.jpg", dates: ["2024-04-18", "2024-11-10"] },
            { name: "한강 불빛 공연(드론 라이트 쇼)", image: "/img/sub/select/seoul/seoul-culture-img-02.jpg", dates: ["2024-09-28", "2024-11-02"] },
            { name: "한강 종이비행기 축제", image: "/img/sub/select/seoul/seoul-culture-img-03.jpg", dates: ["2024-09-28", "2024-09-28"] },
            { name: "창덕궁 달빛기행", image: "/img/sub/select/seoul/seoul-culture-img-04.jpg", dates: ["2024-09-12", "2024-11-10"] },
            { name: "밤의 석조전", image: "/img/sub/select/seoul/seoul-culture-img-05.jpg", dates: ["2024-09-24", "2024-11-02"] },
            { name: "궁중문화축전", image: "/img/sub/select/seoul/seoul-culture-img-06.jpg", dates: ["2024-10-09", "2024-10-13"] },
        ],
        "예술": [
            { name: "위클리 클래식 페스티벌", image: "/img/sub/select/seoul/seoul-art-img-01.jpg", dates: ["2024-03-01", "2024-07-31"] },
            { name: "아시테지 국제여름축제", image: "/img/sub/select/seoul/seoul-art-img-02.jpg", dates: ["2024-07-18", "2024-07-28"] },
            { name: "서울청소년연극축제", image: "/img/sub/select/seoul/seoul-art-img-03.jpg", dates: ["2024-07-22", "2024-07-28"] },
            { name: "누구나 세종썸머페스티벌", image: "/img/sub/select/seoul/seoul-art-img-04.jpg", dates: ["2024-08-28", "2024-09-01"] },
            { name: "양천 락(樂) 페스티벌", image: "/img/sub/select/seoul/seoul-art-img-05.jpg", dates: ["2024-09-28", "2024-09-28"] },

        ],
        "전시": [
            { name: "서울국제정원박람회", image: "/img/sub/select/seoul/seoul-display-img-01.jpg", dates: ["2024-05-16", "2024-10-08"] },
            { name: "서울국제주류&와인박람회", image: "/img/sub/select/seoul/seoul-display-img-02.jpg", dates: ["2024-07-04", "2024-07-06"] },
            { name: "서울일러스트레이션페어V.17", image: "/img/sub/select/seoul/seoul-display-img-03.jpg", dates: ["2024-07-04", "2024-07-07"] },
            { name: "DDP 여름축제 : 디자인 바이브", image: "/img/sub/select/seoul/seoul-display-img-04.jpg", dates: ["2024-08-01", "2024-08-03"] },
            { name: "크리에이티브X성수", image: "/img/sub/select/seoul/seoul-display-img-05.jpg", dates: ["2024-10-07", "2024-10-13"] },

        ],
        "음식": [
            { name: "영등포 관광 세일 페스타", image: "/img/sub/select/seoul/seoul-food-img-01.jpg", dates: ["2024-03-25", "2024-10-31"] },
            { name: "풍납야시장", image: "/img/sub/select/seoul/seoul-food-img-02.jpg", dates: ["2024-08-23", "2024-11-16"] },
            { name: "동대문구 맥주축제", image: "/img/sub/select/seoul/seoul-food-img-03.jpg", dates: ["2024-08-30", "2024-08-31"] },
            { name: "경복궁 생과방", image: "/img/sub/select/seoul/seoul-food-img-04.jpg", dates: ["2024-09-04", "2024-10-31"] },
            { name: "전남 세계 김밥 페스티벌", image: "/img/sub/select/seoul/seoul-food-img-05.jpg", dates: ["2024-11-01", "2024-11-03"] },

        ],
        "자연": [
            { name: "차 없는 잠수교 뚜벅뚜벅축제", image: "/img/sub/select/seoul/seoul-nature-img-01.jpg", dates: ["2024-05-05", "2024-06-23"] },
            { name: "별 헤는 서울숲", image: "/img/sub/select/seoul/seoul-nature-img-02.jpg", dates: ["2024-08-17", "2024-08-24"] },
            { name: "한강야경투어", image: "/img/sub/select/seoul/seoul-nature-img-03.jpg", dates: ["2024-09-06", "2024-10-12"] },
            { name: "공공미술 빛조각축제", image: "/img/sub/select/seoul/seoul-nature-img-04.jpg", dates: ["2024-10-18", "2024-11-17"] },

        ],
        "전통": [
            { name: "양화진 근대사 뱃길탐방", image: "/img/sub/select/seoul/seoul-tradition-img-01.jpg", dates: ["2024-04-23", "2024-11-07"] },
            { name: "세계 민속춤 축제", image: "/img/sub/select/seoul/seoul-tradition-img-02.jpg", dates: ["2024-09-26", "2024-09-26"] },
            { name: "한가위 한음회", image: "/img/sub/select/seoul/seoul-tradition-img-03.jpg", dates: ["2024-09-14", "2024-09-14"] },

        ],
        "역사": [
            { name: "서대문독립축제", image: "/img/sub/select/seoul/seoul-history-img-01.jpg", dates: ["2024-08-13", "2024-08-15"] },
            { name: "강동선사문화축제", image: "/img/sub/select/seoul/seoul-history-img-02.jpg", dates: ["2024-10-11", "2024-10-13"] },
            { name: "한양을 찾아온 보부상", image: "/img/sub/select/seoul/seoul-history-img-03.jpg", dates: ["2024-10-15", "2024-10-15"] },
            { name: "관악강감찬축제", image: "/img/sub/select/seoul/seoul-history-img-04.jpg", dates: ["2024-10-11", "2024-10-13"] },

        ],
        "종교": [
            { name: "국제선명상대회", image: "/img/sub/select/seoul/seoul-religion-img-01.jpg", dates: ["2024-09-27", "2024-10-01"] },

        ],
    },
    // 부산과 제주 데이터는 생략했지만 동일한 구조를 유지해야 합니다.
};
let displayedFestivals = [];
let currentDisplayIndex = 0;
const DISPLAY_LIMIT = 12;

function displayFestivals() {
    const contentElement = document.getElementById("festi-content");
    const noFestivalMessage = document.getElementById("noFestivalMessage");
    contentElement.innerHTML = '';

    if (displayedFestivals.length === 0) {
        noFestivalMessage.style.display = 'block';
        document.getElementById("loadMore").style.display = 'none';
    } else {
        noFestivalMessage.style.display = 'none';
        const festivalsToDisplay = displayedFestivals.slice(0, currentDisplayIndex); // 현재까지 표시된 축제만 표시
        
        festivalsToDisplay.forEach(festival => {
            const statusInfo = getFestivalStatus(festival.dates);
            const listItem = document.createElement('li');
            listItem.className = 'festival-item';
            listItem.innerHTML = `
            <a href="#none">
                <img src="${festival.image}" alt="${festival.name}">
                <strong>${festival.name}</strong>
                <span class="date">${festival.dates.map(date => date.replace(/-/g, '.')).join(' ~ ')}</span>
                <span class="detail">
                    <span class="interest">${festival.interest}</span>
                    <span class="status" style="background-color: ${statusInfo.backgroundColor};">
                        ${statusInfo.text}
                    </span>
                </span>
            </a>
            `;
            contentElement.appendChild(listItem);
        });

        // 더보기 버튼 표시 여부 결정
        if (currentDisplayIndex < displayedFestivals.length) {
            document.getElementById("loadMore").style.display = 'block';
        } else {
            document.getElementById("loadMore").style.display = 'none';
        }
    }
}



function resetDisplay() {
    displayedFestivals = [];
    currentDisplayIndex = DISPLAY_LIMIT; // 초기에는 12개를 표시하기 위해 설정

    for (const region in festivalSearchData) {
        for (const interest in festivalSearchData[region]) {
            festivalSearchData[region][interest].forEach(festival => {
                displayedFestivals.push({ ...festival, interest });
            });
        }
    }
    displayFestivals();
}

function getFestivalStatus(dates) {
    const today = new Date();
    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[dates.length - 1]);

    if (today < startDate) {
        return { text: "예정", backgroundColor: "#c4eafc" }; // 예정 상태
    } else if (today > endDate) {
        return { text: "종료", backgroundColor: "#ececec" }; // 종료 상태
    } else {
        return { text: "진행 중", backgroundColor: "#fedb77" }; // 진행 중 상태
    }
}

document.getElementById("submitBtn").addEventListener("click", () => {
    const region = document.getElementById("regionSelect").value;
    const startYear = parseInt(document.getElementById("startYear").value) || 2024;
    const startMonth = parseInt(document.getElementById("startMonth").value) || 1;
    const startDay = parseInt(document.getElementById("startDay").value) || 1;

    const endYear = parseInt(document.getElementById("endYear").value) || 2030;
    const endMonth = parseInt(document.getElementById("endMonth").value) || 12;
    const endDay = parseInt(document.getElementById("endDay").value) || 31;

    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);

    const selectedInterests = Array.from(document.querySelectorAll('.interest-button.selected')).map(button => button.getAttribute('data-interest'));

    displayedFestivals = [];
    currentDisplayIndex = DISPLAY_LIMIT; // 검색 후 처음 12개 표시

    // 지역과 관심 분야가 둘 다 선택되지 않은 경우
    if (!region || selectedInterests.length === 0) {
        displayedFestivals = []; // 축제 목록 초기화
        displayFestivals();
        return; // 더 이상 진행하지 않음
    }

    const addFestivals = (regionData) => {
        for (const interest in regionData) {
            regionData[interest].forEach(festival => {
                festival.dates.forEach(dateString => {
                    const festivalSearchData = new Date(dateString);
                    if (festivalSearchData >= startDate && festivalSearchData <= endDate) {
                        if (selectedInterests.includes("전체") || selectedInterests.includes(interest)) {
                            if (!displayedFestivals.some(f => f.name === festival.name && f.interest === interest)) {
                                displayedFestivals.push({ ...festival, interest });
                            }
                        }
                    }
                });
            });
        }
    };

    if (region === "전국") {
        for (const r in festivalSearchData) {
            addFestivals(festivalSearchData[r]);
        }
    } else if (region && festivalSearchData[region]) {
        addFestivals(festivalSearchData[region]);
    }

    // 선택된 관심 분야가 "전체"일 때 모든 축제 추가
    if (selectedInterests.includes("전체") && festivalSearchData[region]) {
        addFestivals(festivalSearchData[region]);
    }

    displayFestivals();
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("regionSelect").value = '';
    document.getElementById("startYear").value = '';
    document.getElementById("startMonth").value = '';
    document.getElementById("startDay").value = '';
    document.getElementById("endYear").value = '';
    document.getElementById("endMonth").value = '';
    document.getElementById("endDay").value = '';

    document.querySelectorAll('.interest-button.selected').forEach(button => {
        button.classList.remove('selected');
    });

    resetDisplay();
});

document.getElementById("loadMore").addEventListener("click", () => {
    currentDisplayIndex += DISPLAY_LIMIT; // 클릭할 때마다 12개씩 더 추가
    displayFestivals(); // 축제를 다시 표시
});

document.querySelectorAll('.interest-button').forEach(button => {
    button.addEventListener('click', () => {
        const isSelected = button.classList.toggle('selected');
        if (button.getAttribute('data-interest') === '전체' && isSelected) {
            document.querySelectorAll('.interest-button').forEach(b => {
                if (b !== button) {
                    b.classList.remove('selected');
                }
            });
        } else if (isSelected && button.getAttribute('data-interest') !== '전체') {
            const allButton = document.querySelector('.interest-button[data-interest="전체"]');
            if (allButton.classList.contains('selected')) {
                allButton.classList.remove('selected');
            }
        }
    });
});

// 초기 로드 시 모든 축제 표시
resetDisplay();