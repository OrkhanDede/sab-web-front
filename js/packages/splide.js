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

    var splidePartnersForHome = new Splide(".splide-home-partners", {
        type: "loop",
        gap: "2rem",
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: false,
        padding: "5rem",
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
})