const moment = require('moment')

/**
 * Formats a timestamp as a human-readable string
 * @param {string} timestamp - The timestamp to format
 * @returns {string} A human-readable string indicating how long ago the timestamp was (e.g. "a few seconds ago", "5 minutes ago", "an hour ago", "3 days ago", etc.)
 * @throws {Error} If the timestamp is invalid or missing
 */
function formatTime(timestamp) {
  try {
    if (!timestamp || !moment(timestamp).isValid()) {
      throw new Error('Invalid timestamp');
    }

    const now = moment();
    const time = moment(timestamp);
    const duration = moment.duration(now.diff(time));

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    let elapsed = '';

    if (years > 0) {
      elapsed = `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (months > 0) {
      elapsed = `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (days > 0) {
      elapsed = `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (hours > 0) {
      elapsed = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else if (minutes > 0) {
      elapsed = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    } else {
      elapsed = `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
    }

    return elapsed;
  } catch (error) {
    console.error(error);
    return 'Invalid timestamp';
  }
  }




function relativeDate(publishedDate) {
  if (!publishedDate) {
    throw new Error('Published date is required');
  }

  const now = moment();

  if (!moment(publishedDate).isValid()) {
    throw new Error('Invalid published date');
  }

  const diff = now.diff(publishedDate, 'days');
  let formattedDate;
  
  if (diff < 1) {
    formattedDate = moment(publishedDate).fromNow();
  } else if (diff < 7) {
    formattedDate = moment(publishedDate).format('dddd');
  } else if (diff < 365) {
    formattedDate = moment(publishedDate).format('MMM D');
  } else {
    formattedDate = moment(publishedDate).format('MMM D, YYYY');
  }
  
  return formattedDate;
}



  module.exports = formatTime;
