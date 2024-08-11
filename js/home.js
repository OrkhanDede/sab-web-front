const servicesData = [
  {
    title: "Fridge storage",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a alias rem, repudiandae maiores modi facere excepturi eos aliquid ea tenetur sint assumenda qui eaque eveniet? Sequi, dolores sed.",
    image: "/assets/images/services/fridge-storage.png",
  },
  {
    title: "Packaging",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a alias rem, repudiandae maiores modi facere excepturi eos aliquid ea tenetur sint assumenda qui eaque eveniet? Sequi, dolores sed.",
    image: "/assets/images/services/packaging.png",
  },
  {
    title: "Laboratory analysis",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a alias rem, repudiandae maiores modi facere excepturi eos aliquid ea tenetur sint assumenda qui eaque eveniet? Sequi, dolores sed.",
    image: "/assets/images/services/labaratory.png",
  },
];

window.addEventListener("scroll", function () {
  var element = document.querySelector(".buisness_direction_section");
  var position = element.getBoundingClientRect();

  const firstContent = document.querySelector(
    ".buisness_direction_section_first_content"
  );

  const secondContent = document.querySelector(
    ".buisness_direction_section_second_content"
  );

  // if (position.top < window.innerHeight && position.bottom >= 0) {
  //   setTimeout(() => {
  //     firstContent.classList.remove("fade-in");
  //     firstContent.classList.add("fade-out");

  //     secondContent.classList.remove("fade-out");
  //     secondContent.classList.add("buisness-directions");
  //     secondContent.classList.add("fade-in");
  //   }, 800);
  // }
});

document.addEventListener("DOMContentLoaded", () => {
  
});
