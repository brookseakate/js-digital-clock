var showTime = function() {
  this.time = new Date();
  return this.time.toLocaleTimeString();
};

$(document).ready(function() {
  var intervalID = window.setInterval( function() {
    $('#clock').html(showTime);
  }, 1000);
});
