// document.addEventListener("DOMContentLoaded", function () {
//   const preloader = document.getElementById("preloader");

//   const isFirstTime = !sessionStorage.getItem("preloaderShown");

//   if (isFirstTime) {
//     setTimeout(() => {
//       preloader.classList.add("preloader-fade-out");
//       sessionStorage.setItem("preloaderShown", "true");
//     }, 3000);
//   } else {
//     window.onload = function () {
//       preloader.classList.add("preloader-fade-out");
//     };
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.classList.add('preloader-fade-out');
    }, 1000);
  };
});