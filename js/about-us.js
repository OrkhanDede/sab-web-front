const aboutCompanySlide = [
  {
    description: {
      az: `
          <b> “SAB” </b> brendi 1998-ci ildə yaradılmış “Zəhmət-Ruzi” MMC-nin bir hissəsidir və yüksək 
          keyfiyyətli ət və süd məhsulları istehsalı, həmçinin onların emalı ilə məşğuldur. </br> </br> 
          Şirkətimiz ölkəmizdə kolbasa, süd məhsulları və delikateslərin istehsalı 
          sahəsində təxminən 15%-lik bazar payı ilə aparıcı mövqeyə malikdir.`,
      en: `
          <b> “SAB” </b> brand is a part of “Zahmat-Ruzi” LLC, which was founded in 1998 and produces 
          high-quality meat and milk as well as provide their processing.  </br> </br> 
          Our company occupies a leading position in the production of sausages, milk, and delicacies in 
          our country with about 15% market share.`,
    },
  },
  {
    description: {
      az: `
          Biz yalnız halal inqrediyentlərdən hazırlanan yüksək keyfiyyətli ət və süd məhsulları istehsal edirik. </br> </br> 
          Həmçinin, soyuducu saxlama, qablaşdırma və laboratoriya analiz xidmətləri göstəririk.`,
      en: `
          We produce high-quality meat and dairy products, made of Halal only ingredients. </br> </br> 
          Also, we provide fridge storage, packaging and laboratory analysis services.`,
    },
  },
  {
    description: {
      az: `
          Xırdalan rayoundakı fabrikimiz ən müasir istehsal avadanlıqları, laboratoriyalar, anbarlar və nəqliyyat sistemləri ilə təchiz olunub.  </br> </br> 
          İstehsal demək olar ki, tam avtomatlaşdırılıb və avadanlıqlarımız Almaniya, İtaliya və Polşadan gətirilib.`,
      en: `
          Our factory in Khirdalan city is equipped with the most up-to-date production facilities, laboratories, warehouses, and transportation systems. </br> </br> 
          The production is almost fully automated and our equipment is brought from Germany, Italy, and Poland.`,
    },
  },
];

