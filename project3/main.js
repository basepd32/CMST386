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