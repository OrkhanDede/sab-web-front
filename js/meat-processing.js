const companies = [
  {
    id: 1,
    title: "SAB",
    description: {
      az: `
      Yerli şirkət olan “Zəhmət-Ruzi” Məhdud Məsuliyyətli Cəmiyyəti 1998-ci ildən fəaliyyət göstərir. Hazırda “Zəhmət-Ruzi” MMC 3 hektardan artıq ərazidə yerləşir.
      <br> <br>
      Ən müasir avadanlıqlarla təchiz edilmiş laboratoriyalar, istehsal sexləri, anbar və daşınma sistemləri. “Zəhmət-Ruzi” ailəsində bu gün müxtəlif sahələr üzrə 150-yə yaxın yüksək ixtisaslı mütəxəssis çalışır.`,
      en: `
        The local company "Zəhmət-Ruzi" LLC has been operating since 1998. Currently, "Zəhmət-Ruzi" LLC is located on an area of more than 3 hectares.
        <br> <br>
        The company features laboratories, production workshops, warehouses, and transportation systems equipped with the most modern equipment. Today, around 150 highly qualified specialists work across various fields within the "Zəhmət-Ruzi" family.`,
    },
    image: "/assets/images/meat-processing/sab-banner.png",
  },
  {
    id: 2,
    title: "MR.FOOD",
    description: {
      az: `
      Yerli şirkət olan “Zəhmət-Ruzi” Məhdud Məsuliyyətli Cəmiyyəti 1998-ci ildən fəaliyyət göstərir. Hazırda “Zəhmət-Ruzi” MMC 3 hektardan artıq ərazidə yerləşir.
      <br> <br>
      Ən müasir avadanlıqlarla təchiz edilmiş laboratoriyalar, istehsal sexləri, anbar və daşınma sistemləri. “Zəhmət-Ruzi” ailəsində bu gün müxtəlif sahələr üzrə 150-yə yaxın yüksək ixtisaslı mütəxəssis çalışır.`,
      en: `
        The local company "Zəhmət-Ruzi" LLC has been operating since 1998. Currently, "Zəhmət-Ruzi" LLC is located on an area of more than 3 hectares.
        <br> <br>
        The company features laboratories, production workshops, warehouses, and transportation systems equipped with the most modern equipment. Today, around 150 highly qualified specialists work across various fields within the "Zəhmət-Ruzi" family.`,
    },
    image: "/assets/images/meat-processing/mr-food-banner.jpg",
  },
  {
    id: 3,
    title: "ÜMİD",
    description: {
      az: `
      Yerli şirkət olan “Zəhmət-Ruzi” Məhdud Məsuliyyətli Cəmiyyəti 1998-ci ildən fəaliyyət göstərir. Hazırda “Zəhmət-Ruzi” MMC 3 hektardan artıq ərazidə yerləşir.
      <br> <br>
      Ən müasir avadanlıqlarla təchiz edilmiş laboratoriyalar, istehsal sexləri, anbar və daşınma sistemləri. “Zəhmət-Ruzi” ailəsində bu gün müxtəlif sahələr üzrə 150-yə yaxın yüksək ixtisaslı mütəxəssis çalışır.`,
      en: `
        The local company "Zəhmət-Ruzi" LLC has been operating since 1998. Currently, "Zəhmət-Ruzi" LLC is located on an area of more than 3 hectares.
        <br> <br>
        The company features laboratories, production workshops, warehouses, and transportation systems equipped with the most modern equipment. Today, around 150 highly qualified specialists work across various fields within the "Zəhmət-Ruzi" family.`,
    },
    image: "/assets/images/meat-processing/umid-banner.jpg",
  },
  {
    id: 4,
    title: "KÖVSƏR",
    description: {
      az: `
      Yerli şirkət olan “Zəhmət-Ruzi” Məhdud Məsuliyyətli Cəmiyyəti 1998-ci ildən fəaliyyət göstərir. Hazırda “Zəhmət-Ruzi” MMC 3 hektardan artıq ərazidə yerləşir.
      <br> <br>
      Ən müasir avadanlıqlarla təchiz edilmiş laboratoriyalar, istehsal sexləri, anbar və daşınma sistemləri. “Zəhmət-Ruzi” ailəsində bu gün müxtəlif sahələr üzrə 150-yə yaxın yüksək ixtisaslı mütəxəssis çalışır.`,
      en: `
        The local company "Zəhmət-Ruzi" LLC has been operating since 1998. Currently, "Zəhmət-Ruzi" LLC is located on an area of more than 3 hectares.
        <br> <br>
        The company features laboratories, production workshops, warehouses, and transportation systems equipped with the most modern equipment. Today, around 150 highly qualified specialists work across various fields within the "Zəhmət-Ruzi" family.`,
    },
    image: "/assets/images/meat-processing/kovser-banner.jpg",
  },
];

