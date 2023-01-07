(function ($) {

// sticky menu start 
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
     $(".sticky-menu").removeClass("scroll-header");
    }else{
     $(".sticky-menu").addClass("scroll-header");
    }
   });
   
   
     var nav_offset_top = $('header').height()+10; 
     /*-------------------------------------------------------------------------------
       Navbar 
     -------------------------------------------------------------------------------*/
 
     //* Navbar Fixed  
     function navbarFixed(){
         if ( $('.menu-nav').length ){ 
             $(window).scroll(function() {
                 var scroll = $(window).scrollTop();   
                 if (scroll >= nav_offset_top ) {
                     $(".menu-nav").addClass("navbar_fixed");
                 } else {
                     $(".menu-nav").removeClass("navbar_fixed");
                 }
             });
         };
     };
     navbarFixed();

    //  ======= sticky menu end ====== \\





    
    //Setting hero slider
    function heroSlider() {
        if ($(".swiper-wrapper").length) {
            $(".swiper-wrapper").slick({
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear',
            });
        }
    }

    //Active heor slider
    heroSlider();






  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function (indx) {
      if ($(this).attr("data-background")) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });




















// mobile menu 
$(".mobile-btn").click(function(){
    $(".responsive-menu").toggleClass("active");
  });





  // service slider start 
      /*------------------------------------------
        = service SLIDER
    -------------------------------------------*/
    if ($(".service-slider").length) {
      $(".service-slider").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop:true,
        autoplayHoverPause:true,
        dots: true,
        nav: false,
        center: true,
          responsive: {
            0 : {
                items: 1,
                dots: true,
                nav: false,
                center: false,
            },

            500 : {
                items: 1,
                nav: false,
                center: false,
            },

            768 : {
                items: 2,
                center: false,
            },

            991 : {
                items: 3,
                center: true,
            },
            1200 : {
                items: 3,
            },

            1400 : {
                items: 3
            },

          }
      });
  }
  // service slider end

  // service slider-s2 start 
      /*------------------------------------------
        = service-s2 SLIDER
    -------------------------------------------*/
    if ($(".service-s2-active").length) {
        $(".service-s2-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 0,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
          center: true,
            responsive: {
              0 : {
                  items: 1,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 1,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 2,
                  center: false,
              },
  
              991 : {
                  items: 3,
                  center: true,
              },
              1200 : {
                  items: 3,
              },
  
              1400 : {
                  items: 3
              },
  
            }
        });
    }

  // service slider end

// wow active 
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  // odometer for-01
if ($(".odometer").length) {
  $('.odometer').appear();
  $(document.body).on('appear', '.odometer', function (e) {
      var odo = $(".odometer");
      odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
      });
  });
}




      /*------------------------------------------
        = Team SLIDER
    -------------------------------------------*/
    if ($(".team-active").length) {
        $(".team-active").owlCarousel({
          autoplay: true,
          smartSpeed: 300,
          margin: 20,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: false,
          center: true,
          responsive: {
              0 : {
                  items: 1,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 2,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 3,
                  center: true,
              },
  
              991 : {
                  items: 3,
                  center: true,
              },
              1200 : {
                  items: 3,
              },
  
              1400 : {
                  items: 3
              },
  
            }
        });
    }



      /*------------------------------------------
        = portfolio SLIDER style-01 
    -------------------------------------------*/
    if ($(".portfolo-slider").length) {
      $(".portfolo-slider").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop:true,
        autoplayHoverPause:true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
          responsive: {
            0 : {
                items: 1,
                dots: true,
                nav: false,
                center: false,
            },

            500 : {
                items: 1,
                nav: false,
                center: false,
            },

            768 : {
                items: 2,
                center: false,
            },

            991 : {
                items: 2,
                center: false,
            },
            1200 : {
                items: 3,
            },

            1400 : {
                items: 3
            },

          }
      });
  }



        /*------------------------------------------
        = portfolio SLIDER style-02
    -------------------------------------------*/
    if ($(".portfolo-active-s3").length) {
        $(".portfolo-active-s3").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          center: true,
          margin: 20,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
              0 : {
                  items: 1,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 2,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 3,
                  center: true,
              },
  
              991 : {
                  items: 3,
                  center: true,
              },
              1200 : {
                  items: 3,
              },
  
              1400 : {
                  items: 3
              },
  
            }
        });
    }

      /*------------------------------------------
        = Testimonial slider 1
    -------------------------------------------*/
    if ($(".testimoni-wrapper").length) {
      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          focusOnSelect: true,
          dots:true,

      });
  }

      /*------------------------------------------
        = Testimonial slider 2
    -------------------------------------------*/
    if ($(".testimoni-text-s2-active").length) {
        $(".testimoni-text-s2-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 20,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-long-arrow-right" aria-hidden="true"></i>','<i class="fa fa-long-arrow-left" aria-hidden="true"></i>'],
          items: 1,
        });
    }

        /*------------------------------------------
        = testimoni SLIDER style-03
    -------------------------------------------*/
    if ($(".testimoni-s3-active").length) {
        $(".testimoni-s3-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          center: true,
          margin: 0,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
              0 : {
                  items: 1,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 2,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 2,
                  center: false,
              },
  
              991 : {
                  items: 3,
                  center: true,
              },
              1200 : {
                  items: 3,
              },
  
              1400 : {
                  items: 3
              },
  
            }
        });
    }



    // brand active 
    if ($(".brand-s2-active").length) {
        $(".brand-s2-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 150,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: false,
          responsive: {
              0 : {
                  items: 2,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 3,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 3,
                  center: false,
              },
  
              991 : {
                  items: 4,
                  center: false,
              },
              1200 : {
                  items: 4,
              },
  
              1400 : {
                  items: 4
              },
  
            }
        });
    }



})(window.jQuery);