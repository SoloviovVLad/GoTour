// @@include('alert.js')

let windowSize = jQuery(window).width(),
    windowHeight = jQuery(window).height(),
    numberOfSlidesToScroll = 1;
    numberOfSlidesToShow = 4.5;
    numberOfSlidesToScrollNewsPage = 1;
    numberOfSlidesToShowNewsPage = 4;
    if(windowSize <= 550){
        numberOfSlidesToShow = 1.2;
        numberOfSlidesToScroll = 1;
    }else if(windowSize <= 800){
        numberOfSlidesToScroll = 1;
        numberOfSlidesToShow = 2;
    }else if (windowSize < 950) {
        numberOfSlidesToScroll = 1;
        numberOfSlidesToShow = 3;
    }else if (windowSize <= 1300) {
        numberOfSlidesToScroll = 1;
        numberOfSlidesToShow = 3.5;
    }else {
    }

// S L I D E R S
let $mainSlider = jQuery('.main-slider'),
    $mainSliderCounter = jQuery('.counter-of-slides--main-slider'),

    $newsSliderUnderMain = jQuery('.news-slider-under-main'),
    $newsSliderUnderMainCounter = jQuery('.counter-of-slides--news-slider--under-main'),
    
    $newsSliderLastOfMain = jQuery('.news-slider--last-of-main-page'),
    $newsSliderLastOfMainCounter = jQuery('.counter-of-slides--news-slider--last-of-main-page'),
    $newsSliderReadMore = jQuery('.news-slider--readmore'),
    $newsSliderReadMoreCounter = jQuery('.counter-of-slides--news-slider--readmore'),

    $newsSliderTopNews = jQuery('.news-slider--top-news'),
    $newsSliderTopNewsCounter = jQuery('.counter-of-slides--news-slider--top-news');

//I N I T .. AFTER CHANGE

$mainSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $mainSliderCounter.html(`<div class="counter-of-slides__current counter-of-slides--main-slider">${i}</div> <span>/</span> <div class="counter-of-slides__all counter-of-slides__all--main-slider">${slick.slideCount}</div>`);
});

$newsSliderUnderMain.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0);
    $newsSliderUnderMainCounter.html(`<div class="counter-of-slides__current counter-of-slides__current--news-slider">${i+Math.floor(numberOfSlidesToShow)}</div> <span>/</span> <div class="counter-of-slides__all counter-of-slides__all--news-slider">${slick.slideCount}</div>`);
});

$newsSliderLastOfMain.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0);
    $newsSliderLastOfMainCounter.html(`<div class="counter-of-slides__current counter-of-slides__current--news-slider">${i+Math.floor(numberOfSlidesToShow)}</div> <span>/</span> <div class="counter-of-slides__all counter-of-slides__all--news-slider">${slick.slideCount}</div>`);
});

$newsSliderReadMore.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0);
    $newsSliderReadMoreCounter.html(`<div class="counter-of-slides__current counter-of-slides__current--news-slider">${i+Math.floor(numberOfSlidesToShow)}</div> <span>/</span> <div class="counter-of-slides__all counter-of-slides__all--news-slider">${slick.slideCount}</div>`);


});

$newsSliderTopNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0);
    $newsSliderTopNewsCounter.html(`<div class="counter-of-slides__current counter-of-slides__current--news-slider">${i+Math.floor(numberOfSlidesToShow)}</div> <span>/</span> <div class="counter-of-slides__all counter-of-slides__all--news-slider">${slick.slideCount}</div>`);
 

});

$mainSlider.slick({
    infinite: true,
});    

$newsSliderUnderMain.slick({
    infinite: false,
    slidesToScroll: numberOfSlidesToScroll,  
    slidesToShow: numberOfSlidesToShow,  
});

$newsSliderLastOfMain.slick({
    infinite: false,
    slidesToScroll: numberOfSlidesToScroll,  
    slidesToShow: numberOfSlidesToShow,  
});
$newsSliderReadMore.slick({
    infinite: false,
    slidesToScroll: numberOfSlidesToScroll,  
    slidesToShow: numberOfSlidesToShow,  
});

