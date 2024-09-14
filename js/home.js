const slideContent = [
  {
    title: {
      az: "Laboratoriya",
      en: "Laboratory",
    },
    route: "/pages/labaratory-analysis.html",
    description: {
      az: "Laboratoriya xidmətlərimiz hər bir prosesdə dəqiq analiz və keyfiyyətə nəzarəti təmin edir.",
      en: "Our laboratory services ensure precise analysis and quality control in every process.",
    },
  },
  {
    title: {
      az: "Dondurulma deposu",
      en: "Fridge storage",
    },
    route: "/pages/fridge-storage.html",
    description: {
      az: "Məhsullarınızı təzə və təhlükəsiz saxlamaq üçün müasir soyuducu saxlama həllərimizdən istifadə edin.",
      en: "Keep your products fresh and secure with our state-of-the-art fridge storage solutions.",
    },
  },
  {
    title: {
      az: "Paketləmə",
      en: "Packaging",
    },
    route: "/pages/packaging.html",
    description: {
      az: "Məhsullarınızın mükəmməl qorunmasını və təqdimatını təmin edən yüksək keyfiyyətli qablaşdırma.",
      en: "High-quality packaging that ensures your products are protected and presented perfectly.",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Banner slide
  const isMobile = document.body.clientWidth <= 991 ? 1 : 0;

  var swiper = new Swiper(".swiper-container", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 5000,
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

  // Services slide
  let splideInitialized = false;

  var splide = new Splide(".splide", {
    type: "loop",
    gap: "3rem",
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    resetProgress: false,
    padding: { right: "8rem", left: "0" },
    easing: "ease",
    pagination: true,
    arrows: true,
    breakpoints: {
      991: {
        padding: { right: "10rem", left: "0" },
      },
    },
  });

  var horecaSplide = new Splide(".horeca-splide", {
    perPage: 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      100: {
        perPage: 1,
      },
    },
    pagination: true,
    arrows: false,
    gap: "2rem",
  }).mount();

  var retailSplide = new Splide(".retail-splide", {
    perPage: 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      100: {
        perPage: 1,
      },
    },
    pagination: true,
    arrows: false,
    gap: "2rem",
  }).mount();

  var b2gSplide = new Splide(".b2g-splide", {
    perPage: 4,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      100: {
        perPage: 1,
      },
    },
    pagination: true,
    arrows: false,
    gap: "2rem",
  }).mount();

  const splideInstances = {
    horecaSplide,
    retailSplide,
    b2gSplide,
  };

  function updateSlideContent(index) {
    const titleElement = document.getElementById("slide-title");
    const descriptionElement = document.getElementById("slide-description");
    const moreBtn = document.querySelectorAll(".services_more_btn");

    const currentLang = localStorage.getItem("language");
    const newLang = currentLang === "en" ? "en" : "az";

    titleElement.textContent = slideContent[index].title[newLang];
    descriptionElement.textContent = slideContent[index].description[newLang];
    moreBtn.forEach((btn) => {
      if (btn) {
        btn.href = slideContent[index].route;
      }
    });
  }

  updateSlideContent(0);

  splide.on("moved", function (newIndex) {
    updateSlideContent(newIndex);
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
  });

  // Full page events
  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    anchors: [
      "banner",
      "business_directions",
      "business_directions_meat",
      "business_directions_dairy",
      "services",
      "statistics",
      "distributing",
      "partners",
    ],

    afterLoad: function (origin, destination, direction) {
      const section = destination.index;
      window.history.replaceState(null, null, `#${destination.anchor}`);

      // Business and direcctions
      if (section === 1) {
        const firstContent = document.querySelector(
          `.business_direction_section_first_content${
            isMobile ? "_mobile" : ""
          }`
        );
        const secondContent = document.querySelector(
          `.business_direction_section_second_content${
            isMobile ? "_mobile" : ""
          }`
        );
        firstContent.classList.add("fade-out");
        secondContent.classList.remove("fade-in");
        secondContent.classList.add("fade-in");
      }
      if (
        section === 0 &&
        direction == "up"
        // aşağıdan yuxarı scroll olanda animasiya olmağını istəmirsənsə 23 cü sətri kommentə al
        // || (section === 2 && direction == 'down')
      ) {
        const firstContent = document.querySelector(
          `.business_direction_section_first_content${
            isMobile ? "_mobile" : ""
          }`
        );
        const secondContent = document.querySelector(
          `.business_direction_section_second_content${
            isMobile ? "_mobile" : ""
          }`
        );
        firstContent.classList.remove("fade-out");
        firstContent.classList.add("fade-in");
        secondContent.classList.remove("fade-in");
        secondContent.classList.add("fade-out");
      }
      // Services text aos animation
      if (
        (section === 2 + +isMobile && direction == "down") ||
        // asagidan yuxari cixanda animasiya istiyirsese kommenti ac
        (section === 2 + +isMobile && direction == "up") ||
        (section === 2 + +isMobile && direction == "none")
      ) {
        const animatedText = document.querySelectorAll(
          ".services-section[data-aos]"
        );
        animatedText.forEach((element) => {
          element.style.opacity = 1;
          element.classList.add("fade-in-up");
        });
      } else {
        const animatedText = document.querySelectorAll(
          ".services-section[data-aos]"
        );
        animatedText.forEach((element) => {
          element.style.opacity = 0;
          element.classList.remove("fade-in-up");
        });
      }
      // First place aos animation
      if (
        (section === 3 + +isMobile && direction == "down") ||
        // asagidan yuxari cixanda animasiya istiyirsese kommenti ac
        (section === 3 + +isMobile && direction == "up") ||
        (section === 3 + +isMobile && direction == "none")
      ) {
        const first = document.getElementById("statistics_first");
        const second = document.getElementById("statistics_second");
        const bottom = document.getElementById("statistics_bottom");

        first.style.opacity = 1;
        second.style.opacity = 1;
        bottom.style.opacity = 1;

        first.classList.add("fade-top-to-bottom");
        second.classList.add("fade-top-to-bottom");
        bottom.classList.add("fade-in-up");
      } else {
        const first = document.getElementById("statistics_first");
        const second = document.getElementById("statistics_second");
        const bottom = document.getElementById("statistics_bottom");

        first.style.opacity = 0;
        second.style.opacity = 0;
        bottom.style.opacity = 0;

        first.classList.remove("fade-top-to-bottom");
        second.classList.remove("fade-top-to-bottom");
        bottom.classList.remove("fade-in-up");
      }
      if (section === 2 + +isMobile && !splideInitialized) {
        splideInitialized = true;
        splide.mount();
      }
      // Distributing
      if (section === 4 + +isMobile) {
        const firstContent = document.querySelector(
          `.distributing_first_section${isMobile ? "_mobile" : ""}`
        );
        const secondContent = document.querySelector(
          `.distributing_second_section${isMobile ? "_mobile" : ""}`
        );
        firstContent.classList.add("fade-out-distributing");
        secondContent.classList.remove("fade-out-distributing");
        secondContent.classList.add("fade-in-distributing");
      } else if (
        (section === 3 + +isMobile && direction === "up") ||
        (section === 2 + +isMobile && direction === "down")
      ) {
        const firstContent = document.querySelector(
          `.distributing_first_section${isMobile ? "_mobile" : ""}`
        );
        const secondContent = document.querySelector(
          `.distributing_second_section${isMobile ? "_mobile" : ""}`
        );

        firstContent.classList.remove("fade-out-distributing");
        firstContent.classList.add("fade-in-distributing");
        secondContent.classList.remove("fade-in-distributing");
        secondContent.classList.add("fade-out-distributing");
      }
      // Partners
      if (
        (section === 5 + +isMobile && direction == "down") ||
        // asagidan yuxari cixanda animasiya istiyirsese kommenti ac
        (section === 5 + +isMobile && direction == "up") ||
        (section === 5 + +isMobile && direction == "none")
      ) {
        const titles = document.querySelectorAll(".partners-title");
        const slides = document.querySelectorAll(".partners-slides");
        console.log(slides);
        console.log(titles);
        titles.forEach((title) => {
          title.style.opacity = 1;
          title.classList.add("fade-right-to-left");
        });
        slides.forEach((slide) => {
          slide.style.opacity = 1;
          slide.classList.add("fade-left-to-right");
        });
      } else {
        const titles = document.querySelectorAll(".partners-title");
        const slides = document.querySelectorAll(".partners-slides");

        titles.forEach((title) => {
          title.style.opacity = 0;
          title.classList.remove("fade-right-to-left");
        });
        slides.forEach((slide) => {
          slide.style.opacity = 0;
          slide.classList.remove("fade-left-to-right");
        });
      }
      if (section === 2 + +isMobile && !splideInitialized) {
        splideInitialized = true;
        splide.mount();
      }
    },
  });

  const partnersBtns = document.querySelectorAll(".partner_arrows");

  partnersBtns.forEach((partnerBtn) => {
    const type =
      partnerBtn.attributes.getNamedItem("type")?.value === "prev"
        ? false
        : true;
    const partnerName =
      partnerBtn.attributes.getNamedItem("partner_name")?.value;

    partnerBtn.addEventListener("click", (e) => {
      if (type) {
        splideInstances[partnerName].go(">");
      } else {
        splideInstances[partnerName].go("<");
      }
    });
  });
});
