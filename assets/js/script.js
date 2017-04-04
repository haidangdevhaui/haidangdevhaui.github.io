$(document).ready(function() {
    // var owl = $(".owl-carousel");
    // owl.owlCarousel({
    //     margin: 0, //					<!-- kho img (px)-->
    //     loop: true, //					<!-- slide chay theo vong -->
    //     nav: true, //				<!-- Hien thi prev - next -->
    //     navText: [], //<!-- Thay the prev - next mac dinh cua owl 'prev','next' -->
    //     autoplay: false, //		<!-- tu dong chay -->
    //     autoplayTimeout: 1500,
    //     autoplayHoverPause: true,
    //     autoplaySpeed: 1000,
    //     responsiveClass: true, //	<!-- responsive slider -->
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 3,
    //         },
    //         1000: {
    //             items: 3,
    //         }
    //     }
    // });
    /**/
    
    $(window).scroll(function() {
    	var h = $('header').height() + $('.banner').height();
    	if($(this).scrollTop() >= h){
    		$('.nav-menu').addClass('menu-fixed');
    	}else{
    		$('.nav-menu').removeClass('menu-fixed');
    	}
    });
});

function setMenu(){
    var subMenu = $('.sub-category').find('li').length;
    if (subMenu >= 5) {
        $('.sub-category').css({
            left: '0',
            width: '100%'
        });
    } else {
        switch (subMenu) {
            case 4:
                $('.sub-category').css({
                    left: '135px'
                });
                break;
            case 3:
                $('.sub-category').css({
                    left: '250px'
                });
                break;
            case 2:
                $('.sub-category').css({
                    left: '345px'
                });
                break;
        }
    }
}