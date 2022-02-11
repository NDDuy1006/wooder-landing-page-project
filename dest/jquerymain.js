$(document).ready(function() {

  // ========= ĐỔI MÀU HEADER KHI SCROLL QUA PRODUCT =========
  // $(document).on('scroll', function() {
  //   if ($(window).scrollTop() > $('.slider').height() - $('header').height()) {
  //     $('header').addClass('background_active');
  //   } else {
  //     $('header').removeClass('background_active');
  //   }
  // });
  
  // // ======= LANGUAGE OPTIONS =======
  // let lang = $('.lang');
  // let langCurrent = $('.lang .lang-cur span');
  // let langOpt = $('.lang .lang-opt');
  // let langItems = $('.lang .lang-opt a');

  // //click lang hiện lang options
  // lang.on('click', function (e) {
  //   e.stopPropagation();
  //   lang.toggleClass('lang-opt_active');
  // });

  // langItems.on('click', function () {
  //   let langText = $(this).text();
  //   let langCurrentSpan = langCurrent.text(); //text hiện tại của thẻ span được lưu trong biến langCurrentSpan
  //   langCurrent.html(langText); //option được click nhảy lên thế chỗ langCurrent
  //   $(this).html(langCurrentSpan); // text được lưu trữ trong langCurrent nhảy vào langOpt
  // });


  // //click ngoài vùng trống tắt lang option
  // $(document).on('click', function() {
  //   lang.removeClass('lang-opt_active');
  // });

  // // ========== CLICK NAV BUTTON HIỆN RA MOBILE MENU ==========
  // $('.mobile-btn').on('click', function () {
  //   //nav button animation thành dấu X
  //   $(this).toggleClass('mobile-nav_active');
  //   //mobile menu hiện ra
  //   $('.mobile_menu').toggleClass('mobile-nav_active');
  // })

  // // ẩn mobile nav khi resize
  // function hideNav () {
  //   $('.mobile-btn').removeClass('mobile-nav_active');
  //   $('.mobile_menu').removeClass('mobile-nav_active');
  // };

  // $(window).on('resize', function () {
  //   if ($(window).innerWidth() > 992) {
  //       hideNav();
  //   }
  // });

  //   //========== SLIDER ==========
  // $('.main-carousel').flickity({
  //   //options
  //   autoPlay: 2000,
  //   cellAlign: 'left',
  //   contain: true,
  //   wrapAround: true,
  //   prevNextButtons: false,
  //   wrapAround: true,
  //   on: {
  //     ready: function() {
  //       let dotted = $('.flickity-page-dots');
  //       paging = $('.dots');
  //       dotted.appendTo(paging)
  //     },
  //     // function khi change slider sẽ trả về một index, lấy index+1 gắn kết quả vào pagingNumber bằng innerHTML, toString, padStart
  //     change: function (index) {
  //       let pagingNumber = $('.number .number-item');
  //       let indexNumber = index + 1;
  //       pagingNumber.html(indexNumber.toString().padStart(2,0));
  //     }
  //   }
  // });

  // // bottom control Btns
  // $('.--prev').on('click', function () {
  //   $('.main-carousel').flickity('previous');
  // });
  // $('.--next').on('click', function() {
  //   $('.main-carousel').flickity('next');
  // })

  //   // ========== PROGRESS BAR ==========
  // setTimeout (function () {
  //   let viewPage = $(window).innerHeight();
  //   let viewBody = $('body').outerHeight();

  //   $(window).on('scroll', function() {
  //     let scrollY = $(window).scrollTop();
  //     let progressPercent = scrollY / (viewBody - viewPage) * 100;
  //     $('.progress-header').css("width", `${progressPercent}%`);
  //     })
  // }, 1000);

  //   // ========== QUALITY POPUP VIDEOS ==========
  // $('.qual_item').on('click', function (button) {
  //   let videoId = $(button).attr('data-video-id');
  //   $('.popup-video iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);
  //   $('.popup-video').css('display', 'flex');
  // });

  // // ========== DESIGN POPUP VIDEOS ==========
  // $('.design_play-btn').on('click', function(e) {
  //   e.preventDefault();
  //   let videoID = $('.design_play-btn').attr('data-video-id');
  //   $('.popup-video iframe').attr('src', 'https://www.youtube.com/embed/' + videoID);
  //   $('.popup-video').css('display', 'flex');
  // });

  // // user click "X" để đóng video
  // $('.close').on('click', function() {
  //   $('.popup-video').css('display', 'none');
  //   //tắt audio khi tắt video
  //   $('.popup-video iframe').attr('src', '');
  // });

  // //users click vào khoảng trống để tắt video thay vì click vào "X"
  // $('.popup-video').on('click', function() {
  //   $('.popup-video').css('display', 'none');
  //   $('.popup-video iframe').attr('src', '');
  // })

  // // ========== MINI SLIDER ==========
  // $('.mini_slider').flickity ({
  //   cellAlign: 'center',
  //   autoPlay: 2000,
  //   freeScroll: true,
  //   contain: true,
  //   prevNextButtons: false,
  //   pageDots: false,
  //   draggable: true,
  //   wrapAround: true,
  //   pauseAutoPlayOnHover: true,
  // })

  // // ======== BACK TO TOP ========
  // function toHeader () {
  //   $(window).scrollTop(0);
  // }
  // $('.footer_right').on('click', toHeader);

  // // nút back to top độc lập bên ngoài footer
  // $('.back-to-top').on('click', toHeader)
  // // nút back to top hiện lên khi scroll qua slider
  // $(document).on('scroll', function() {
  //   let scrollY = $(window).scrollTop();
  //   if (scrollY > $('.products').offset().top - $('header').height()) {
  //     $('.back-to-top').addClass('back-to-top_active')
  //   } else {
  //     $('.back-to-top').removeClass('back-to-top_active')
  //   }
  // });

  // // ======== CLICK VÀO MENU ĐỂ ĐẾN SECTION ========
  

  // //an empty array to store all the section classes
  // let sections = [];
  // $('.menu .menu_item a').each( function(index, element) {
  //   let hashtagRemoved = $(element).attr('href').replace('#','.'); //bỏ dấu '#' để tên thẻ a trùng với tên class của section
  //   // push hrefRemoved vào array sections
  //   sections.push(hashtagRemoved);

  //   $(element).on('click', function(e) {
  //     e.preventDefault();
  //     let sectionPosition = $(sections[index]).offset().top;
  //     $(window).scrollTop(sectionPosition - $('header').height());
  //     $('.menu li a').removeClass('menu-li_active');
  //     $(this).addClass('menu-li_active');
  //   })
  // })
  // console.log(sections);

  // menu item chuyển màu khi scroll
  // $(window).on('scroll', function() {
  //   let positionScroll = $(window).scrollTop();
  //   $(sections).each( function (index, sectionClass) {
  //     if (positionScroll >= $(sectionClass).offset().top - 1) {
  //       $(sections)[index].eq(index).removeClass('menu-li_active');
  //       $(sections)[index].eq(index).addClass('menu-li_active');
  //     } else {
  //       $(sections)[index].eq(index).removeClass('menu-li_active');
  //     }
  //   })
  // })

  // ======== ACCORDION ========

  /* 
  khi thẻ cha card-header được clicked, nếu card-content có chứa class acc-active thì:
    - card-content bỏ class acc-active, trượt lên và ẩn
    - thẻ span bên trong chuyển icon "-" thành "+"

  else (thẻ cha card-header được clicked mà thẻ con card-content ko có class acc-active) thì :
    - tất cả các card-content đều được loại bỏ class acc-active, trượt lên và ẩn
    - tất cả các thẻ span đều chuyển icon "-" thành "+"
    - card-content của thẻ được clicked sẽ được thêm class acc-active, trượt xuống và hiện
    - thẻ span bên trong của thẻ được clicked chuyển icon "+" thành "-"
  */

  

});









