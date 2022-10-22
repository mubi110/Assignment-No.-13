
var mint = 0;
var second = 0;
var mSec = 0;
var interval;

var min = document.getElementById('min')
var sec = document.getElementById('sec')
var msec = document.getElementById('msec')

var start = document.getElementById('btnstart')
var pause = document.getElementById('btnpause')
var rstart = document.getElementById('btnrestart')

function timer() {
  mSec++
  msec.innerHTML = mSec;
  if (mSec == 10) {
    second++
    sec.innerHTML = second;
    mSec = 0;
  }
  else if (second == 60) {
    mint++
    min.innerHTML = mint;
    second = 0
  }
}
function startbtn() {
  start.disabled = true;
  pause.disabled = false;
  rstart.disabled = false;
  interval = setInterval(timer, 100)
}

function pausebtn() {
  start.disabled = false;
  pause.disabled = true;
  rstart.disabled = false;
  clearInterval(interval);
}
function reset(){
  start.disabled = false;
  pause.disabled = false;

  mint = 0;
  second = 0;
  mSec = 0;

  min.innerHTML =mint;
  sec.innerHTML= second;
  msec.innerHTML = mSec;
}
