var controller=new ScrollMagic.Controller,mq=window.matchMedia("(min-width: 767.98px)"),mqMob=window.matchMedia("(max-width: 768px)");function heroVideoAnimation(e){var o=[],t=e-1,n=$(".hero")[0].scrollHeight,r=$(window).height(),i=e=>`./public/videos/video1/intro_video${e.toString().padStart(3,"0")}.jpg`;!function(){for(let e=0;e<=t;e++)o.push(i(e))}();var a={curImg:0},c=TweenMax.to(a,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$(".hero__anim-img").attr("src",o[a.curImg])}});new ScrollMagic.Scene({triggerElement:".hero",duration:n-r,triggerHook:0,offset:0}).setTween(c).addTo(controller)}function heroTextReveal(){var e=$(".hero")[0].scrollHeight,o=$(window).height(),t=(e-o)/2.3,n=gsap.fromTo(".hero__text",{opacity:0,y:"100%"},{opacity:1,y:0,ease:"power2.out"});new ScrollMagic.Scene({triggerElement:".hero",triggerHook:0,offset:t,duration:"100%"}).on("progress",function(e){var o=Math.floor(100*e.progress),t=e.state,n=e.scrollDirection;console.log(t,n,o),"DURING"===t&&"FORWARD"===n&&o>=8&&$(".hero__down").fadeOut(300),"DURING"===t&&"REVERSE"===n&&o<=10&&$(".hero__down").fadeIn(300),"AFTER"===t&&"FORWARD"===n&&o>=8&&$(".hero__down").fadeOut(300)}).setTween(n).addTo(controller)}function mobileVideoAnimation(e){var o=[],t=e-1,n=$(".mobile-video__section")[0].scrollHeight,r=$(window).height(),i=e=>`./public/videos/video2/video${e.toString().padStart(3,"0")}.jpg`;!function(){for(let e=0;e<=t;e++)o.push(i(e))}();var a={curImg:0},c=TweenMax.to(a,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$(".mobile-video__video-wrapper img").attr("src",o[a.curImg])}});new ScrollMagic.Scene({triggerElement:".mobile-video__section",duration:n-r,triggerHook:0,offset:0}).setTween(c).addTo(controller)}function desktopAppHeightHandler(e){e&&$(".desktop-app").height(e)}jQuery(function(e){e(".js-reveal-bottom").length&&e(".js-reveal-bottom").each(function(o,t){var n=e(this),r=e(n.parents(".js-reveal-parent")[0]).find(".js-reveal-bottom-trigger")[0],i=gsap.fromTo(this,{opacity:0,y:100},{opacity:1,y:0,ease:"power2.out"});new ScrollMagic.Scene({triggerElement:r,triggerHook:.8,duration:"80%"}).setTween(i).addTo(controller)}),e(".js-reveal-right").length&&e(".js-reveal-right").each(function(o,t){var n=e(this),r=e(n.parents(".js-reveal-parent")[0]).find(".js-reveal-right-trigger")[0],i=gsap.fromTo(this,{opacity:0,x:100},{opacity:1,x:0,ease:"power2.out"});new ScrollMagic.Scene({triggerElement:r,triggerHook:.8,duration:"80%",offset:100}).setTween(i).addTo(controller)}),e(".js-video-trigger").length&&e(".js-video-trigger").each(function(o,t){var n=e(this),r=e(this).find(".js-video-node")[0],i=new ScrollMagic.Scene({duration:"100%",triggerElement:n[0],triggerHook:.8,reverse:!1}).addTo(controller);i.on("enter",function(){r.pause(),r.currentTime=.1,r.play()}),i.on("leave",function(){})})}),jQuery(function(e){let o=0,t=0,n=0,r=0;function i(i){let a=Math.floor(o/t*100);e(".preloader__bar-filler").css("width",a+"%"),o===t&&e("#preloader").fadeOut(500,function(){e("#siteContent").css("visibility","visible"),e("body").css("overflow",""),heroVideoAnimation(n),mobileVideoAnimation(r),heroTextReveal()})}function a(e){let o=new Image;return o.src=e,o.complete&&0!==o.naturalHeight}e(".hero").length&&e.getJSON("./public/config.json",function(e){var c;t=(c=e).totalImages,n=c.imagesPerFolder.folder1,r=c.imagesPerFolder.folder2,["video1","video2"].forEach((e,t)=>{let n=c.imagesPerFolder[`folder${t+1}`]||0;for(let t=0;t<=n-1;t++){let n;if(a(n="video1"===e?`./public/videos/${e}/intro_video${String(t).padStart(3,"0")}.jpg`:`./public/videos/${e}/video${String(t).padStart(3,"0")}.jpg`))o++,i();else{let e=new Image;e.src=n,e.onload=e.onerror=function(){o++,i()}}}})}).fail(function(){console.error("Failed to load config.json")})}),jQuery(function(e){e.cookie("cookiesAccepted")&&"false"!==e.cookie("cookiesAccepted")||e(".cookie-banner").fadeIn(300),e("#accept-cookies").on("click",function(o){o.preventDefault(),e.cookie("cookiesAccepted","true",{expires:365,path:"/"}),e(".cookie-banner").fadeOut(300)}),e("#reject-cookies").on("click",function(o){o.preventDefault(),e.cookie("cookiesAccepted","false",{expires:365,path:"/"}),e(".cookie-banner").fadeOut(300)})}),jQuery(function(e){}),$(window).on("load",function(){var e=new ScrollMagic.Controller,o=(window.matchMedia("(min-width: 767.98px)"),window.matchMedia("(max-width: 768px)"),$(".desktop-app__wrapper")),t=$(".desktop-app"),n=$(window).height(),r=o.height(),i=["first-trigger","second-trigger"];desktopAppHeightHandler($(".desktop-app__img--1").height()),new ScrollMagic.Scene({triggerElement:o[0],triggerHook:0,duration:r-n}).on("progress",function(e){var o=Math.floor(100*e.progress),n=e.state,r=e.scrollDirection;"DURING"===n&&"FORWARD"===r&&(o>20&&o<60&&(i.forEach(function(e){t.removeClass(e)}),t.addClass(i[0])),o>60&&o<100&&(i.forEach(function(e){t.removeClass(e)}),t.addClass(i[1]))),"DURING"===n&&"REVERSE"===r&&(o<20&&i.forEach(function(e){t.removeClass(e)}),o<60&&o>20&&(i.forEach(function(e){t.removeClass(e)}),t.addClass(i[0])),o<100&&o>60&&(i.forEach(function(e){t.removeClass(e)}),t.addClass(i[1])))}).addTo(e)}),$(window).on("resize",function(){desktopAppHeightHandler($(".desktop-app__img--1").height())}),jQuery(function(e){e(".dropdown__selected").on("click",function(o){o.preventDefault(),e(this).siblings(".dropdown__drop-list").fadeToggle(300),e(this).parent().toggleClass("is-open")}),e(document).on("click",function(o){e(o.target).hasClass("dropdown")||0!==e(o.target).parents(".dropdown").length||(e(".dropdown__drop-list").fadeOut(300),e(".dropdown").removeClass("is-open"))})}),jQuery(function(e){e(".faq__question").on("click",function(o){o.preventDefault(),e(this).parent().hasClass("is-open")?(e(this).parent().removeClass("is-open"),e(this).next().slideUp({duration:500,start:function(){e(this).find(".faq__answer-wrapper").css("opacity","0")}})):(e(this).parent().addClass("is-open"),e(this).next().slideDown({duration:500,progress:function(o,t,n){n<100&&e(this).find(".faq__answer-wrapper").css("opacity","1")}}))})}),jQuery(function(e){e(".lang-switcher__current").on("click",function(o){o.preventDefault(),e(".header__overlay").fadeToggle(300),e(".lang-switcher__dropdown").fadeToggle({duration:300,start:function(){e(this).is(":visible")&&e(this).css({display:"flex",flexDirection:"column",justifyContent:"flex-end"})}})}),e(document).on("click",function(o){e(o.target).hasClass("lang-switcher")||0!==e(o.target).parents(".lang-switcher").length||(e(".lang-switcher__dropdown").fadeOut(300),e(".header__overlay").fadeOut(300))})}),jQuery(function(e){}),jQuery(function(e){e(".header__burger").on("click",function(o){o.preventDefault(),e(".menu").fadeIn(500),e("body").css("overflow","hidden")}),e(".menu__burger").on("click",function(o){o.preventDefault(),e(".menu").fadeOut(500,function(){e("body").css("overflow","")})}),e(".menu__list:not(.no-scroll) li a").on("click",function(o){o.preventDefault();var t=e("html, body"),n=e(e(e(this).attr("href")));e(".menu").fadeOut(500),e("body").css("overflow",""),t.animate({scrollTop:n.offset().top},500)})}),jQuery(function(e){e(".js-scroll-to").on("click",function(o){o.preventDefault();var t=e("html, body"),n=e(e(e(this).attr("href")));t.animate({scrollTop:n.offset().top},500)})});