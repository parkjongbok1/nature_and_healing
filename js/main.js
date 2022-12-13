$(document).ready(function(){
    var slideWrapper = $(".main-slider"),
        iframes = slideWrapper.find('.embed-player'),
        lazyImages = slideWrapper.find('.slide-image'),
        lazyCounter = 0;
    
    // POST commands to YouTube or Vimeo API
    function postMessageToPlayer(player, command){
      if (player == null || command == null) return;
      player.contentWindow.postMessage(JSON.stringify(command), "*");
    }
    
    // When the slide is changing
    function playPauseVideo(slick, control){
      var currentSlide, slideType, startTime, player, video;
    
      currentSlide = slick.find(".slick-current");
      slideType = currentSlide.attr("class").split(" ")[1];
      player = currentSlide.find("iframe").get(0);
      startTime = currentSlide.data("video-start");
    
      if (slideType === "vimeo") {
        switch (control) {
          case "play":
            if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
              currentSlide.addClass('started');
              postMessageToPlayer(player, {
                "method": "setCurrentTime",
                "value" : startTime
              });
            }
            postMessageToPlayer(player, {
              "method": "play",
              "value" : 1
            });
            break;
          case "pause":
            postMessageToPlayer(player, {
              "method": "pause",
              "value": 1
            });
            break;
        }
      } else if (slideType === "video") {
        video = currentSlide.children("video").get(0);
        if (video != null) {
          if (control === "play"){
            video.play();
          } else {
            video.pause();
          }
        }
      }
    }
    
    // Resize player
    function resizePlayer(iframes, ratio) {
      if (!iframes[0]) return;
      var win = $(".main-slider"),
          width = win.width(),
          playerWidth,
          height = win.height(),
          playerHeight,
          ratio = ratio || 16/9;
    
      iframes.each(function(){
        var current = $(this);
        if (width / ratio < height) {
          playerWidth = Math.ceil(height * ratio);
          current.width(playerWidth).height(height).css({
            left: (width - playerWidth) / 2,
             top: 0
            });
        } else {
          playerHeight = Math.ceil(width / ratio);
          current.width(width).height(playerHeight).css({
            left: 0,
            top: (height - playerHeight) / 2
          });
        }
      });
    }
    
    // DOM Ready
    $(function() {
      // Initialize
      slideWrapper.on("init", function(slick){
        slick = $(slick.currentTarget);
        setTimeout(function(){
          playPauseVideo(slick,"play");
        }, 1000);
        resizePlayer(iframes, 16/9);
      });
      slideWrapper.on("beforeChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"pause");
      });
      slideWrapper.on("afterChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"play");
      });
      slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
        lazyCounter++;
        if (lazyCounter === lazyImages.length){
          lazyImages.addClass('show');
          // slideWrapper.slick("slickPlay");
        }
      });
    
      //start the slider
      slideWrapper.slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      });
    });
    
    // Resize event
    $(window).on("resize.slickVideoPlayer", function(){  
      resizePlayer(iframes, 16/9);
    });

        $('.Introduce_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3800,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        
        customPaging: function(slider, i) {
          var target_txt = $(slider.$slides[i]).attr('data-slide-nav');
    
          var thumb = "<span>" + target_txt + "</span>";
    
          return thumb
        },
    });

});








// $(document).ready(function(){

//     $(".visual_slider").slick({
//         dots: true,
//         infinite: true,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 3800,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,
//     });

//     $('.Introduce_slider').slick({
//         dots: true,
//         infinite: true,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 3800,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,
        
//         customPaging: function(slider, i) {
//           var target_txt = $(slider.$slides[i]).attr('data-slide-nav');
    
//           var thumb = "<span>" + target_txt + "</span>";
    
//           return thumb
//         },
//     });
// });
