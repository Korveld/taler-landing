var controller=new ScrollMagic.Controller,mq=window.matchMedia("(min-width: 767.98px)"),mqMob=window.matchMedia("(max-width: 768px)");jQuery(function(e){if(e("#animate_icon_1").length&&mq.matches)new ScrollMagic.Scene({triggerElement:"#trigger_animate_icon_1",duration:400}).setTween("#animate_icon_1",{scale:1}).addTo(controller)}),jQuery(function(e){e.cookie("cookiesAccepted")&&"false"!==e.cookie("cookiesAccepted")||e(".cookie-banner").fadeIn(300),e("#accept-cookies").on("click",function(o){o.preventDefault(),e.cookie("cookiesAccepted","true",{expires:365,path:"/"}),e(".cookie-banner").fadeOut(300)}),e("#reject-cookies").on("click",function(o){o.preventDefault(),e.cookie("cookiesAccepted","false",{expires:365,path:"/"}),e(".cookie-banner").fadeOut(300)})}),jQuery(function(e){e(".dropdown__selected").on("click",function(o){o.preventDefault(),e(this).siblings(".dropdown__drop-list").fadeToggle(300),e(this).parent().toggleClass("is-open")}),e(document).on("click",function(o){e(o.target).hasClass("dropdown")||0!==e(o.target).parents(".dropdown").length||(e(".dropdown__drop-list").fadeOut(300),e(".dropdown").removeClass("is-open"))})}),jQuery(function(e){e("body").css("overflow","hidden");var o=e(".intro-video video");o.length&&(o[0].play(),o.on("timeupdate",function(){console.log(this.currentTime),this.currentTime>=1.5&&e(".site-content").addClass("show"),this.currentTime>=2&&(e(".hero__text").addClass("show"),e("body").css("overflow",""),o.off("timeupdate")),e("html, body").animate({scrollTop:0},0)}))}),jQuery(function(e){e(".lang-switcher__current").on("click",function(o){o.preventDefault(),e(".header__overlay").fadeToggle(300),e(".lang-switcher__dropdown").fadeToggle(300)}),e(document).on("click",function(o){e(o.target).hasClass("lang-switcher")||0!==e(o.target).parents(".lang-switcher").length||(e(".lang-switcher__dropdown").fadeOut(300),e(".header__overlay").fadeOut(300))})}),jQuery(function(e){}),jQuery(function(e){e(".js-scroll-to").on("click",function(o){o.preventDefault();var n=e("html, body"),t=e(e(e(this).attr("href")));n.animate({scrollTop:t.offset().top-n.offset().top+n.scrollTop()},500)})}),jQuery(function(e){e(".header__burger").on("click",function(o){o.preventDefault(),e(".menu").fadeIn(500),e("body").css("overflow","hidden")}),e(".menu__burger").on("click",function(o){o.preventDefault(),e(".menu").fadeOut(500,function(){e("body").css("overflow","")})})});