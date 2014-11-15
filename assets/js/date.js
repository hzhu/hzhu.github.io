var date = function () {
  var newDate = new Date();
  var friendlyDate = newDate.toDateString();

  var currentDay;
  var dayNumber = newDate.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDay = days[dayNumber];

  var monthNumber = newDate.getMonth();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var currentMonth = months[monthNumber];

  var currentDate = new Date().getDate();
  var currentYear = new Date().getFullYear();
  var stringDate = currentDay + ". " + currentMonth + " " + currentDate + ", " + currentYear;
  return stringDate;
};

// Must be DOM ready
$('document').ready(function(){
  var time = document.getElementsByTagName('time')[0];
  console.log(time, " is time");
  time.innerHTML = date();
});
