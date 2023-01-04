const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
console.log(tempDate);
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// uncomment for hardcoded date

//          month is 0 index based       hour is out of 24hrs
//                     year, month, day, hour, minute, second
// let futureDate = new Date(2023, 6, 8, 11, 30, 00);

// adds 10 days to current date for fresh timer that loads everytime the page is loaded
const futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const milliseconds = futureDate.getMilliseconds();

let month = months[futureDate.getMonth()];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const timeLeft = futureTime - today;
  /* console.log(t); */
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // values in ms 
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  const oneSecond = 1000;

  // calculating all values
  let days = timeLeft/oneDay;
  days = Math.floor(days);

  let hours = Math.floor((timeLeft%oneDay)/ oneHour);

  let mins = Math.floor((timeLeft%oneHour)/oneMinute);

  let secs = Math.floor((timeLeft%oneMinute)/ oneSecond);
  

  // set values array
  const values = [days, hours, mins, secs]

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item
  }
  
  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  // if deadline has arrived then remove countdown timer and replace it with h4 element
  if(timeLeft < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();