const regionsDescription = [
  {
    code: "AZE1689",
    retailPartners: 231,
    horecaPartners: 82,
  },
  {
    code: "AZE1728",
    retailPartners: 92,
    horecaPartners: 14,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const activeCompany = 1;

  const companyElements = document.querySelectorAll("[data-company]");
  companyElements.forEach((com) => {
    com.addEventListener("click", () => {
      const companyId = parseInt(com.getAttribute("data-company"));
      companyElements.forEach((c) => c.classList.remove("bg-[#F0F0F0]"));
      com.classList.add("bg-[#F0F0F0]");
      setCompany(companyId);
    });
  });

  function setCompany(id) {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let image = document.getElementById("image");
    let company = companies.find((c) => c.id === id);

    if (company) {
      const currentLang = localStorage.getItem("language") || "az";
      const newLang = currentLang === "en" ? "en" : "az";

      title.textContent = company.title;
      description.innerHTML = company.description[newLang];
      image.src = company.image;
    }
  }

  setCompany(activeCompany);

  new fullpage("#fullpage", {
    autoScrolling: true,

    // afterLoad: function (origin, destination, direction) {
    //   const section = destination.index;

    // },
  });
  var splide = new Splide(".splide", {
    gap: "2rem",
    type: "slide",
    perPage: 6,
    autoplay: true,
    interval: 2000,
    speed: 1000,
    gap: "1rem",
    rewind: false,
    pauseOnHover: false,
    pagination: false,
    arrows: false,
    breakpoints: {
      100: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      991: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
      1440: {
        perPage: 5,
      },
    },
  }).mount();

  const productSwiper = new Swiper(".products-swiper", {
    loop: true,
    rewind: true,
    spaceBetween: 16,
    slidesPerView: 4,
    pagination: false,
    navigation: {
      prevEl: ".button-prev",
      nextEl: ".button-next",
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  const categoryButtons = document.querySelectorAll(".categoryButton");
  const splideSlides = document.querySelectorAll(".splide__slide");
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  function filterSlides(category) {
    splideSlides.forEach((slide) => {
      if (category === "all" || slide.dataset.category === category) {
        slide.classList.remove("hidden");
        slide.classList.add("block");
      } else {
        slide.classList.remove("block");
        slide.classList.add("hidden");
      }
    });

    swiperSlides.forEach((slide) => {
      if (category === "all" || slide.dataset.category === category) {
        slide.classList.remove("hidden");
        slide.classList.add("block");
      } else {
        slide.classList.remove("block");
        slide.classList.add("hidden");
      }
    });
    splide.refresh();
    productSwiper.update();
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      const selectedCategory = this.getAttribute("data-category");

      filterSlides(selectedCategory);
    });
  });

  filterSlides("hotel");

  const regionName = document.getElementById("regionName");
  const retailDesc = document.getElementById("retailPartners");
  const horecaDesc = document.getElementById("horecaPartners");

  const mapContainer = document.getElementById("map");

  const updateRegionInfo = (code, nameAz, nameEn) => {
    const description = regionsDescription.find((r) => r.code === code);
    const currentLang = localStorage.getItem("language") || "az";
    const regionTitle = currentLang === "en" ? nameEn : nameAz;

    const region = document.querySelector(`.sm_state_${code}`);
    
    region?.setAttribute("fill", "red");

    regionName.innerText = regionTitle;
    retailDesc.innerText = description?.retailPartners || "";
    horecaDesc.innerText = description?.horecaPartners || "";
  };

  const resetRegionColor = (selector) => {
    const regionElement = document.querySelector(selector);
    regionElement?.setAttribute("fill", "#c0c0c0");
  };

  updateRegionInfo("AZE1689", "Abşeron", "Absheron");

  mapContainer.addEventListener("mouseover", (e) => {
    const codeClass = e.target.classList[1];
    if (!codeClass) return;

    const code = codeClass.slice(9, 16);

    if (code.startsWith("AZE")) {
      resetRegionColor(".sm_state_AZE1689");
      resetRegionColor(".sm_state_AZE1728");

      switch (code) {
        case "AZE1689":
          updateRegionInfo("AZE1689", "Abşeron", "Absheron");
          break;
        case "AZE1728":
          updateRegionInfo("AZE1728", "Quba-Xaçmaz", "Quba-Khacmaz");
          break;
        default:
          updateRegionInfo("AZE1689", "Abşeron", "Absheron");
          break;
      }
    }
  });

  mapContainer.addEventListener("mouseleave", () => {
    resetRegionColor(".sm_state_AZE1689");
    updateRegionInfo("AZE1689", "Abşeron", "Absheron");
  });
});
