jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 200) {
        jQuery('#header').css('background-color', '#21ad65');
    } else {
       jQuery('#header').css('background-color', 'transparent');
    }
});