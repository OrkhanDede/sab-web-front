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
        slide.classList.remove("hidden")
        slide.classList.add("block")
      } else {
        slide.classList.remove("block")
        slide.classList.add("hidden")
      }
    });

    swiperSlides.forEach((slide) => {
      if (category === "all" || slide.dataset.category === category) { 
        slide.classList.remove("hidden")
        slide.classList.add("block")
      } else {
        slide.classList.remove("block")
        slide.classList.add("hidden")
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
});
