document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
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

  var splide = new Splide(".splide", {
    type: "slide",
    gap: "2rem",
    padding: "5rem",
    easing: "ease",
    pagination: true,
    arrows: true,
  });

  splide.on("mounted", function () {
    var paginationItems = splide.Components.Pagination.items;
    var customPagination = document.getElementById("splide_custom_pagination");

    var prevArrow = splide.Components.Arrows.arrows.prev;
    var nextArrow = splide.Components.Arrows.arrows.next;
    var customArrows = document.getElementById("custom_arrows_services");

    var prevIcon = document.createElement("img");
    prevIcon.src = "/assets/icons/splide-arrow-left.svg";
    prevIcon.alt = "Previous";

    var nextIcon = document.createElement("img");
    nextIcon.src = "/assets/icons/splide-arrow-right.svg";
    nextIcon.alt = "Next";

    prevArrow.innerHTML = "";
    nextArrow.innerHTML = "";

    prevArrow.appendChild(prevIcon);
    nextArrow.appendChild(nextIcon);

    paginationItems.forEach(function (item) {
      customPagination.appendChild(item.button);
    });
    customArrows.appendChild(prevArrow);
    customArrows.appendChild(nextArrow);

    let splideList = document.querySelector(".splide__list");

    // servicesData.map((serviceData) => {
    //   const element = document.createElement("li");
    //   element.classList.add("splide__slide");
    //   const img = document.createElement("img");
    //   img.src = serviceData.image;
    //   element.appendChild(img);
    //   splideList.appendChild(element);
    //   //   <li class="splide__slide">
    //   //   <img src="/assets/images/services/labaratory.png" alt="" />
    //   // </li>
    // });
  });

  splide.mount();

  AOS.init();
});
