$(document).ready(function() {

  var logo = function () {
    var width = $(window).width(),
        height = $(window).height(),
        maxWidth = function () {
          return Math.min(width / 16, height / 8.66) * 16
        },
        maxHeight = function () {
          return Math.min(width / 16, height / 8.66) * 8.66
        },
        maxFont = function () {
          return Math.min(width / 16, height / 8.66)
        }

    $('.h').css({
      position : 'absolute',
      left : maxWidth() / 5,
      top : -1 * maxHeight() / 3.958,
      'font-size' : maxFont() * 8
    });

    $('.ex').css({
      position : 'absolute',
      left : maxWidth() / 2,
      top : -1 * maxHeight() / 7.9,
      'font-size' : maxFont() * 5
    });

    $('.base').css({
      position : 'absolute',
      left : maxWidth() / 2,
      top : maxHeight() / 2.6,
      'font-size' : maxFont() * 2.55
    });

    $('.coming').css({
      position : 'absolute',
      left : maxWidth() / 2.55,
      top : maxHeight() / 1.5,
      'font-size' : maxFont() * 0.8
    });

    $('.git').css({
      position : 'absolute',
      left : maxWidth() / 2.8,
      top : maxHeight() / 1.25,
    });

    $('.goo').css({
      position : 'absolute',
      left : maxWidth() / 1.8,
      top : maxHeight() / 1.25,
    });

    $('.button').css({
      'font-size' : maxFont() * 0.2,
      width  : maxFont() * 2.5,
      height : maxFont() / 2
    });

  }
  logo();
  $(window).resize(logo);
});
