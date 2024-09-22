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
    }, 1500);
  };
});



// document.addEventListener("DOMContentLoaded", function () {
//   const preloader = document.getElementById("preloader");
//   const preloaderLogo = document.querySelector("#preloader .preloader-logo");

//   const isFirstTime = !sessionStorage.getItem("preloaderShown");

//   if (isFirstTime) {
//     preloaderLogo.classList.add("preloader-logo-animation", "w-0");
//   } else {
//     preloaderLogo.classList.add("w-[15rem]");
//   }

//   window.onload = function () {
//     if (isFirstTime) {
//       setTimeout(() => {
//         preloader.classList.add("preloader-fade-out");
//       }, 2000);
//       sessionStorage.setItem("preloaderShown", true);
//     } else {
//       preloader.classList.add("preloader-fade-out");
//     }
//   };
// });
