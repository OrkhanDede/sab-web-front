document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const preloaderLogo = document.querySelector("#preloader .preloader-logo");

  const isFirstTime = !sessionStorage.getItem("preloaderShown");

  if (isFirstTime) {
    preloaderLogo.classList.add("preloader-logo-animation", "w-0");
  } else {
    preloaderLogo.classList.add("w-[15rem]");
  }

  window.onload = function () {
    if (isFirstTime) {
      setTimeout(() => {
        preloader.classList.add("preloader-fade-out");
      }, 1000);
      sessionStorage.setItem("preloaderShown", true);
    } else {
      preloader.classList.add("preloader-fade-out");
    }
  };
});
