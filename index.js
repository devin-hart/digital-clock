function timeLord() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  hrs > 9 ? hrs : hrs = '0' + hrs;
  min > 9 ? min : min = '0' + min;
  sec > 9 ? sec : sec = '0' + sec;

  var timeLog = `${hrs}:${min}:${sec}`;
  var hexLog = "#" + hrs + min + sec;

  document.querySelector('.time').innerHTML = timeLog;
  // document.querySelector('.hexbox').innerHTML = hexLog;

  document.querySelector('.hexbox').style.backgroundColor = hexLog;

}

setInterval(timeLord, 1000);
