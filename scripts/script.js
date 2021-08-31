'use strict';

var win = $(window);
function addAnimation(element, animation) {
  const allElements = $(element);
  //   allElements.each(function (i, el) {
  //     var element = $(el);
  //     if (element.visible(true)) {
  //       element.addClass('already-visible');
  //     }
  //   });

  win.scroll(function (event) {
    allElements.each(function (i, el) {
      var element = $(el);
      if (element.visible(true)) {
        element.addClass(animation);
      }
    });
  });
}

addAnimation('.moveInRight', 'text-moveInRight');
addAnimation('.moveInLeft', 'text-moveInLeft');
addAnimation('.avatar-box', 'fadeIn');
addAnimation('img', 'fadeIn');
