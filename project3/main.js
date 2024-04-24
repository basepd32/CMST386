// breadcrumb navigation active class toggle
var breadcrumb = document.getElementById("breadcrumb");

var breadcrumblinks = breadcrumb.getElementsByClassName("breadcrumb-links");

for (var i = 0; i < breadcrumblinks.length; i++) {
  breadcrumblinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// hamburger menu icon interaction showing/hiding navigation links

function hamburgerMenu() {
  var x = document.getElementById("hamburgerLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}