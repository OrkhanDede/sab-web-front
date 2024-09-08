function initializeAccordion() {
  const accordionItems = document.querySelectorAll(
    "#custom-accordion .custom-accordion-item"
  );
  const screenWidth = window.innerWidth;

  accordionItems.forEach((item) => {
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

document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(
    ".custom-accordion-button"
  );
  const accordionItems = document.querySelectorAll(
    ".custom-accordion-content p"
  );
  const mobileCategoryButtons = document.querySelectorAll("#tabId");
  const mobileSubcategoryItems = document.querySelectorAll(
    "#mobileMeatSubCategory .subcategory-image"
  );
  const mobileMeatSubcategories = document.getElementById(
    "mobileMeatSubCategory"
  );
  const mobileDairySubcategories = document.getElementById(
    "mobileDairySubCategory"
  );

  let selectedTag = null;

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      updateURLParams(category, null, null);
      filterProducts(category, null, null);
      setActiveCategory(category, null);
      renderTags(category, null);
      setActiveTag("all");
      selectedTag = null;

      toggleMobileSubcategories(category);
    });
  });

  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");
      const subcategory = item.getAttribute("data-subcategory");
      updateURLParams(category, subcategory, null);
      filterProducts(category, subcategory, null);
      setActiveCategory(category, subcategory);
      renderTags(category, subcategory);
      setActiveTag("all");
      selectedTag = null;
    });
  });

  mobileCategoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      setActiveMobileCategory(button);

      updateURLParams(category, null, null);
      filterProducts(category, null, null);
      setActiveCategory(category, null);
      renderTags(category, null);
      setActiveTag("all");

      toggleMobileSubcategories(category);
    });
  });

  mobileSubcategoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");
      const subcategory = item.getAttribute("data-subcategory");

      updateURLParams(category, subcategory, null);
      filterProducts(category, subcategory, null);
      setActiveCategory(category, subcategory);
      renderTags(category, subcategory);

      setActiveMobileSubcategory(item);
    });
  });

  function toggleMobileSubcategories(category) {
    if (category === "meat") {
      mobileMeatSubcategories.style.display = "flex";
      if (mobileDairySubcategories)
        mobileDairySubcategories.style.display = "none";
    } else if (category === "dairy") {
      mobileMeatSubcategories.style.display = "none";
      if (mobileDairySubcategories)
        mobileDairySubcategories.style.display = "flex";
    }
  }
  function setActiveMobileCategory(activeButton) {
    mobileCategoryButtons.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
    });
    activeButton.style.backgroundColor = "#FFEBEB";
    activeButton.style.color = "black";
  }

  function setActiveMobileSubcategory(activeSubcategory) {
    mobileSubcategoryItems.forEach((item) => {
      item.style.border = "1px solid #F0F0F0";
    });
    activeSubcategory.style.border = "2px solid #ED1C24";
  }
  const urlParams = new URLSearchParams(window.location.search);
  let category = urlParams.get("category");
  let subcategory = urlParams.get("subcategory");
  let tag = urlParams.get("tag");
  if (category) {
    filterProducts(category, subcategory, tag || "all");
    setActiveCategory(category, subcategory);
    renderTags(category, subcategory);
    const activeMobileButton = document.querySelector(
      `#tabId[data-category="${category}"]`
    );

    if (activeMobileButton) {
      setActiveMobileCategory(activeMobileButton);
    }
    setActiveTag(tag || "all");
    toggleMobileSubcategories(category);
  } else {
    let initCategory = "meat";
    let initSubcategory = null;
    filterProducts(initCategory, initSubcategory, tag || "all");
    setActiveCategory(initCategory, initSubcategory);
    renderTags(initCategory, initSubcategory);
    toggleMobileSubcategories(initCategory);
    setActiveTag("all");
  }

  function updateURLParams(category, subcategory, tag) {
    const url = new URL(window.location);
    url.searchParams.set("category", category);
    if (subcategory) {
      url.searchParams.set("subcategory", subcategory);
    } else {
      url.searchParams.delete("subcategory");
    }
    if (tag && tag !== "all") {
      url.searchParams.set("tag", tag);
    } else {
      url.searchParams.delete("tag");
    }
    window.history.pushState({}, "", url);
  }

  function filterProducts(category, subcategory, tag) {
    const products = document.querySelectorAll(".product-item");
    products.forEach((product) => {
      const productCategory = product.getAttribute("data-category");
      const productSubcategory = product.getAttribute("data-subcategory");
      const productTags = product.getAttribute("data-tags")?.split(",") || [];
      if (
        productCategory === category &&
        (!subcategory || productSubcategory === subcategory) &&
        (!tag || tag === "all" || productTags.includes(tag))
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  function setActiveCategory(category, subcategory) {
    document.querySelectorAll(".custom-accordion-button").forEach((el) => {
      el.style.color = "black";
    });
    document.querySelectorAll(".custom-accordion-item").forEach((el) => {
      el.style.border = "1px solid #F0F0F0";
    });

    document.querySelectorAll(".custom-accordion-content p").forEach((el) => {
      el.style.color = "#808080";
    });

    document.querySelector(`[data-category="${category}"]`).style.color =
      "#ED1C24";
    const accordion = document.querySelector(`.${category}-accordion`);
    accordion.style.border = "1.4px solid #ee3239";
    if (subcategory) {
      document
        .querySelectorAll(
          `[data-category="${category}"][data-subcategory="${subcategory}"]`
        )
        .forEach((el) => {
          el.style.color = "#ED1C24";
        });
    }
  }

  function renderTags(category, subcategory) {
    const tagContainer = document.getElementById("tags-container");
    tagContainer.innerHTML = "";

    if (category === "meat") {
      const allTagElement = document.createElement("button");
      allTagElement.textContent = "All";
      allTagElement.classList.add(
        "tag-item",
        "capitalize",
        "py-5",
        "px-10",
        "text-[1.4rem]"
      );
      allTagElement.setAttribute("data-tag", "all");
      allTagElement.addEventListener("click", () => {
        updateURLParams(category, subcategory, null);
        filterProducts(category, subcategory, null);
        setActiveTag("all");
      });
      tagContainer.appendChild(allTagElement);
    }

    const tags = Array.from(
      document.querySelectorAll(`.product-item[data-category="${category}"]`)
    )
      .map((product) => product.getAttribute("data-tags").split(","))
      .flat()
      .filter(
        (value, index, self) => self.indexOf(value) === index && value !== ""
      );

    if (tags.length) {
      tags.forEach((tag) => {
        const tagElement = document.createElement("button");
        tagElement.textContent = tag;
        tagElement.classList.add(
          "tag-item",
          "capitalize",
          "py-5",
          "px-10",
          "text-[1.4rem]"
        );
        tagElement.setAttribute("data-tag", tag);
        tagElement.addEventListener("click", () => {
          updateURLParams(category, subcategory, tag);
          filterProducts(category, subcategory, tag);
          setActiveTag(tag);
        });
        tagContainer.appendChild(tagElement);
      });
    }
  }

  function setActiveTag(tag) {
    document.querySelectorAll(".tag-item").forEach((tagItem) => {
      tagItem.style.color =
        tagItem.getAttribute("data-tag") === tag ? "#ED1C24" : "#6b7280";
    });
  }

  // renderTags("meat", null);
});

window.addEventListener("resize", initializeAccordion);
