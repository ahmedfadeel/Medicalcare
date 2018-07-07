/* global */

/*Fixed Header
============================*/
$(document).ready(function () {

    "use strict";
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    var b = 50;
    $(window).scroll(function () {
        var a = getCurrentScroll();
        if (a >= b) {
            $('.header.home, .main').addClass('colored');
        } else {
            $('.header.home, .main').removeClass('colored');
        }
    });
});


/*File Upload
===============================*/
$(document).ready(function () {
    $(".upload").on("change", function (){
        $(".chose-file  p").text($(this).val()); 
       
    });
});
/* Nice Scroll
===============================*/
$(document).ready(function () {
    
    "use strict";
    
	$("html").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 35,
        cursorwidth: 7,
        cursorcolor: '#00587B',
        cursorborder: 'none',
        background: 'rgba(255,255,255,0.3)',
        cursorborderradius: 3,
        autohidemode: false,
        cursoropacitymin: 0.1,
        cursoropacitymax: 1,
        zindex: "999",
        horizrailenabled: false
	});
    $(".scrollbar").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 35,
        cursorwidth: 5,
        cursorcolor: '#00587B',
        cursorborder: 'none',
        background: 'rgba(255,255,255,0.3)',
        cursorborderradius: 3,
        autohidemode: false,
        cursoropacitymin: 0.1,
        cursoropacitymax: 1,
        zindex: "1",
        horizrailenabled: false
	});
   
});
