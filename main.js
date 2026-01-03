/************* Main Js File ************************
    Template Name: Kanan
    Author: Iramflex
    Version: 1.0
    Copyright 2022
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============
-- Hero Carousel JS
-- Service Carousel JS
-- Testimonial Carousel JS
-- Counter JS
-- Video Popup JS
-- Wow Animation Js
-- Preloader JS


-------------------------------------------------------------------------------------*/


(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {



        /* 
        =================================================================
        Hero Carousel JS
        =================================================================	
        */
        $('.hero-slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            loop: true,
            margin: 0,
            mouseDrag: true,
            autoplayTimeout: 7000,
            autoplay: true,
            dots: false,
            nav: true,
            navText: ["<span class='fas fa-angle-left'></span>", "<span class='fas fa-angle-right'></span>"],
            responsiveClass: true
        });

        $(".hero-slider").on("translate.owl.carousel", function () {
            $(".hero-slide-item h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".hero-slide-item .cta-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".hero-slider").on("translated.owl.carousel", function () {
            $(".hero-slide-item h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".hero-slide-item .cta-btn").addClass("animated fadeInDown").css("opacity", "1");
        });

        /* 
        =================================================================
		Service Carousel JS
		=================================================================	
		*/
        $(".service-box").owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            touchDrag: true,
            mouseDrag: true,
            nav: false,
            dots: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                750: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }

        });

        /* 
		=================================================================
		Testimonial Carousel JS
		=================================================================	
		*/
        $(".testimonial-slider").owlCarousel({
            autoplay: true,
            loop: true,
            margin: 20,
            touchDrag: true,
            mouseDrag: true,
            nav: false,
            dots: true,
            center: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                750: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });


        /* 
        =================================================================
        Counter JS
        =================================================================	
        */

        $('.counter').counterUp({
            delay: 15,
            time: 5000
        });

        /* 
        =================================================================
        Video Popup JS
        =================================================================	
        */

        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        /*==============================
		Wow Animation Js
		==============================*/
		new WOW().init();

    });

    
    
	/* 
    =================================================================
    Preloader JS
    =================================================================	
    */

	$(window).on('load', function () {
		$('.preloader').addClass('preloader-deactivate');
	});



}(jQuery));
