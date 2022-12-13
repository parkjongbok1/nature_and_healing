$(document).ready(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
      }
    });

    // meun-btn
    $(".map_btn").click(function () {
      $(".map_btn, .site_map").toggleClass("active");
    });
});