document.addEventListener("DOMContentLoaded", () => {
  getTranslate();
  getLanguageList();
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
      changeLanguage("az");
    }
  }
}

function getLanguageList() {
  let list = document.querySelector("[data-language-list]");
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
}

function getLanguageLocal() {
  return localStorage.getItem("language");
}

async function translatePage(targetLanguage) {
  const translations = await fetchTranslations(targetLanguage);
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    if (translations[translationKey]) {
      element.textContent = translations[translationKey];
    }
  });
}
