document.addEventListener("DOMContentLoaded", () => {
  getTranslate();
  getLanguageList();
  getCurrentYear();
});

function getTranslate(lang = null) {
  if (lang) {
    changeLanguage(lang);
  } else {
    const currentLang = getLanguageLocal();
    if (
      currentLang &&
      currentLang != "undefined" &&
      (currentLang === "az" || currentLang === "en" || currentLang === "ru")
    ) {
      translatePage(currentLang);
    } else {
      changeLanguage("en");
    }
  }
}

function getLanguageList() {
  const isMobile = document.body.clientWidth <= 991 ? true : false;
  const listId = "data-language-list" + (isMobile ? "-mobile" : "")
  let list = document.getElementById(listId);
  
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  let languages = [];
  let currentLang = getLanguageLocal();
  if (currentLang === "az") {
    languages = ["en", "ru"];
  }
  if (currentLang === "en") {
    languages = ["az", "ru"];
  }
  if (currentLang === "ru") {
    languages = ["az", "en"];
  }
  
  languages.map((language) => {
    const lang = document.createElement("li");
    lang.classList.add("py-3")
    lang.innerText = language;
    lang.addEventListener("click", () => changeLanguage(language))
    list.appendChild(lang);
  });
}

async function fetchTranslations(language) {
  try {
    const response = await fetch(`/assets/i18n/${language}.json`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {};
  }
}

function changeLanguage(value) {
  localStorage.setItem("language", value);
  translatePage(value);
  document.querySelector("html").lang = value;
  getLanguageList();
  location.reload();
}

async function translatePage(targetLanguage) {
  const translations = await fetchTranslations(targetLanguage);
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");

    if (translations[translationKey]) {
      let translatedText = translations[translationKey];

      if (
        element.tagName === "H1" ||
        element.tagName === "P" ||
        element.tagName === "DIV"
      ) {
        translatedText = translatedText.replace(/\n/g, "<br>");
        element.innerHTML = translatedText;
      } else {
        element.textContent = translatedText;
      }
    }
  });
}

function changeLanguageWithBtn() {
  const currentLang = getLanguageLocal();
  const newLang = currentLang === "az" ? "en" : "az";
  changeLanguage(newLang);
}

function getCurrentYear() {
  const elements = document.querySelectorAll("[data-currYear]");
  if (elements.length) {
    elements.forEach((element) => {
      const date = new Date();
      const year = date.getFullYear();
      element.innerHTML = year;
    });
  }
}

function getLanguageLocal() {
  return localStorage.getItem("language");
}
