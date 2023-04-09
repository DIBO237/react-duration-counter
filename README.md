# react-duration-counter

This is a duration counter for counting elapsed time in human readable format , we can use it in blog or webinar website to show published period or elapsed time

# Here is the first example for function humanDate() formatting:

The humanTime function is a utility that takes a timestamp and returns the time elapsed between the timestamp and the current time in a human-readable format. This function can be useful for displaying the time elapsed since a certain event, such as a post publication or a user registration.

```javascript 
 const {humanTime, relativeDate } = require('react-duration-counter')

// INPUT YOUR TIME HERE IN ANY FORMAT 
const published_at = 1680862065904;
 // or any other valid timestamp format
try {
  

  console.log(published_at);
  
  // EXAMPLE INTERVAL I HAVE GIVE NFOR SIMULATION
  setInterval(() => {
   
   // TIMER FUNCTION IS OUR REACT-DURATION-COUNTER
    const timeString = humanTime(published_at);
    console.log(timeString);

  }, 1000); // " 1 second or 2 seconds", "1 minute or 2 minutes", "1 hour or 2 hours", "1 day or 2 days ", etc.

} catch (error) {

  console.error(error.message);
}

```

# Here is the second function for relativeDate formatting:

"relativeDate" is a lightweight and efficient JavaScript function that allows you to format a given date into a human-readable string that describes its relationship to the current date. It provides simple and customizable output options such as "Today," "Yesterday," "Last Weekday," "Month and Date," or "Year, Month, and Date" depending on the time elapsed between the two dates. This function uses the popular "moment.js" library to ensure accurate and consistent date parsing and formatting.

```javascript 
 const {humanTime, relativeDate } = require('react-duration-counter')

// INPUT YOUR TIME HERE IN ANY FORMAT 
const published_at = 1680862065904;
 // or any other valid timestamp format
try {
  

console.log(relativeDate('2023-04-08')); // "Today"
console.log(relativeDate('2023-04-07')); // "Yesterday"
console.log(relativeDate('2023-04-06')); // "Wednesday"
console.log(relativeDate('2023-04-01')); // "Last Saturday"
console.log(relativeDate('2022-10-08')); // "October 8"
console.log(relativeDate('2022-04-08')); // "April 8"
console.log(relativeDate('2021-04-08')); // "Apr 8, 2021"
console.log(relativeDate('invalid-date')); // Error: Invalid published date
console.log(relativeDate(null)); // Error: Published date is required
console.log(relativeDate()); // Error: Published date is required

} catch (error) {

  console.error(error.message);
}

```

# Here is the third function for FutureDateCounter formatting:

The FutureDateCounter function is useful for calculating the duration between the current date/time and a future date/time in a human-readable format. It can be used in various applications, such as countdown timers, project management tools, and scheduling applications. The optional start date parameter allows for flexibility in the calculation, allowing the user to specify a reference date other than the current date/time.

```javascript 

const {humanTime, relativeDate ,FutureDateCounter} = require('react-duration-counter')

try {

// ALWAYS GIVE FUTURE DATE HERE NOT PAST DATE
console.log(FutureDateCounter('2024-06-01'));
// Output: "1 year 1 month"

console.log(FutureDateCounter('2022-08-15'));
// Output: "128 days"

console.log(FutureDateCounter('2024-06-01'));
// Output: "1 year 1 month"

console.log(FutureDateCounter('2023-10-31'));
// Output: "6 months"

// OPtional param start_date it can be past date or can be any date other then same date
console.log(FutureDateCounter('2023-05-01', {start_date: '2022-12-01'}));
// Output: "4 months"

} catch (error) {

  console.error(error.message);
}

```