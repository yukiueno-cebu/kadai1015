
  //toggleメニュー
  $(".js-toggle").on("click", function() {
    $(this).toggleClass("on");
    $(this)
      .siblings()
      .slideToggle();
  });

  //ハンバーガーメニュー
  $(".js-hamburger").on("click", function() {
    $(this).toggleClass("on");
  });