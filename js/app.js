document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeNavbar");
  const mobileNavbar = document.getElementById("mobileNavbar");
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
  hamburgerIcon.addEventListener("click", () => {
    mobileNavbar.classList.remove("translate-x-[100vw]");
    mobileNavbar.classList.add("translate-x-0");
  });

  closeIcon.addEventListener("click", () => {
    mobileNavbar.classList.add("translate-x-[100vw]");
    mobileNavbar.classList.remove("translate-x-0");
  });
});
