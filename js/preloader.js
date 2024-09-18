document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const preloaderLogo = document.querySelector("#preloader .preloader-logo");

  const isFirstTime = !sessionStorage.getItem("preloaderShown");

  window.onload = function () {
    if (isFirstTime) {
      preloaderLogo.classList.add("preloader-logo-animation", "w-0");
      setTimeout(() => {
        preloader.classList.add("preloader-fade-out");
      }, 2000);
      sessionStorage.setItem("preloaderShown", true);
    } else {
      preloader.classList.add("preloader-fade-out");
      preloaderLogo.classList.add("w-[15rem]");
    }
  };
});
