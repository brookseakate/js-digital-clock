var showLocalTime = function() {
  var time = new Date();
  var displayTime = time.toLocaleTimeString();
  return $('#clock').html('<h3>' + displayTime + '</h3>');
};

$(document).ready(function() {
  var intervalID = window.setInterval(showLocalTime, 1000);
});

// Date.prototype.getTimezoneOffset()
// Returns the time-zone offset in minutes for the current locale.
