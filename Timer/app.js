
var var_min;
var var_sec = 60;
var var_msec = 10;
var interval;

var min = document.getElementById('min');
var minText = document.createTextNode(min.value);
min.appendChild(minText);

var sec = document.getElementById('sec');
var secText = document.createTextNode(sec.value);
sec.appendChild(secText);
// console.log(sec)

var msec = document.getElementById('msec');


var start = document.getElementById('btnstart');
var pause = document.getElementById('btnpause');
var rstart = document.getElementById('btnrestart');

function timer() {

  if (min.value > 0 && sec.value == 0) {
    var_min = document.getElementById('min').value;    
    var_msec--
    msec.innerHTML = var_msec;
    if (var_msec == 0) {
      var_sec--
      sec.value = var_sec;
      var_msec = 10;

      if (var_sec == 0) {
        var_min--
        min.value = var_min;
        var_sec = 60;
        if (min.value == 0 && sec.value == 0 && msec.innerHTML == 0) {
          alert("Complete");
          start.disabled = false;
          pause.disabled = false;
          clearInterval(interval);
          min.value = 0;
          sec.value = 0;
          msec.value = 0;
        }
      }
    }

  }
  else if (min.value > 0 && sec.value > 0) {
    var_min = document.getElementById('min').value;
    var_sec = document.getElementById('sec').value;
    console.log(var_min,var_sec)
    var_msec--
    msec.innerHTML = var_msec;   
    console.log(var_sec)
    if (var_msec == 0) {
      var_sec--
      sec.value = var_sec;
      var_msec = 10;

      if (var_sec == 0) {
        var_min--
        min.value = var_min;
        var_sec = 60;
        if (min.value == 0 && sec.value == 0 && msec.innerHTML == 0) {
          alert("Complete");
          start.disabled = false;
          pause.disabled = false;
          clearInterval(interval);
          min.value = 0;
          sec.value = 0;
          msec.value = 0;
        }
      }
    }

  }

  else if (min.value == 0 || sec.value > 0 && sec.value < 60) {
    var_msec--
    msec.innerHTML = var_msec;
    if (var_msec == 0) {
      var_sec = sec.value;
      var_sec--
      sec.value = var_sec;
      var_msec = 10;
      if (sec.value == 0 && msec.innerHTML == 0) {
        alert("Complete");
        start.disabled = false;
        pause.disabled = false;
        clearInterval(interval);
        min.value = 0;
        sec.value = 0;
        msec.value = 0;
      }
    }
  }
}
function startbtn() {
  
  if (min.value <= 0 && sec.value <= 0 && msec.innerHTML <= 0) {
    alert("No value selected");
    start.disabled = false;
    pause.disabled = false;
    clearInterval(interval);
    min.value = 0;
    sec.value = 0;
    msec.value = 0;

  }
  else {
    start.disabled = true;
    pause.disabled = false;
    rstart.disabled = false;
    interval = setInterval(timer, 100)
  }
}

function pausebtn() {
  start.disabled = false;
  pause.disabled = true;
  rstart.disabled = false;
  clearInterval(interval);
}
function reset() {
  start.disabled = false;
  pause.disabled = false;

  var var_min = 0;
  var var_sec = 0;
  var var_msec = 0;

  min.value = var_min;
  sec.value = var_sec;
  msec.innerHTML = var_msec;
}
