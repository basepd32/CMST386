// opening sliding nav when hamburger is clicked
function openNav() {
    document.getElementById("open").style.display = "none";
    document.getElementById("sliding-nav").style.width = "100%";
}

// closing sliding nav when "x" is clicked
function closeNav() {
    document.getElementById("sliding-nav").style.width = "0";
    document.getElementById("open").style.display = "block";
}

// displaying live clock in HTML
function displayTime() {
    // retrieving current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // converting to 12hr format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        " " +
        am_pm;

        // calling displayTime function once every second
    setInterval(displayTime, 1000);
 
    // displaying the time in HTML
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

displayTime();

// validates form on contact page
function validateForm() {
    let msg = document.forms["contactForm"]["msg"].value;
    if (msg == "") {
      alert("Please enter a message.");
      return false;
    }
}