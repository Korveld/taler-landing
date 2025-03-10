var controller = new ScrollMagic.Controller();
var mq = window.matchMedia( "(min-width: 767.98px)" );
var mqMob = window.matchMedia( "(max-width: 768px)" );

jQuery(function ($) {
  if ($('.js-reveal-bottom').length) {
    $('.js-reveal-bottom').each(function (index, node) {
      var that = $(this);
      var $triggerNode = $(that.parents('.js-reveal-parent')[0]).find('.js-reveal-bottom-trigger')[0];
      
      var tween = gsap.fromTo(
        this,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out" }
      );
      
      new ScrollMagic.Scene({
        triggerElement: $triggerNode,
        triggerHook: 0.8, // show, when scrolled 10% into view
        duration: "80%"
      })
        .setTween(tween)
        // .addIndicators({name: `reveal bottom ${index}`})
        .addTo(controller);
    });
  }

  if ($('.js-reveal-right').length) {
    $('.js-reveal-right').each(function (index, node) {
      var that = $(this);
      var $triggerNode = $(that.parents('.js-reveal-parent')[0]).find('.js-reveal-right-trigger')[0];
      
      var tween = gsap.fromTo(
        this,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, ease: "power2.out" }
      );

      new ScrollMagic.Scene({
        triggerElement: $triggerNode,
        triggerHook: 0.8, // show, when scrolled 10% into view
        duration: "80%",
        offset: 100
      })
        .setTween(tween)
        // .addIndicators({name: `reveal right ${index}`})
        .addTo(controller);
    });
  }

  if ($('.js-video-trigger').length) {
    $('.js-video-trigger').each(function (index, node) {
      var that = $(this);
      var video = $(this).find('.js-video-node')[0];

      var scene = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: that[0],
        triggerHook: 0.8,
        reverse: false,
      })
        // .addIndicators({name: `video play ${index}`})
        .addTo(controller);
      scene.on("enter", function () {
        // console.log('video enter');
        video.pause();
        video.currentTime = 0.1;
        video.play();
      });
      scene.on("leave", function () {
        // console.log('video leave');
        // video.pause();
        // video.currentTime = 0.1;
      });
    });
  }
});

jQuery(function ($) {
  $('.dropdown__selected').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.dropdown__drop-list').fadeToggle(300);
    $(this).parent().toggleClass('is-open');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).hasClass('dropdown') && $(e.target).parents('.dropdown').length === 0) {
      $('.dropdown__drop-list').fadeOut(300);
      $('.dropdown').removeClass('is-open');
    }
  });
});

jQuery(function ($) {

  $('.faq__question').on('click', function(e) {
    e.preventDefault();
    if ($(this).parent().hasClass('is-open')) {
      $(this).parent().removeClass('is-open');
      $(this).next().slideUp({
        duration: 500,
        start: function() {
          $(this).find('.faq__answer-wrapper').css('opacity', '0');
        }
      });
    } else {
      $(this).parent().addClass('is-open');
      $(this).next().slideDown({
        duration: 500,
        // complete: function() {
        //   $(this).find('.faq__answer-wrapper').css('opacity', '1');
        // },
        progress: function(animation, progress, remainingMs) {
          if (remainingMs < 100) {
            $(this).find('.faq__answer-wrapper').css('opacity', '1');
          }
        }
      });
    }
  });

});

jQuery(function ($) {

  if (!$.cookie('cookiesAccepted') || $.cookie('cookiesAccepted') === 'false') {
    $('.cookie-banner').fadeIn(300);
  }
  
  $('#accept-cookies').on('click', function (e) {
    e.preventDefault();
    $.cookie('cookiesAccepted', 'true', { expires: 365, path: '/' });
    $('.cookie-banner').fadeOut(300);
  });

  $('#reject-cookies').on('click', function (e) {
    e.preventDefault();
    $.cookie('cookiesAccepted', 'false', { expires: 365, path: '/' });
    $('.cookie-banner').fadeOut(300);
  });
  
});

jQuery(function ($) {
  $('.lang-switcher__current').on('click', function (e) {
    e.preventDefault();
    $('.header__overlay').fadeToggle(300);
    $('.lang-switcher__dropdown').fadeToggle(300);
  });

  $(document).on('click', function (e) {
    if (!$(e.target).hasClass('lang-switcher') && $(e.target).parents('.lang-switcher').length === 0) {
      $('.lang-switcher__dropdown').fadeOut(300);
      $('.header__overlay').fadeOut(300);
    }
  });
});

jQuery(function ($) {
  $("body").css("overflow", "hidden");
  
  var $video = $(".intro-video video");
  if ($video.length) {
    $video[0].play();

    $video.on("timeupdate", function () {
      // console.log(this.currentTime);
      if (this.currentTime >= 1.5) {
        $(".site-content").addClass("show");
      }

      if (this.currentTime >= 2) {
        $(".hero__text").addClass("show");
        $("body").css("overflow", "");
        $video.off("timeupdate");
      }
      $('html, body').animate({
        scrollTop: 0
      }, 0);
    });

    /*$video.on('ended', function () {
      $('.hero').addClass("hero--show-bg");
    });*/
  }
});

jQuery(function ($) {
});

jQuery(function ($) {
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.menu').fadeIn(500);
    $('body').css('overflow', 'hidden');
  });
  $('.menu__burger').on('click', function (e) {
    e.preventDefault();
    $('.menu').fadeOut(500, function() {
      $('body').css('overflow', '');
    });
  });

  $('.menu__list li a').on('click', function(e) {
    e.preventDefault();

    var $container = $('html, body'),
      $scrollTo = $($($(this).attr('href')));

    $('.menu').fadeOut(500);
    $('body').css('overflow', '');
    $container.animate({
      scrollTop: $scrollTo.offset().top
    }, 500);
  });
});

jQuery(function ($) {
  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();

    var $container = $('html, body'),
      $scrollTo = $($($(this).attr('href')));
    
    /*$container.scrollTop(
      $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
    );*/
    $container.animate({
      scrollTop: $scrollTo.offset().top
    }, 500);
  });
});
