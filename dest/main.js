// ========== ĐỔI MÀU HEADER KHI SCROLL QUA PRODUCTS ==========
let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;

// bắt sự kiện scroll
document.addEventListener('scroll', function(){
    let scrollY = window.pageYOffset;
    if (scrollY > heightSlider -  heightHeader) {
        header.classList.add('background_active');
    } else {
        header.classList.remove('background_active');
    }
});
// ------------------------------------------------------------------




// ========== LANGUAGE OPTIONS ==========
// gán biến:
let lang = document.querySelector('.lang'); 
let langCurrent = document.querySelector('.lang .lang-cur span');
let langOpt = document.querySelector('.lang .lang-opt')
let langItems = document.querySelectorAll('.lang .lang-opt a');

// click lang => hiện lang options
lang.addEventListener('click', function (e) {
    e.stopPropagation();
    lang.classList.toggle('lang-opt_active');
});

// chọn 1 lang item trong lang option thế chỗ lang current, lấy textcontent của item được chọn gắn lên thay thế lang current. Tạo biến lưu trữ lang current
langItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent; // text hiện tại của thẻ span ("VN") được lưu trữ trong biến langCurrentSpan
        langCurrent.innerHTML = langText; // option sau khi click sẽ nhảy lên thế chỗ langCurrent
        this.innerHTML = langCurrentSpan; // text được lưu trữ trong langCurrentSpan sẽ nhảy vào langOpt
    })
})

// click ngoài vùng trống (click vào document thì tắt lang option modal)
document.addEventListener('click', function() {
    lang.classList.remove('lang-opt_active');
})


// ========== CLICK NAV BUTTON HIỆN RA MOBILE MENU ==========
// ========== NAV BUTTON BIẾN THÀNH "X" ==========
let btnNav = document.querySelector('.mobile-btn'),
mobileMenu = document.querySelector('.mobile_menu');
btnNav.addEventListener('click', function(){
    this.classList.toggle('mobile-nav_active');
    mobileMenu.classList.toggle('mobile-nav_active');
})
// ------------------------------------------------------------------

// hide mobile nav when resize
function hideNav () {
    btnNav.classList.remove('mobile-nav_active');
    mobileMenu.classList.remove('mobile-nav_active');
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
        hideNav ();
    }
})


//purple: #B69FC5
//blue: #487A83
//red: #A87983
//green: #8FA77D
//yellow: #E5DABB


// ====== SLIDER ======
let carouselMain = document.querySelector('.main-carousel');
let flkty = new Flickity(carouselMain, {
    // options
    autoPlay: 2800,
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    wrapAround: true,
    selectedAttraction: 0.01,
    friction: 0.25,
    on: {
        ready: function () {
            let dotted = $('.flickity-page-dots');
            paging = $('.dots');
            dotted.appendTo(paging);
        },
        // function khi change slider sẽ trả về một index, lấy index+1 gắn kết quả vào pagingNumber bằng innerHTML, toString, padStart
        change: function(index) {
            let pagingNumber = document.querySelector('.slider_bottom-paging .number .number-item');
            let indexNumber = index + 1;
            pagingNumber.innerHTML = indexNumber.toString().padStart(2, 0);
        }
    }
});

let prevBtn = document.querySelector('.--prev');
let nextBtn = document.querySelector('.--next');

prevBtn.addEventListener('click', function() {
    flkty.previous();
  });
nextBtn.addEventListener('click', function () {
    flkty.next();
})


//PROGRESS BAR
$(document).ready( function() {
    setTimeout( function() {
        let viewPage = $(window).innerHeight();
        let viewBody = $('body').outerHeight();
        $(window).scroll( function() {
            let scrollY = $(window).scrollTop();
            let progressPercent = scrollY / (viewBody - viewPage) * 100;
            $('.progress-header').css("width", `${progressPercent}%`);
        })
    }, 1000) 
})




// mini slider
$(document).ready( function() {
    $('.mini_slider').flickity( {
        cellAlign: "left",
        autoPlay: 1500,
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        pauseAutoPlayOnHover: false,
        selectedAttraction: 0.01,
        friction: 0.2,
    })
    $('.card-header').on('click', function () {
        if ($(this).next('.card-content').hasClass('acc-active')) {
          $(this).next('.card-content').removeClass('acc-active').slideUp();
          $(this).children('span').removeClass('fa-minus').addClass('fa-plus');
        } else {
          $('.card .card-content').removeClass('acc-active').slideUp();
          $('.card-header span').removeClass('fa-minus').addClass('fa-plus');
          $(this).next('.card-content').addClass('acc-active').slideDown();
          $(this).children('span').removeClass('fa-plus').addClass('fa-minus');
        }
      })
});




// ========== QUALITY POPUP VIDEOS ==========
let videoButton = document.querySelectorAll('.qual_item');
let popupVideo = document.querySelector('.popup-video');
let iframe = document.querySelector('.popup-video iframe');
videoButton.forEach (function (button) {
    button.addEventListener('click', function () {
        let videoId = button.getAttribute('data-video-id');
        // different IDs of different videos:
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
        popupVideo.style.display = 'flex';
        
    })
})

// DESIGN POPUP VIDEOS
let designVideoBtn = document.querySelector('.design .text_container .design_play-btn');
designVideoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let videoId2 = designVideoBtn.getAttribute('data-video-id');
    // different IDs of different videos:
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId2);
    popupVideo.style.display = 'flex';
})

// users click vào khoảng trống để tắt video thay vì click vào "X"
let outerSpaceCloseVid = document.querySelector('.popup-video')
outerSpaceCloseVid.addEventListener('click', function () {
    popupVideo.style.display = 'none';
    iframe.setAttribute('src', '');
})

