document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: true,

    afterLoad: function (origin, destination, direction) {
      const section = destination.index;
      
      // Buisness and direcctions
      if (section === 1) {
        const firstContent = document.querySelector(".buisness_direction_section_first_content");
        const secondContent = document.querySelector(".buisness_direction_section_second_content");
        firstContent.classList.add("fade-out");
        secondContent.classList.remove("fade-in");
        secondContent.classList.add("fade-in");
      }
      if ((section === 0 && direction == 'up') 
        // aşağıdan yuxarı scroll olanda animasiya olmağını istəmirsənsə 23 cü sətri kommentə al
        // || (section === 2 && direction == 'down')
      ) {
        const firstContent = document.querySelector(".buisness_direction_section_first_content");
        const secondContent = document.querySelector(".buisness_direction_section_second_content");
        firstContent.classList.remove("fade-out");
        firstContent.classList.add("fade-in");
        secondContent.classList.remove("fade-in");
        secondContent.classList.add("fade-out");
      }
      // Distributing
      if (section === 4) {
        const firstContent = document.querySelector(".distributing_first_section");
        const secondContent = document.querySelector(".distributing_second_section");
        firstContent.classList.add("fade-out");
        secondContent.classList.remove("fade-in");
        secondContent.classList.add("fade-in");
      }
      // if ((section === 3 && direction == 'up') 
      //   // aşağıdan yuxarı scroll olanda animasiya olmağını istəmirsənsə 38 ci sətri kommentə al
      //   // || (section === 2 && direction == 'down')
      // ) {
      //   const firstContent = document.querySelector(".distributing_first_section");
      //   const secondContent = document.querySelector(".distributing_second_section");
      //   firstContent.classList.remove("fade-out");
      //   firstContent.classList.add("fade-in");
      //   secondContent.classList.remove("fade-in");
      //   secondContent.classList.add("fade-out");
      // }
    },
  });
});