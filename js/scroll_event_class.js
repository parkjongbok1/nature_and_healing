$(document).ready(function(){
  // // haeder
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

// 스크롤 이벤트
function scrollAniEvent() {
  $(".ani, .ani-L, .ani-R, .ani-T").each(function () {
    const windHeight = $(window).innerHeight();
    const scrollTop = $(window).scrollTop();
    const viewportTop = scrollTop + windHeight;

    const elementOffset = $(this).offset().top;
    const elementOffsetBtm = elementOffset + $(this).outerHeight() / 2.8;

      if (viewportTop > elementOffsetBtm) {
     $(this).addClass("ani-in");
     $(this).addClass("ani-in-T");
     $(this).addClass("ani-in-L");
     $(this).addClass("ani-in-R");
    } else {
     $(this).removeClass("ani-in");
     $(this).removeClass("ani-in-T");
     $(this).removeClass("ani-in-L");
     $(this).removeClass("ani-in-R");
    }
  });
}

scrollAniEvent();

$(window).on("scroll", function () {
  scrollAniEvent();
  didScroll = true;
});
});