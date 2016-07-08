/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){
	$('.RevSlider').lightSlider({
        item: 5,
        slideMargin: 0,
        pager: false
    });
    var textSlider = $('.RevSlider2').lightSlider({
       item: 1,
        slideMargin: 0,
        pager: false,
        controls: false
    });
    $(".lSPrev").click(function(){
        textSlider.goToPrevSlide();
    });
    $(".lSNext").click(function(){
        textSlider.goToNextSlide();
    });
})();