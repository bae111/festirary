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

    $('.util-list li a img').each(function(index, el){
        const originalSrc = $(this).data('origin');

        $(this).on('mouseenter', function(){
            $(this).attr('src', hoverImg[index]);
        });

        $(this).on('mouseleave', function(){
            $(this).attr('src', originalSrc);
        });
    });

    // util icon 검색 클릭 변경
    $('.search-btn').on('click', function(event){
        if(event.type === 'click'){
            $(this).attr('src', $(this).data('img'));
        }
    });

    // top-btn top 가면 none
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#top-btn').addClass('show');
        }else{
            $('#top-btn').removeClass('show');
        }
    });

});


// main.js는 팝업이나 이런애들 들어감
// 플러그인.js는 따로 만들어야 함

