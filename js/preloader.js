document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const preloaderBg = document.getElementById("preloaderBg");
  
  if(preloaderBg && preloader){
    window.onload = function () {
      preloaderBg.classList.add("preloader-animation");
      setTimeout(() => {
        preloaderBg.classList.remove("-bottom-full");
        preloaderBg.classList.add("bottom-0");
        preloader.style.display = "none"
      }, 1000);
    };
  }
});