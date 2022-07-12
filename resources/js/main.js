$(document).ready(function () {

  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $(".wrapper").toggleClass("toggled");
  });

  $("#menu-close").click(function (e) {
    e.preventDefault();
    $(".wrapper").addClass("toggled");
  });
});