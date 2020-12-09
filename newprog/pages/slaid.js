var slideCount = 0;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
var intervals = [];



$(document).ready(function() {

    togl();

   //var obgekt = $(document).find('.viewport');
   //$(obgekt).each (function(i, elem) {
   //     setSlideNow (elem, 1);
   //     intervals.push(setInterval(nextSlide(elem), slideInterval));
   //     
   //}
   //);

   var $page = $('html, body');
   $('a[href*="#"]').click(function() {
    if ($($.attr(this, 'href')).offset() != null) {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
}
    return false;
});

   var switchInterval = setInterval(run, slideInterval);
    slideCount = $('.slidewrapper').children().length;

   // slideHeight();
    /*
    $('.viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
      switchInterval = setInterval(nextSlide, slideInterval);
    }); */

  /* setActive(); */
    $('.open-popup').on('click',function(e) {
        e.preventDefault();
        togl()
    });
    $('#close').on('click', togl);
    $(window).resize(function() {
   //     slideHeight();
    });
});

function togl () {
    $('#popup').toggle ();
    //$('.popup__content').toggleClass('target');
}

function run (){
    var obgekt = $(document).find('.viewport');
   $(obgekt).each (function(i, elem) {
    slideNow = getSlideNow(elem);
    if (slideNow == undefined || slideNow<1) {
        setSlideNow (elem, 1); }
        nextSlide(elem);
   });
}

function getSlideNow (elem) {
    var slideNow = $(elem).attr('slideNow');
    return slideNow;
}
function setSlideNow (elem, slideNow) {
    if (isNaN(slideNow) || parseInt(slideNow)<1) {
        slideNow = 1;
    }
    $(elem).attr('slideNow', slideNow);
} 

function setActive () {
    var minuc = slideNow-1;
    $('.slide-nav-btn').removeClass("active");
    $('.slide-nav-btn:eq('+minuc+')').addClass("active");
}

function textAll () {
    var texts = $(".slide_cap");
    var max = 0;
    $(texts).each (function(i, elem) {
        if  ($(elem).height ()>max) {
            max = $(elem).height ();
        }
    });
    return max;
}

function slideHeight() {
    var width = $('.viewport').width();
    var height = width / 10 * 4;

    if (width<950) {
        $(".slide_cap").css ( "position", "relative");
        $(".slide_cap").width("100%");
        $(".cap-h").css ("padding", "4px 0px 0px 32px");
        $(".cap_row").css ("padding", "8px 10px 10px 10px");
        $(".cap_row").css ("text-aling", "justify");
        $('.viewport').height(height + textAll());
        $(".slide_cap").height(textAll());
    } else { 
        $(".slide_cap").css ( "position", "absolute");
        $(".cap-h").css ("padding", "20px 12px 9px 16px");
        $(".cap_row").css ("padding", "5px 16px");
        $(".cap_row").css ("text-aling", "left");
        $(".slide_cap").width("29%");
        $('.viewport').height(height);
        $(".slide_cap").css("height", "100%");
    }
}

function nextSlide(elem) {
    var slideNow = getSlideNow(elem);
    var slidewrapper = $(elem).find('.slidewrapper');
    slideCount = $(slidewrapper).children().length;
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $(slidewrapper).css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$(elem).width() * (slideNow);
        $(slidewrapper).css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
        
    }
    setSlideNow(elem, slideNow);
    //setActive();
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.viewport').width() * (slideCount - 1);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow - 2);
        $('.slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}