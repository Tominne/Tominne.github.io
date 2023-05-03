let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let partyTime;
let evening = 18;
let messageText = document.getElementById("timeEventJS").innerHTML;

//show time
let showCurrentTime = function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let formatHours = convertFormat(hours);

  hours = checkTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById(
    "clock"
  ).innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
};

function convertFormat(time) {
  let format = "AM";
  if (time >= 12) {
    format = "PM";
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
  let time = new Date().getHours();
  if (time == partyTime) {
    messageText = "May I have this Boogie?!";
  } else if (time == wakeUpTime) {
    messageText = "Wake up!";
  } else if (time == napTime) {
    messageText = "Sleep tight!";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time >= evening) {
    messageText = "Good evening!";
  } else {
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerHTML = messageText;

  showCurrentTime();
}
updateClock();

let oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function () {
  {
    partyTimeButton.innerHTML = "We do be boogieing!!";
  }
};

partyButton.addEventListener("click", partyEvent);

var wakeUpEvent = function () {
  wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
  napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

//clock script with hands

let canvas = document.getElementById("clockCanvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 1000);

function drawClock() {
  ctx.globalAlpha = 0.5;
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.globalAlpha = 0.5;
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.globalAlpha = 0.5;
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "purple");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
  ctx.globalAlpha = 0.5;

}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = hour % 12;

  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);

  drawHand(ctx, hour, radius * 0.5, radius * 0.07);

  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);

  drawHand(ctx, minute, radius * 0.8, radius * 0.07);

  second = (second * Math.PI) / 30;

  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);

  ctx.rotate(pos);

  ctx.lineTo(0, -length);

  ctx.stroke();

  ctx.rotate(-pos);
}
