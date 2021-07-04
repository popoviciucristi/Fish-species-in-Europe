/*================= Custom js file =================*/

/*************************************************
1. Start of use strict
2. Smooth Scroll
3. Logo Slider
4. Testimonial slider
5. Portfolio Slider
6. MagnificPopup
7. Shrink Header
8. Auto close navbar-collapse on click a
9. ctivate scrollspy to add active class to navbar items on scroll
10. Jarallax
*************************************************/
(function ($) {
    // Start of use strict
    "use strict";

    /*------------------------------------------------
    * Smooth Scroll
    ------------------------------------------------*/
    $(window).on('load', function() {
        jQuery('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[data-toggle="tab"]')
        .on('click',function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');

                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    jQuery('html, body').animate({scrollTop: target.offset().top - 75
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!

                        var $target = jQuery(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    }) ;
                }
            }
        });
    });

    /*------------------------------------------------
    * Logo Slider
    ------------------------------------------------*/
    $('.logo-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 492,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 345,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*------------------------------------------------
        * Testimonial slider
    ------------------------------------------------*/
    $('.testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*------------------------------------------------
    * Portfolio Slider
    ------------------------------------------------*/
    var owl = $('.portfolio-slider');
    owl.owlCarousel({
        loop:true,
        items:2,
        margin:15,
        center: true,
        dots:true,
        slideSpeed:20000,
        nav: false,
        autoplay:false,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /*------------------------------------------------
    * MagnificPopup
    ------------------------------------------------*/
    $('.portfolio-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    /*------------------------------------------------
    * Shrink Header
    ------------------------------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".trans-header").addClass("sticky");
        } else {
            $(".trans-header").removeClass("sticky");
        }
    });

    /*------------------------------------------------
    * Auto close navbar-collapse on click a
    ------------------------------------------------*/
    $('.collapse a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    /*------------------------------------------------
    * Activate scrollspy to add active class to navbar items on scroll
    ------------------------------------------------*/
    $('body').scrollspy({
        target: '#main',
        offset: 54
    });

    /*------------------------------------------------
    * Jarallax
    ------------------------------------------------*/
    jarallax(document.querySelectorAll('.jarallax'));
})(jQuery);
