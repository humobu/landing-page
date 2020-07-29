$(() => {
  //= ==== Prealoder

  $(window).on('load', (event) => {
    $('.preloader').delay(500).fadeOut(500);
  });

  //= ==== Sticky

  $(window).on('scroll', (event) => {
    const scroll = $(window).scrollTop();
    if (scroll < 20) {
      $('.navbar-area').removeClass('sticky');
      $('.navbar-area img').attr('src', '/images/suricato-x64-white.png');
    } else {
      $('.navbar-area').addClass('sticky');
      $('.navbar-area img').attr('src', '/images/suricato-x64-color.png');
    }
  });

  //= ==== Section Menu Active

  const scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    const scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      const sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  //= ==== close navbar-collapse when a  clicked

  $('.navbar-nav a').on('click', () => {
    $('.navbar-collapse').removeClass('show');
  });

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.navbar-nav a').on('click', () => {
    $('.navbar-toggler').removeClass('active');
  });

  //= ==== Sidebar

  $('[href="#side-menu-left"], .overlay-left').on('click', (event) => {
    $('.sidebar-left, .overlay-left').addClass('open');
  });

  $('[href="#close"], .overlay-left').on('click', (event) => {
    $('.sidebar-left, .overlay-left').removeClass('open');
  });

  //= ==== Slick

  $('.slider-items-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  //= ==== Isotope Project 4

  $('.container').imagesLoaded(() => {
    const $grid = $('.grid').isotope({
      // options
      transitionDuration: '1s',
    });

    // filter items on button click
    $('.portfolio-menu ul').on('click', 'li', function () {
      const filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });

    // for menu active class
    $('.portfolio-menu ul li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  //= ==== slick Testimonial Four

  $('.testimonial-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
  });

  //= ===== Magnific Popup

  $('.video-popup').magnificPopup({
    type: 'iframe',
    // other options
  });

  //= ==== Magnific Popup

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  //= ==== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  // Animate the scroll to yop
  $('.back-to-top').on('click', (event) => {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });

  //= ====
});