// user click "X" để đóng video
let closeVideoPopup = document.querySelector('.popup-video .iframe-wrapper .close');
closeVideoPopup.addEventListener('click', function () {
    popupVideo.style.display = 'none';
    //tắt tiếng khi tắt video (set link video thành chuỗi rỗng)
    iframe.setAttribute('src', '');
})

// ------------------------------------------------------------------




// ========== FOOTER - BACK TO TOP ==========
let footerBackToTop = document.querySelector('footer .container .footer_right');
function toHeader () {
    window.scrollTo(0, 0);
}
footerBackToTop.addEventListener('click', toHeader);

// nút backToTop độc lập bên ngoài footer
let backToTop = document.querySelector('.back-to-top')
backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
    })
})
// nút backToTop hiện lên khi scroll qua slider
// gán biến chứa chiều cao section products
let positionProduct = document.querySelector('.products').offsetTop;

document.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    if (scrollY > positionProduct - heightHeader) {
        backToTop.classList.add('back-to-top_active');
    } else {
        backToTop.classList.remove('back-to-top_active');
    }
})
// ------------------------------------------------------------------





// ========== CLICK VÀO MENU ĐỂ ĐẾN SECTION ==========
function removeActive () {
    menu.forEach (function(menuElement, menuIndex) {
        menuElement.classList.remove('menu-li_active');
    })
}

//an array that stores all the section classes
let sectionsArray = [];
//navigation with header's li tags
let menu = document.querySelectorAll('.menu .menu_item a'); // an array that needs a loop that loops through it
menu.forEach(function (element, index) {
    let href = element.getAttribute('href');
    let removeHashtag = href.replace('#', '');
    let sectionClass = document.querySelector('.' + removeHashtag); //bỏ dấu "#" để tên thẻ a trùng với tên class của section

    //push section class vào sectionArray
    sectionsArray.push(sectionClass);
    
    element.addEventListener('click', function (e) {
        e.preventDefault();
        let sectionPosition = sectionClass.offsetTop;
        window.scrollTo({
            top: sectionPosition + 1,
            behavior: 'smooth',
        });

        // menu item active có màu vàng, các item còn lại có màu xám
        removeActive();
        element.classList.add('menu-li_active');
    });
});

// menu nav item chuyển màu khi scroll
window.addEventListener('scroll', function (e) {
    let positionScroll = window.pageYOffset;
    sectionsArray.forEach(function(sectionClass, index) {
        if(positionScroll >= sectionClass.offsetTop) {
            removeActive();
            menu[index].classList.add('menu-li_active');
        } else {
            menu[index].classList.remove('menu-li_active')
        }
    })
});





var initPhotoSwipeFromDOM = function(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements 
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item;

      for(var i = 0; i < numNodes; i++) {

          figureEl = thumbElements[i]; // <figure> element

          // include only element nodes 
          if(figureEl.nodeType !== 1) {
              continue;
          }

          linkEl = figureEl.children[0]; // <a> element

          size = linkEl.getAttribute('data-size').split('x');

          // create slide object
          item = {
              src: linkEl.getAttribute('href'),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
          };



          if(figureEl.children.length > 1) {
              // <figcaption> content
              item.title = figureEl.children[1].innerHTML; 
          }

          if(linkEl.children.length > 0) {
              // <img> thumbnail element, retrieving thumbnail url
              item.msrc = linkEl.children[0].getAttribute('src');
          } 

          item.el = figureEl; // save link to element for getThumbBoundsFn
          items.push(item);
      }

      return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
      return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var eTarget = e.target || e.srcElement;

      // find root element of slide
      var clickedListItem = closest(eTarget, function(el) {
          return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
      });

      if(!clickedListItem) {
          return;
      }

      // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute
      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
          if(childNodes[i].nodeType !== 1) { 
              continue; 
          }

          if(childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
          }
          nodeIndex++;
      }



      if(index >= 0) {
          // open PhotoSwipe if valid index found
          openPhotoSwipe( index, clickedGallery );
      }
      return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
      var hash = window.location.hash.substring(1),
      params = {};

      if(hash.length < 5) {
          return params;
      }

      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
          if(!vars[i]) {
              continue;
          }
          var pair = vars[i].split('=');  
          if(pair.length < 2) {
              continue;
          }           
          params[pair[0]] = pair[1];
      }

      if(params.gid) {
          params.gid = parseInt(params.gid, 10);
      }

      return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;

      items = parseThumbnailElements(galleryElement);

      // define options (if needed)
      options = {

          // define gallery index (for URL)
          galleryUID: galleryElement.getAttribute('data-pswp-uid'),

          getThumbBoundsFn: function(index) {
              // See Options -> getThumbBoundsFn section of documentation for more info
              var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                  pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect(); 

              return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
          }

      };

      // PhotoSwipe opened from URL
      if(fromURL) {
          if(options.galleryPIDs) {
              // parse real index when custom PIDs are used 
              // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
              for(var j = 0; j < items.length; j++) {
                  if(items[j].pid == index) {
                      options.index = j;
                      break;
                  }
              }
          } else {
              // in URL indexes start from 1
              options.index = parseInt(index, 10) - 1;
          }
      } else {
          options.index = parseInt(index, 10);
      }

      // exit if index not found
      if( isNaN(options.index) ) {
          return;
      }

      if(disableAnimation) {
          options.showAnimationDuration = 0;
      }

      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i+1);
      galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid && hashData.gid) {
      openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
  }
};


// $(document).on('ready', () => {
//   initPhotoSwipeFromDOM('.carousel-img');
// })

window.addEventListener('load', function(){
  initPhotoSwipeFromDOM('.carousel-img');
})
