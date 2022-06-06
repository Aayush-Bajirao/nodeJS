const os = require('os');

var ut_sec = os.uptime();
var ut_min = Math.floor(ut_sec/60);
var ut_hour = Math.floor(ut_min/60);

ut_sec = ut_sec % 60
ut_min = ut_min % 60
ut_hour = ut_hour % 60

console.log('Up Time For Machine is')
console.log('               Hours', ut_hour);
console.log('               Minutes ', ut_min);
console.log('               Seconds ', ut_sec);