(function($){

  // mobile-menu

  (function(){
    $('#toggle-btn').click(function(){
      const navContainer = document.getElementById('main-menu')
      console.log(Array.from(navContainer.classList));
      if(Array.from(navContainer.classList).includes('nav-expanded')){
        navContainer.classList.remove('nav-expanded')
      }else{
        navContainer.classList.add('nav-expanded')
      }
    })
    
  })()

  //sidebar

  let open = false;

  $('#sidebar-toggler').click(function(){

    if(!open){
      $('.sidebar-wrapper').addClass('sidebar-open')
      $('body').addClass('y-hidden')
      open = true;

    }else{

      open = false;
      $('.sidebar-wrapper').removeClass('sidebar-open')
      $('body').removeClass('y-hidden')

    }
  })

  // banner-slider

    $('.slider').slick({

        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: '',
        nextArrow: '',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

  //blog-slider

    $('.blog-container').slick({

      dots: true,
      infinite: true,
      autoplay: false,
      prevArrow: '',
      nextArrow: '',
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  //blog-slider-v2

  $('.blog-v2-container').slick({

    dots: false,
    infinite: true,
    autoplay: true,
    prevArrow: '',
    nextArrow: '',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //testimonial-slider

    $('.testimonial-container').slick({

      dots: true,
      infinite: true,
      autoplay: false,
      prevArrow: '',
      nextArrow: '',
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  // brand-slider

    $('.brand-section').slick({

      dots: false,
      infinite: true,
      autoplay: false,
      prevArrow: '',
      nextArrow: '',
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  // porfolio

      let grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      })

      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
      });

  // button active

      (function(){
        const buttons = Array.from(document.getElementById('filter-buttons').children);
        buttons.forEach(el => {
          el.addEventListener('click', buttonHandler.bind(el))
        })

        function buttonHandler(){
          buttons.forEach(ele => {
            ele.classList.remove('active')
          })
          this.classList.add('active')
        }
      })()

  //magnificPopup

      $('.popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery: {
          enabled: true
        },
      });

  //counterUp

      $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
  //testimonial-v2

  $('.testimonial-container-v2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor: '.testimonial-nav',
 
  });
  $('.testimonial-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-container-v2',
    dots: false,
    centerMode: true,
    centerPadding: false,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>'
  });
     

}(jQuery))