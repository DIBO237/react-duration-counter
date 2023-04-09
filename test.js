 const {humanTime, relativeDate , FutureDateCounter} = require('react-duration-counter')

// TO GET THE CURRENT TIME ONCE
const published_at = "2023-04-01T08:22:00.100+00:00";
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
