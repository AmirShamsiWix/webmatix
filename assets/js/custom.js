(function ($) {
  $(".main-menu, .scroll-to-section").on("click", "a", function (e) {
    if ($(e.target).hasClass("external")) {
      return;
    }
    e.preventDefault();
    $("#menu").removeClass("active");
    showSection($(this).attr("href"), true);
  });

  $(document).ready(function () {
    $("body").addClass("js");
    var $menu = $("#menu"),
      $menulink = $(".menu-link");

    $menulink.click(function () {
      $menulink.toggleClass("active");
      $menu.toggleClass("active");
      return false;
    });
  });

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "fade",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $("#tabs").tabs();
})(jQuery);


var form = document.getElementById("my-form");
var loaderOverlay = document.getElementById("loader-overlay");
var loader = document.getElementById("loader");
var submissionMessage = document.getElementById("submission-message");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  loaderOverlay.style.display = 'block'; // Display overlay
  loader.style.display = 'block'; // Display loader
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    loaderOverlay.style.display = 'none';
    loader.style.display = 'none';
    status.style.display = 'block';
    form.style.display = 'none';
    submissionMessage.style.display = 'block'; // Show submission message
  }).catch(error => {
    status.style.display = 'block';
    form.style.display = 'none';
    status.innerHTML = "Oops! Something went wrong.";
  });
}
form.addEventListener("submit", handleSubmit);


