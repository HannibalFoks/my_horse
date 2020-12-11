var slideCount = 0;
var slideInterval = 3000;
var translateWidth = 0;



$(document).ready(function() {

    togl();

   var $page = $('html, body');
   $('a[href*="#"]').click(function() {
    if ($($.attr(this, 'href')).offset() != null) {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
}
    return false;
});

   setInterval(run, slideInterval);
   // var slideCount = $('.slidewrapper').children().length;

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

        $('.menu-burger__header').click(function() {
            $('.menu-burger__header').toggleClass('open-menu');
            $('.header__nav').toggleClass('open-menu');
            $('.fon-blac').toggleClass('open-menu');
        });

});

function togl () {
    $('#popup').toggle ();
    //$('.popup__content').toggleClass('target');
}

function run (){
    var obgekt = $(document).find('.viewport');
   $(obgekt).each (function(i, elem) {
    var slideNow = getSlideNow(elem);
    if (slideNow === undefined || slideNow<1) {
        setSlideNow (elem, 1); }
        nextSlide(elem);
   });
}

function getSlideNow (elem) {
    return $(elem).attr('slideNow');
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



function nextSlide(elem) {
    var slideNow = getSlideNow(elem);
    var slidewrapper = $(elem).find('.slidewrapper');
    var slideCount = $(slidewrapper).children().length;
    if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
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