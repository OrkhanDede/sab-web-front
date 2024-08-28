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

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.custom-accordion-button');
    const accordionItems = document.querySelectorAll('.custom-accordion-content p');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            updateURLParams(category, null);
            filterProducts(category, null);
            setActiveCategory(category, null);
        });
    });

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            const subcategory = item.getAttribute('data-subcategory');
            updateURLParams(category, subcategory);
            filterProducts(category, subcategory);
            setActiveCategory(category, subcategory);
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const subcategory = urlParams.get('subcategory');
    if (category) {
        filterProducts(category, subcategory);
        setActiveCategory(category, subcategory);
    }
});

function updateURLParams(category, subcategory) {
    const url = new URL(window.location);
    url.searchParams.set('category', category);
    if (subcategory) {
        url.searchParams.set('subcategory', subcategory);
    } else {
        url.searchParams.delete('subcategory');
    }
    window.history.pushState({}, '', url);
}

function filterProducts(category, subcategory) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productSubcategory = product.getAttribute('data-subcategory');
        if (productCategory === category && (!subcategory || productSubcategory === subcategory)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function setActiveCategory(category, subcategory) {
    document.querySelectorAll('.custom-accordion-button, .custom-accordion-content p').forEach(el => {
        el.style.color = '#808080';
    });

    document.querySelector(`[data-category="${category}"]`).style.color = '#ED1C24';
    if(subcategory){
        document.querySelectorAll(`[data-category="${category}"][data-subcategory="${subcategory}"]`).forEach(el => {
            el.style.color = '#ED1C24';
        });
    }
}

window.addEventListener('resize', initializeAccordion);