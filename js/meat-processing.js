const companies = [
  {
    id: 1,
    title: "SAB",
    query: "sab",
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
    query: "mrfood",
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
    query: "umid",
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
    query: "kovser",
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

// const regionsDescription = [
//   {
//     code: "AZE1689",
//     retailPartners: 231,
//     horecaPartners: 82,
//   },
//   {
//     code: "AZE1728",
//     retailPartners: 92,
//     horecaPartners: 14,
//   },
// ];

document.addEventListener("DOMContentLoaded", () => {
  const activeCompany = 1;
  const isMobile = document.body.clientWidth <= 991 ? true : false;

  new fullpage("#fullpage", {
    navigation: true,
    anchors: ["brands", "statistics", "partners", "map", "export_countries"],
    afterLoad: function (origin, destination, direction) {
      window.history.replaceState(null, null, `#${destination.anchor}`);
    },
  });

  var restaurantSplide = new Splide(".horeca-splide", {
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

  var hotelSplide = new Splide(".retail-splide", {
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

  var cateringSplide = new Splide(".b2g-splide", {
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
    restaurantSplide,
    hotelSplide,
    cateringSplide,
  };

  const companyElements = document.querySelectorAll("[data-company]");
  companyElements.forEach((com) => {
    com.addEventListener("click", () => {
      const companyId = parseInt(com.getAttribute("data-company"));
      companyElements.forEach((c) => {
        c.classList.remove("bg-[#F0F0F0]");
        if (isMobile) {
          c.classList.remove("border-primary");
        }
      });
      com.classList.add("bg-[#F0F0F0]");
      if (isMobile) {
        com.classList.add("border-primary");
      }
      setCompany(companyId);
    });
  });

  function setCompany(id) {
    let title = document.getElementById(`title${isMobile ? "_mobile" : ""}`);
    let description = document.getElementById("description");
    let image = document.getElementById("image");
    let navigateBtn = document.getElementById("view_product_btn");
    let company = companies.find((c) => c.id === id);

    if (company) {
      const currentLang = localStorage.getItem("language") || "az";
      const newLang = currentLang === "en" ? "en" : "az";

      navigateBtn.href =
        `/pages/our-activites.html?category=meat&subcategory=` + company.query;
      title.textContent = company.title;
      description.innerHTML = company.description[newLang];
      image.src = company.image;
    }
  }

  setCompany(activeCompany);

  const regionName = document.getElementById("regionName");
  const retailDesc = document.getElementById("retailPartners");
  const horecaDesc = document.getElementById("horecaPartners");

  const regions = [
    {
      title: "abseron",
      regions: [57, 78, 5, 30],
      regionName: {
        az: "Abşeron",
        en: "Absheron",
      },
      description: "Abseron",
      retailPartners: 231,
      horecaPartners: 82,
    },
    {
      title: "quba",
      regions: [19, 56, 41, 43, 28],
      description: "Quba-Khacmaz",
      regionName: {
        az: "Quba-Xaçmaz",
        en: "Quba-Khacmaz",
      },
      retailPartners: 92,
      horecaPartners: 14,
    },
  ];

  const currentLang = localStorage.getItem("language");
  const newLang = currentLang === "en" ? "en" : "az";

  function addHoverClass(region, type) {
    resetFill();
    const hoveredRegions = regions.find((r) => r.title === region);
    hoveredRegions.regions.forEach((h) => {
      const element = document.getElementById(`region_${h}`);
      if (type === "add") {
        regionName.textContent = hoveredRegions.regionName[newLang];
        retailDesc.textContent = hoveredRegions.retailPartners;
        horecaDesc.textContent = hoveredRegions.horecaPartners;
        element.classList.add("hovered");
      } else {
        // addHoverClass("abseron", 'add');
        element.classList.remove("hovered");
      }
    });
  }

  addHoverClass("abseron", "add");

  function resetFill() {
    regions.forEach((r) => {
      r.regions.map((x) => {
        const element = document.getElementById(`region_${x}`);
        element.classList.remove("hovered");
      });
    });
  }

  regions.forEach((r) => {
    r.regions.map((x) => {
      const element = document.getElementById(`region_${x}`);
      element.addEventListener("mouseover", () =>
        addHoverClass(r.title, "add")
      );
      // element.addEventListener("mouseout", () => addHoverClass(r.title, 'remove'));
    });
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
