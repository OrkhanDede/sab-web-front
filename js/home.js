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
    let splideInitialized = false;
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

    new fullpage("#fullpage", {
        autoScrolling: true,

        afterLoad: function (origin, destination, direction) {
            const section = destination.index;

            // Buisness and direcctions
            if (section === 1) {
                const firstContent = document.querySelector(".buisness_direction_section_first_content");
                const secondContent = document.querySelector(".buisness_direction_section_second_content");
                firstContent.classList.add("fade-out");
                secondContent.classList.remove("fade-in");
                secondContent.classList.add("fade-in");
            }
            if ((section === 0 && direction == 'up')
                // aşağıdan yuxarı scroll olanda animasiya olmağını istəmirsənsə 23 cü sətri kommentə al
                // || (section === 2 && direction == 'down')
            ) {
                const firstContent = document.querySelector(".buisness_direction_section_first_content");
                const secondContent = document.querySelector(".buisness_direction_section_second_content");
                firstContent.classList.remove("fade-out");
                firstContent.classList.add("fade-in");
                secondContent.classList.remove("fade-in");
                secondContent.classList.add("fade-out");
            }
            // Services text aos animation
            if ((section === 2 && direction == 'down')
                // asagidan yuxari cixanda animasiya istiyirsese kommenti ac
                || (section === 2 && direction == 'up')
            ) {
                const animatedText = document.querySelectorAll('[data-aos]');
                animatedText.forEach((element) => {
                    element.style.opacity = 1;
                    element.classList.add("fade-in-up");
                });
            }
            if (section === 2 && !splideInitialized) {
                splideInitialized = true;
                splide.mount();
            }
            // her defe animasiya olmasini istiyirsense commenti ac
            else {
                const animatedText = document.querySelectorAll('[data-aos]');
                animatedText.forEach((element) => {
                    element.style.opacity = 0;
                    element.classList.remove("fade-in-up");
                });
            }
            // Distributing
            if (section === 4) {
                const firstContent = document.querySelector(".distributing_first_section");
                const secondContent = document.querySelector(".distributing_second_section");
          
                firstContent.classList.add("fade-out-distributing");
                secondContent.classList.add("fade-in-distributing");
              } else if (
                (section === 3 && direction === 'up') ||
                (section === 2 && direction === 'down')
              ) {
                const firstContent = document.querySelector(".distributing_first_section");
                const secondContent = document.querySelector(".distributing_second_section");

                firstContent.classList.remove("fade-out-distributing");
                secondContent.classList.remove("fade-in-distributing");
              }
          
        },
    });
});
