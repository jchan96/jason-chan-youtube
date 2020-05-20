import react from "react";

function TimeStamp(timestamp) {
  let timeClick = new Date().getTime();
  let timeDisplayed = timeClick - timestamp;
  const varMillisecondsInMinute = 60000;
  const varMillisecondsInHour = 3600000;
  const varMillisecondsInDay = 86400000;
  const varMillisecondsInMonth = 2629800000;
  const varMillisecondsInYear = 31557600000;
  let metric = "";
  let result = 0;
  if (timeDisplayed < varMillisecondsInMinute) {
    result = Math.ceil(timeDisplayed / 1000);
    if (result === 0) {
      result = 1;
    }
    metric = "sec ago";
    result += metric;
  } else if (timeDisplayed < varMillisecondsInHour) {
    result = Math.floor(timeDisplayed / varMillisecondsInMinute);
    metric = "min ago";
    result += metric;
  } else if (timeDisplayed < varMillisecondsInDay) {
    result = Math.floor(timeDisplayed / varMillisecondsInHour);
    metric = "hour ago";
    result += metric;
  } else if (timeDisplayed < varMillisecondsInMonth) {
    result = Math.floor(timeDisplayed / varMillisecondsInDay);
    metric = "day ago";
    result += metric;
  } else if (timeDisplayed < varMillisecondsInYear) {
    result = Math.floor(timeDisplayed / varMillisecondsInMonth);
    metric = "month ago";
    result += metric;
  } else {
    result = Math.floor(timeDisplayed / varMillisecondsInYear);
    metric = "year ago";
    result += metric;
  }
  return result;
}

export default TimeStamp;
