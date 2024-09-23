document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const preloaderBg = document.getElementById("preloaderBg");
  console.log(preloaderBg);
  
  window.onload = function () {
    preloaderBg.classList.add("preloader-animation");
    setTimeout(() => {
      preloaderBg.classList.remove("-bottom-full");
      preloaderBg.classList.add("bottom-0");
      preloader.style.display = "none"
    }, 1000);
  };
});