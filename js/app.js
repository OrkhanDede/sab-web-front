document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const closeIcon = document.getElementById("closeNavbar");
    const mobileNavbar = document.getElementById("mobileNavbar");

    hamburgerIcon.addEventListener("click", () => {
        mobileNavbar.classList.remove("hidden");
        mobileNavbar.classList.add("flex");
    })

    closeIcon.addEventListener("click", () => {
        mobileNavbar.classList.remove("flex");
        mobileNavbar.classList.add("hidden");
    })
})