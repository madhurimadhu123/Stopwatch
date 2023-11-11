// console.log("hi");

// variables 

// used to display on the screen
var hour = document.getElementById("hr");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var milsecs = document.getElementById("mils");
// keep track of time
var h = 00;    //hour
var m = 00;    //minute
var s = 00;    //second
var ms = 00;   //milli second
// buttons
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var interval;

// start timer function
function startTimer() {
  ms++;  

  if(ms<10) {
    milsecs.innerHTML = "0" +ms;    // to maintain the proper display
  }
  else if(ms<100) {
    milsecs.innerHTML =  ms;
  }
  else if(ms>=100) {                // one second completed
    s++;
    seconds.innerHTML = "0" + s +":";
    ms=00;
    milsecs.innerHTML = "0" + ms;
  }
  if(s>=10) {
    seconds.innerHTML = s +":";          // to maintain the proper display
  }
  if(s>=60) {                       // one minute completed
    m++;
    minutes.innerHTML = "0" + m +":";
    s=00;
    seconds.innerHTML = "0" + 0 +":";
  }
  if(m>=10) {
    minutes.innerHTML = m +":";           // to maintain the proper display
  }
  if(m>=60) {                        // one hour completed
    h++;
    hour.innerHTML = "0" + h +":"; 
    m=00;   
    minutes.innerHTML = "0" + m +":";
  }
}

// when start button is clicked
function onClick() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 10);              // start the interval


  // change in appearance of start button
  start.style.opacity ="0.7";
  start.style.border = "none"
  // change in appearance of stop button
  stop.style.opacity = "1";
  stop.style.border = "2px dashed ";
  // change in appearance of reset button
  reset.style.opacity = "1";
  reset.style.border = "2px dashed ";
};

// when stop button is clicked
function stopTimer() { 
  clearInterval(interval);                              // stops the interval

  // change in appearance of start button
  start.style.opacity ="1";
  start.style.border = "2px dashed";
  // change in appearance of stop button
  stop.style.opacity = "0.7";
  stop.style.border = "none";
} 

// when reset button is clicked
function resetTimer() {
    clearInterval(interval);
    h=00;
    m=00;
    s=00;
    ms=00;
    hour.innerHTML = "0" + h +":"; 
    minutes.innerHTML = "0" + m +":";
    seconds.innerHTML = "0" + s +":";
    milsecs.innerHTML = "0" + ms;

    
    // change in appearance of start button
    start.style.opacity ="1";
    start.style.border = "2px dashed";
    // change in appearance of stop button
    stop.style.opacity = "0.7";
    stop.style.border = "none";
    // change in appearance of reset button
    reset.style.opacity = "0.7";
    reset.style.border = "none";
}


// for the light and dark toggle button
const toggle = document.getElementById("switch");
const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";

// swap the stylesheets to change theme
toggle.addEventListener("change", () => {
    const theme = document.getElementById("theme");
  if (theme.getAttribute("href") === darkTheme) {
    theme.setAttribute("href", lightTheme);
  } else {
    theme.setAttribute("href", darkTheme);
  }
});