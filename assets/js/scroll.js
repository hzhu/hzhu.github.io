$(document).ready(function() {
  var windowScroll;


  // If large viewport and not mobile, parallax the title
  if(!isMobile) {
    $(window).scroll(function() {
      slidingTitle();
    });
  }

  // Window gets large enough, need to recalc all parallaxing title values
  $(window).resize(function() {
      slidingTitle();
  });

  // Functional parallaxing calculations
  function slidingTitle() {
    //Get scroll position of window
    windowScroll = $(this).scrollTop();
    //Fade the .nav out
    $('.hero .img-container').css({
      'opacity' : 1-(windowScroll/240)
    });

    $('.hero svg').css({
      'opacity' : 1-(windowScroll/400)
    });

    $('.hero ul').css({
      'opacity' : 1-(windowScroll/400)
    });

    $('.hero p').css({
      'opacity' : 1-(windowScroll/400)
    });

    $('.hero h1').css({
      'opacity' : 1-(windowScroll/400)
    });

    $('.email').css({
      'opacity' : 1-(windowScroll/800)
    });

    // var x = 1-(windowScroll+10/900);
    // console.log(x, ' the opacity');

    // if (windowScroll > 475) {
    //   $('.hero').css({
    //     'opacity' : x
    //   });   
    // } else {
    //   $('.hero').css({
    //     'opacity': 1
    //   });
    // }
  }

  $('.title').click(function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  })

});