const historySlide = [
  {
    year: 1998,
    description: {
      en: `Sabir Babayev founded "Zahmat-Ruzi" LLC and opens the first factory of the company at 111 Heydar Aliyev avenue, 
      Narimanov district, Baku. The enthusiastic welcome of buyers in the early stages of their products gives 
      a strong impetus to future work.`,
      az: `
      Sabir Babayev "Zəhmət-Ruzi" MMC-ni təsis edib və şirkətin ilk fabrikini Bakı şəhəri, Nərimanov rayonu, 
      Heydər Əliyev prospekti 111 ünvanında açıb. Məhsullarının ilkin mərhələlərində alıcılar tərəfindən böyük 
      maraqla qarşılanması gələcək işlərə güclü təkan verir..`,
    },
  },
  {
    year: 2002,
    description: {
      en: `
      “Zahmat-Ruzi” LLC is already beginning to produce its products under the trademark “SAB”. 
      The word "SAB" is derived from the first letters of the name and father’s name of the 
      founder of the company, Sabir Atamali Babayev.`,
      az: `
      “Zəhmət-Ruzi” MMC artıq məhsullarını “SAB” ticarət nişanı altında istehsal etməyə başlayır. 
      “SAB” sözü şirkətin təsisçisi Sabir Atamalı Babayevin adının və atasının adının ilk hərflərindən yaranıb.`,
    },
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

  var historySplide = new Splide(".history-splide", {
    type: "fade",
    rewind: true,
    pagination: false
  });

  function updateSlideContent(index, id, slideName, yearElementId = null) {
    const descriptionElement = document.getElementById(id);
    const yearElement = document.getElementById(yearElementId);

    const currentLang = localStorage.getItem("language");
    const newLang = currentLang === "en" ? "en" : "az";

    descriptionElement.innerHTML = slideName[index].description[newLang];
    if (yearElement) {
      yearElement.innerHTML = slideName[index].year;
    }
  }

  updateSlideContent(0, "slide-description", aboutCompanySlide);
  updateSlideContent(
    0,
    "slide-description-history",
    historySlide,
    "slide-description-year"
  );

  splide.on("moved", function (newIndex) {
    updateSlideContent(newIndex, "slide-description", aboutCompanySlide);
  });

  historySplide.on("moved", function (newIndex) {
    updateSlideContent(newIndex, "slide-description-history", historySlide);
  });

  function mountSlide(slideName, customPagniationId, customArrowServiceId) {
    slideName.on("mounted", function () {
      var paginationItems = slideName.Components.Pagination.items;
      var customPagination = document.getElementById(customPagniationId);

      var prevArrow = slideName.Components.Arrows.arrows.prev;
      var nextArrow = slideName.Components.Arrows.arrows.next;
      var customArrows = document.getElementById(customArrowServiceId);

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

      if(customPagination){
        paginationItems.forEach(function (item) {
          customPagination.appendChild(item.button);
        });
      }
      if(customArrows){
        customArrows.appendChild(prevArrow);
        customArrows.appendChild(nextArrow);
      }
    });
  }

  mountSlide(splide, "splide_custom_pagination", "custom_arrows_services");
  mountSlide(
    historySplide,
    "splide_custom_pagination_history",
    "custom_arrows_services_history"
  );
  splide.mount();
  historySplide.mount();

  new fullpage("#fullpage", {
    autoScrolling: true,
  });

  // Meets hovering slider
  const meatImage = document.getElementById("meat-image");
  const defaultImageSrc = "/assets/images/about-us/meet.png";
  const defaultTextClass = "text-primary";
  const defaultRedColor = "#EE3239";
  const grayColor = "#7A7878";
  const meetTitles = document.querySelectorAll(".meet-titles");

  document.querySelectorAll(".meet-option").forEach((option) => {
    option.addEventListener("mouseenter", function () {
      const newSrc = this.getAttribute("data-img-src");
      meatImage.src = newSrc;

      meetTitles.forEach((title) => {
        title.classList.remove(defaultTextClass);
        title.style.color = grayColor;
      });

      const title = this.querySelector(".meet-titles");
      title.classList.add(defaultTextClass);
      title.style.color = defaultRedColor;

      const indicator = this.querySelector(".indicator");
      const line = this.querySelector(".line");

      indicator.style.borderColor = defaultRedColor;
      line.style.backgroundColor = defaultRedColor;
    });

    option.addEventListener("mouseleave", function () {
      meatImage.src = defaultImageSrc;

      meetTitles.forEach((title) => {
        title.classList.remove(defaultTextClass);
        title.style.color = grayColor;
      });

      document.querySelector(".meet").classList.add(defaultTextClass);
      document.querySelector(".meet").style.color = defaultRedColor;

      document
        .querySelectorAll(".indicator")
        .forEach((ind) => (ind.style.borderColor = grayColor));
      document
        .querySelectorAll(".line")
        .forEach((ln) => (ln.style.backgroundColor = grayColor));
    });
  });

  document
    .querySelector(".meet_section_info")
    .addEventListener("mouseleave", function () {
      meatImage.src = defaultImageSrc;
      meetTitles.forEach((title) => {
        title.classList.remove(defaultTextClass);
        title.style.color = grayColor;
      });
      document.querySelector(".meet").classList.add(defaultTextClass);
      document.querySelector(".meet").style.color = defaultRedColor;

      document
        .querySelectorAll(".indicator")
        .forEach((ind) => (ind.style.borderColor = grayColor));
      document
        .querySelectorAll(".line")
        .forEach((ln) => (ln.style.backgroundColor = grayColor));
    });
});
