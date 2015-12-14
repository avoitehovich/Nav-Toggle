$(document).ready(function() {
  var $navBtn = $('.navigation');

  // console.log($navBtn);

  $('body').on('click', $navBtn, function() {
    // console.log('clicked');

    // add class to toggle nav button
    $(this).toggleClass('nav-opened');
  });

});
