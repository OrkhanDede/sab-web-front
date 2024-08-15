const slideContent = [
  {
    title: "Laboratory",
    description:
      "Our laboratory services ensure precise analysis and quality control in every process.",
  },
  {
    title: "Fridge Storage",
    description:
      "Keep your products fresh and secure with our state-of-the-art fridge storage solutions.",
  },
  {
    title: "Packaging",
    description:
      "High-quality packaging that ensures your products are protected and presented perfectly.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  var splide = new Splide(".splide", {
    type: "loop",
    gap: "2rem",
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    resetProgress: false,
    padding: "5rem",
    easing: "ease",
    pagination: true,
    arrows: true,
  });

  function updateSlideContent(index) {
    const titleElement = document.getElementById("slide-title");
    const descriptionElement = document.getElementById("slide-description");

    titleElement.textContent = slideContent[index].title;
    descriptionElement.textContent = slideContent[index].description;
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

  splide.mount();
});
