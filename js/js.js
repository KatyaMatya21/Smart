$(document).ready(function(){

        $(".menu").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href');
            var top = $(id).offset().top - 30;
            $('body,html').animate({scrollTop: top}, 500);
        });

    var $slideeFrame = $('.client-slider');
    var $slideeOptions = {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        activatePageOn: 'click',
        speed: 500,
        mouseDragging: 1,
        touchDragging: 1,
        easing: 'swing',
        itemSelector: 'li.client-slide',
        prevPage: $slideeFrame.parent().find('.control-slider-left').get(0),
        nextPage: $slideeFrame.parent().find('.control-slider-right').get(0)
    };

    window.workSlider = new Sly(
        $slideeFrame,
        $slideeOptions
    );

    window.workSlider.init();

    var $slideeFeature = $('.our-features-block-content');
    var $slideeOpt = {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        activatePageOn: 'click',
        speed: 500,
        mouseDragging: 1,
        touchDragging: 1,
        easing: 'swing',
        pagesBar: $slideeFeature.parent().find('.pages'),
        itemSelector: 'li.slide-feature',
        prevPage: $slideeFeature.parent().find('.feature-controls-left').get(0),
        nextPage: $slideeFeature.parent().find('.feature-controls-right').get(0)
    };

    window.workSlider = new Sly(
        $slideeFeature,
        $slideeOpt
    );

    window.workSlider.init();


});
