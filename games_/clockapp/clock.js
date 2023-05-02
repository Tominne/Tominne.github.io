let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let partyTime;
let evening = 18;
let messageText = document.getElementById('timeEventJS').innerHTML;

//show time
var showCurrentTime = function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  let formatHours = convertFormat(hours);
  
  hours = checkTime(hours);
  
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  
  document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
}

function convertFormat(time) {
  let format = 'AM';
  if (time >= 12) {
      format = 'PM';
  }
  return format;
}

function checkTime(time) {
  if (time > 12) {
      time = time - 12;
  }
  if (time === 0) {
      time = 12;
  }
  return time;
}

function addZero(time) {
  if (time < 10) {
      time = "0" + time;
  }
  return time;
}

showCurrentTime();
setInterval(showCurrentTime, 1000);

//make clock change alone
function updateClock() {
  var time = new Date().getHours();
  if (time == partyTime) {
    messageText = "May I have this Boogie?!";
  } else if (time == wakeUpTime) {
    messageText = "Wake up!";
  } else if (time == napTime) {
    messageText = "Sleep tight!";
  } else if (time < noon) {
    messageText = "Good morning!";
  }
  else if (time >= evening) {
    messageText = "Good evening!";
  }

  else {
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerHTML = messageText;

  showCurrentTime();
}
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);



// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partyTime < 0) 
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Cry party no more!";
        partyTime = -1;
        partyTimeButton.innerText = "Boogie with me may you?!";
    }
}

partyButton.addEventListener("click", partyEvent);
partyEvent(); 

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent); 
// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);


