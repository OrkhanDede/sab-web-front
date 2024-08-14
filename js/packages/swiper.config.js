document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var overlay = document.createElement("div");

  var nextButton = document.querySelector(".swiper-button-next");
  var prevButton = document.querySelector(".swiper-button-prev");

  document.querySelector(".swiper-container").appendChild(overlay);

  function showOverlay(type) {
    overlay.className =
      type == "left" ? "darken-overlay-left" : "darken-overlay-right";
    console.log(overlay.className);

    overlay.style.opacity = "1";
  }

  function hideOverlay() {
    overlay.style.opacity = "0";
  }

  nextButton.addEventListener("click", function () {
    showOverlay("right");
    setTimeout(hideOverlay, 300);
  });

  prevButton.addEventListener("click", function () {
    showOverlay("left");
    setTimeout(hideOverlay, 300);
  });

  AOS.init();
});
