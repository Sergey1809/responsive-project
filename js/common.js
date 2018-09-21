$(document).ready(function () {


  // Parallax effect
  $window = $(window);
  $('div[data-type="background"]').each(function () {
    var $bgobj = $(this);
    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });
  });

});
 // Responsive navigation
 function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "nav-list") {
      x.className += " responsive";
  } else {
      x.className = "nav-list";
  }
};
