$(document).ready(function(){

  // 각 섹션의 변수
  const sec1_offset = $(".sec1").offset().top;
  const sec2_offset = $(".sec2").offset().top;
  const sec3_offset = $(".sec3").offset().top;
  const sec4_offset = $(".sec4").offset().top;
  const sec5_offset = $(".sec5").offset().top;

  // 섹션의 추가 요소 변수 생산
  // const sec2_title_offset = $(".video-section").offset().top;


  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $(".pos").text(scrollTop);

    // sec2
    if (scrollTop >= sec2_offset / 1.7) {
      $(".sec2").css({
        background: "pink",
      });
      $(".sec2 h2").css({
        color: "blue",
        left: "50%",
        opacity: "1",
        // transition: "0.3s",
      });
      $(".sec2 .box").css({
        bottom: "20%",
        opacity: "1",
      });

    } else {
      $(".sec2").css({
        background: "",
      });
      $(".sec2 h2").css({
        color: "",
        background: "",
        left: "",
        opacity: "",
      });
      $(".sec2 .box").css({
        bottom: "",
        opacity: "",
      });

    }
    // sec2 end

    // sec3
    if (scrollTop >= sec3_offset / 1.65) {
      $("").css({

      })
    } else {
      $("").css({

      })
    }
    // sec3 end

    // sec4
    if (scrollTop >= sec4_offset / 1.65) {
      $("").css({

      })
    } else {
      $("").css({

      })
    }
    // sec4 end

    // sec5
    if (scrollTop >= sec5_offset / 1.65) {
      $("").css({

      })
    } else {
      $("").css({

      })
    }
    // sec5 end

    // sec6
    if (scrollTop >= sec6_offset / 1.65) {
      $("").css({

      })
    } else {
      $("").css({

      })
    }
    // sec6 end

  });
});



  // 스크롤 탑 이벤트 사용 예시

    // if (scrollTop >= 변수명) {

    // 이벤트 실행
    // $(".sec2 .box").css({
      // bottom: "20%",
      // opacity: "1",
    // });
    // } else {

    // 이벤트 종료

    // $(".sec2 .box").css({
    //   bottom: "",
    //   opacity: "",
    // });

    // }