jQuery(document).ready(function () {
    // jQuery('.news-slider').append(`<div class="counter-of-slides counter-of-slides--news-slider">`)
    // jQuery('.main-slider').append('<div class="counter-of-slides counter-of-slides--main-slider"> <div class="counter-of-slides__current counter-of-slides__current--main-slider">1</div> <span>/</span> <div class="counter-of-slides__all counter-of-slides__all--main-slider">2</div>')
    jQuery(".slick-arrow").append("<div class='block-arrow'> <span></span> <span></span> <span></span></div>");
    
    // jQuery(".slick-arrow").append("<div class='block-arrow block-arrow--news-slider'> <span></span> <span></span> <span></span>");

    
    let heightWatchMoreNews = jQuery('.first-block__block-news__watch-more').outerHeight(),
        heightBlockNews = jQuery('.first-block__block-news').height(),
        // heightListNews = jQuery('.first-block__block-news__list').height(),
        heightListNews = heightBlockNews - heightWatchMoreNews;
        // if(windowSize<=500){
        //     heightListNews = heightBlockNews;
        // }

        jQuery('.header__top__block-search-and-social__burger').click(function(){
            if(jQuery('.header__top__block-search-and-social__burger').hasClass('header__top__block-search-and-social__burger--cross')){
                jQuery('.header__top__block-search-and-social__burger').removeClass('header__top__block-search-and-social__burger--cross'),
                jQuery('.burger-menu').css('top',-(jQuery('.burger-menu').height() + jQuery('.header').height()) + 'px' );
                jQuery('body').css('overflow-y','scroll')
            }else{
                jQuery('.header__top__block-search-and-social__burger').addClass('header__top__block-search-and-social__burger--cross'),
                jQuery('.burger-menu').css('top',jQuery('.header').height() + 'px' );
                jQuery('body').css('overflow-y','hidden')
            }
        });
});

function checkWidth() {
    let widthMainSlider,
    widthBlockNews = jQuery('.first-block__block-news').width(),
    windowSize = jQuery(window).width(),
    BlockNews;
    if (windowSize < 550) {
        BlockNews = windowSize - 30;
    }else if (windowSize < 950) {
        widthMainSlider = windowSize;
        BlockNews = windowSize - 50;
    }
    else if (windowSize < 1800) {
        widthMainSlider = windowSize - (widthBlockNews);
    }
    else {
    }
    jQuery('.first-block__block-with-slider').css('width',`${widthMainSlider}`)
    jQuery('.first-block__block-news').css('width',`${BlockNews}`)

}
$($(window).scroll(function(){
    if($(window).scrollTop()>windowHeight){
        $('.footer__arrow-to-top').css('position','fixed');
    }else{
        $('.footer__arrow-to-top').css('position','absolute');
    
    }
}));


checkWidth();
jQuery(window).resize(checkWidth);

if (windowSize < 1151) {
    jQuery('.news-page__sidebar__list').addClass('news-slider')
    jQuery('.news-page__sidebar__list').slick({
        infinite: false,
        slidesToScroll: numberOfSlidesToScroll,  
        slidesToShow: numberOfSlidesToShow,  
    });
}
if(windowHeight<820){
    jQuery('.first-block__block-with-slider__slider__item').addClass('first-block__block-with-slider__slider__item--small-height');
    jQuery('.wrapper-with-scroll-block__img-scroll__item__caption').addClass('wrapper-with-scroll-block__img-scroll__item__caption--small-height');
    jQuery('.first-block__block-news__watch-more').addClass('first-block__block-news__watch-more--small-height');
}
jQuery('.footer__arrow-to-top').click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 700);
});

let checkHeightBlockNews = () =>{
    let heightItemOfBlockNews = jQuery('.first-block__block-news__list__item').outerHeight(),
        ItemOfBlockNews = jQuery('.first-block__block-news__list__item'),
        ListNews = jQuery('.first-block__block-news__list'),
        heightList = 0; 

        ItemOfBlockNews.each(function(i,el){

            if(windowSize<=450){
                if(i>=4){
                    ListNews.css('height',`${heightList}`)
                    return false;
                }
                heightList = heightList + $(el).outerHeight(); 
             
            }else if(windowSize<=950){
                if(i>=3){
                    ListNews.css('height',`${heightList}`)
                    return false;
                }
                heightList = heightList + $(el).outerHeight(); 
               
            }
        })
}

checkHeightBlockNews();

$(window).scroll(function(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.footer').offset().top;
	var eh = $('.footer').outerHeight();
	var dh = $(document).height();   

	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
        $('.footer__arrow-to-top').css('bottom','80px')
	}else{
        $('.footer__arrow-to-top').css('bottom','')

    }
});

