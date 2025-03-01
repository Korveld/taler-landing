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
