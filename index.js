// Your code here
var showTime = function() {
  this.time = new Date();
  return this.time.toLocaleTimeString();
};


// var showTime = function() {
//   this.time = new Date();
//   this.hour = Hour(this.time);
//   this.minute = Minute(this.time);
//   this.second = Second(this.time);
//   return this.hour + ":" + this.minute + ":" + this.second;
// };
//
// var Hour = function(time) {
//   return time.getUTCHours();
// };
//
// var Minute = function(time) {
//   return time.getUTCMinutes();
// };
//
// var Second = function(time) {
//   return time.getUTCSeconds();
// };
//



$(document).ready(function() {
  $('#clock').append(showTime);
});
