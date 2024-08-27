function initializeAccordion() {
    const accordionItems = document.querySelectorAll("#custom-accordion .custom-accordion-item");
    const screenWidth = window.innerWidth;
    
    accordionItems.forEach(item => {
        const button = item.querySelector(".custom-accordion-button");
        const content = item.querySelector(".custom-accordion-content");
        
        if (screenWidth > 991) {
            button.setAttribute("aria-expanded", "true");
            content.classList.remove("hidden");
        } else {
            button.setAttribute("aria-expanded", "false");
            content.classList.add("hidden");
        }
        button.addEventListener("click", function () {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            
            if (isExpanded) {
                button.setAttribute("aria-expanded", "false");
                content.classList.add("hidden");
            } else {
                button.setAttribute("aria-expanded", "true");
                content.classList.remove("hidden");
            }
        });
    });
}

initializeAccordion();

window.addEventListener('resize', initializeAccordion);