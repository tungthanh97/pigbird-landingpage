'use strict';

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  const height = $(window).height();
  const offset = height / 3;
  $('.header__image').css({
    opacity: 1 - (scrollTop - offset) / (height - offset),
  });
});
