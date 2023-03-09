$(function(){
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  // gnb
  $('.gnb-item').mouseenter(function(){
    $(this).children('.lnb-list-wrap').stop().fadeIn(300);
  });
  $('.gnb-item').mouseleave(function(){
    $(this).children('.lnb-list-wrap').stop().fadeOut(300);
  });

  // visual
  const visualSwiper = new Swiper('.sc-visual .swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.sc-visual .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-visual .btn-prev',
      nextEl: '.sc-visual .btn-next',
    },
  });

  // whatsnew
  const whatsnewSwiper = new Swiper('.sc-whatsnew .swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sc-whatsnew .btn-prev',
      nextEl: '.sc-whatsnew .btn-next',
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
  });
  $('.sc-whatsnew .swiper-slide-next').addClass('active');
  $('.sc-whatsnew .swiper-slide-active').next().next().next().next().addClass('active');

  whatsnewSwiper.on('slideChangeTransitionEnd',function(){
    $('.sc-whatsnew .swiper-slide').removeClass('active');
    $('.sc-whatsnew .swiper-slide-next').addClass('active');
    $('.sc-whatsnew .swiper-slide-active').next().next().next().next().addClass('active');
  })

  // makeityours
  const makeityoursSwiper = new Swiper('.sc-makeityours .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    navigation: {
      prevEl: '.sc-makeityours .btn-prev',
      nextEl: '.sc-makeityours .btn-next',
    },
    slidesPerView: 'auto',
  });

  // exclusive
  const exclusiveSwiper = new Swiper('.sc-exclusive .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    navigation: {
      prevEl: '.sc-exclusive .btn-prev',
      nextEl: '.sc-exclusive .btn-next',
    },
    slidesPerView: 'auto',
    centeredSlides: true
  });

  // beautypick
  const beautypickSwiper = new Swiper('.sc-beautypick .swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    loop: true,
    pagination: {
      el: '.sc-beautypick .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-beautypick .btn-prev',
      nextEl: '.sc-beautypick .btn-next',
    },
  });

  // wconceptTV
  const wconceptTVSwiper = new Swiper('.sc-wconceptTV .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      prevEl: '.sc-wconceptTV .btn-prev',
      nextEl: '.sc-wconceptTV .btn-next',
    },
    slidesPerView: 'auto',
    centeredSlides: true
  });

  // banner2
  const banner2Swiper = new Swiper('.sc-banner2 .swiper', {
    // autoplay: true,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.sc-banner2 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-banner2 .btn-prev',
      nextEl: '.sc-banner2 .btn-next',
    },
  });

  // designers
  const designersbullet = ['MAISONMARAIS', 'athe vanessabruno', 'DEAR MY DEER', 'Lemme', 'VERUTUM'];
  const designersSwiper = new Swiper('.sc-designers .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      prevEl: '.sc-designers .btn-prev',
      nextEl: '.sc-designers .btn-next',
    },
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    pagination: {
      el: '.sc-designers .category-area',
      clickable: true,
      bulletClass: 'btn-category',
      bulletActiveClass: 'active',
      bulletElement: 'a',
      renderBullet: function (index, className) {
        return '<a href="#" class="' + className + '" role="tab">' + '<span>' + (designersbullet[index]) + '</span>' + '</a>';
      }
    },
  });

  // wdnastyle
  $('.sc-wdnastyle .btn-category').click(function(e){
    e.preventDefault();
    const dataType=$(this).data('type');

    $('.sc-wdnastyle .btn-category').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.wdnastyle-list').removeClass('visible');
  });

  // news
  $('.sc-board .btn-tab').hover(function(){
    const dataType=$(this).data('type');

    $('.sc-board .btn-tab').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.board-list').removeClass('visible');
  });

  // quick-menu
  let lastScroll = 0;
  $(window).scroll(function(){
    const scrollTop = $(window).scrollTop();
    const innerHeight = $(window).innerHeight();
    const scrollHeight = $('body').prop('scrollHeight');
    const currentScroll = $(this).scrollTop();
    const stickyNav = $('.sticky-nav').offset().top;
    if (currentScroll >= stickyNav) {
      $('#header').addClass('static');
      $('.sticky-nav').addClass('fixed');
      gsap.to('.sticky-nav .logo-area, .sticky-nav .util-area', {
        display: 'block',
        duration: 0,
      }) 
    } else {
      $('#header').removeClass('static');
      $('.sticky-nav').removeClass('fixed');
      gsap.to('.sticky-nav .logo-area, .sticky-nav .util-area', {
        display: 'none',
        duration: 0,
      }) 
    }

    if (currentScroll > 500) {
      $('.quick-menu .btn-top').removeClass('invisible');
    } else {
      $('.quick-menu .btn-top').addClass('invisible');
    }

    if (scrollTop + innerHeight >= scrollHeight) {
      $('.quick-menu .btn-bottom').addClass('invisible');
    } else {
      $('.quick-menu .btn-bottom').removeClass('invisible');
    }
  });

  // btn-top & btn-bottom
  $('.quick-menu .btn-top').click(function() {
      $('html, body').stop().animate({scrollTop: 0}, 500);
  });
  $('.quick-menu .btn-bottom').click(function() {
      $('html, body').stop().animate({scrollTop: $(document).height()}, 500);
  });
});