
$(document).ready(function(){
    $('.news-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin:20,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    setTimeout(() => {
        $(".slogan").addClass("fadeInUp");
        $(".overlay").hide();
    }, 1000);
    $(".overlay").addClass("fadeOut");
    $(".links-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 5000,
        lazyLoad:true,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })
  });

$(window).scroll(scrollingWindow);
