const timer = require('./index')
const moment = require('moment')

const timestamp = 1649388544000; // or any other valid timestamp format
try {
  const now = moment().valueOf() +2;
console.log(now);
 setInterval(()=>{
  const timeString = timer(now);
       console.log(timeString);
 },1000)// "a few seconds", "5 minutes", "an hour", "3 days", etc.
} catch (error) {
  console.error(error.message);
}