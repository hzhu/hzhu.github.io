// Check if device is mobile
var isMobile;
(function(){
  var index = navigator.appVersion.indexOf("Mobile");
  isMobile = (index > -1);
})();

$(document).ready(function(){
	// FitText.js
  jQuery(".hero h1").fitText(1.5, {minFontSize: '45px', maxFontSize: '195px'});

  var photos = ["photo1", "photo2", "photo3", "photo4", "photo5"];
  var randomNumber = Math.floor(Math.random() * 4 + 1);

  // Load page with random pic
  $(".member").addClass("photo" + randomNumber);
  // Change pic on click to random pic
  $('.box .member').on("click", function() {
    $(this).removeClass();
    $(this).addClass("member photo" + Math.floor(Math.random() * 4 + 1));
  });


  if (!isMobile) {
    d3.select('.box .member')
	    .transition()
	    .duration(1000)
	    .style("opacity", 1);

    $('.box .member').hover(function() {
      d3.select('.box .member')
        .transition()
        .duration(300)
        .style("opacity", 1);

      d3.select('.img-container')
        .transition()
        .duration(300)
        .style("opacity", 1);
    }, function() {
      d3.select('.henry-img')
        .transition()
        .duration(3500)
        .style("opacity", 0.5);
    });

    $('.box .member').mouseout(function() {
        d3.select('.box .member')
        .transition()
        .duration(300)
        .style("opacity", 0.7);
    });
  }




setTimeout(function(){
  $(".box .member").css("-webkit-transition", "all .5s ease-in");
}, 1000);





// $(".box .member").on('click', function() {

//   $(".box .member").animate({
//     opacity: 0.3
//   }, 300);

// });






});