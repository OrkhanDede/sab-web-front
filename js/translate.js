document.addEventListener("DOMContentLoaded", () => {
  getTranslate();
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
      (currentLang === "az" || currentLang === "en")
    ) {
      translatePage(currentLang);
    } else {
      changeLanguage("az");
    }
  }
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
  location.reload();
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
