///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////
$("a[href*=#]:not([href=#])").click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
      return false;
    }
  }
});

//flexslider
$(window).load(function () {
  $(".flexslider").flexslider({
    controlNav: false,
  });
});

$(document).ready(function () {
  //$(".owl-carousel").owlCarousel();

  // static navigationbar
  var changeStyle = $(".navigation");

  function scroll() {
    if ($(window).scrollTop() > 645) {
      changeStyle.addClass("navbar-fixed-top");
    } else {
      changeStyle.removeClass("navbar-fixed-top");
    }
  }

  document.onscroll = scroll;

  $(".visit-carousel").owlCarousel({
    nav: true,
    navText: false,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".header-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: false,
    dots: false,
    loop: true,
  });
  $(".services-owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: false,
    dots: false,
    loop: true,
  });
  $(".sponsor-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    navText: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});

// WhatsApp Chat
/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });
