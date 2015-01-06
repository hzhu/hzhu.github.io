// Check if device is mobile
var isMobile;
(function(){
  var index = navigator.appVersion.indexOf("Mobile");
  isMobile = (index > -1);
})();

$(document).ready(function(){
  mixpanel.track("Page Loaded");
	// FitText.js
  jQuery(".hero h1").fitText(1.5, {minFontSize: '45px', maxFontSize: '195px'});
});