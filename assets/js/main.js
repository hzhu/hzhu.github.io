// Check if device is mobile
var isMobile;
(function(){
  var index = navigator.appVersion.indexOf("Mobile");
  isMobile = (index > -1);
})();

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array[0];
}


setTimeout(function(){
  $(".box .member").css("-webkit-transition", "all .3s ease");
}, 1000);

// For Dom Ready Stuffs
$(document).ready(function(){
  mixpanel.track("Page Loaded");
	// FitText.js
  jQuery(".hero h1").fitText(1.5, {minFontSize: '45px', maxFontSize: '195px'});

  var photos = ["photo1", "photo2", "photo3", "photo4"];
  var randomPicture = shuffleArray(photos);

  // Load page with random pic
  $(".member").addClass(randomPicture);

  // Change pic on click to random pic
  $('.box .member').on("click", function() {
    mixpanel.track("Mugshot clicked");
    $(this).removeClass();
    $(this).addClass("member " + shuffleArray(photos));
  });

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
});