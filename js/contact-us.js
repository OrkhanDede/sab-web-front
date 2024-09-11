document.addEventListener("DOMContentLoaded", () => {
  let activeTab = 1;
  const formGroup = document.getElementById("formGroup");

  const inputs = [
    {
      tab: [1, 2],
      name: "name",
      placeHolder: "Name / Surname",
      type: "text",
    },
    {
      tab: [1, 2],
      name: "phoneNumber",
      placeHolder: "Phone number",
      type: "text",
    },
    {
      tab: [1, 2],
      name: "email",
      placeHolder: "Email",
      type: "email",
    },
    {
      tab: [2],
      name: "company",
      placeHolder: "Company",
      type: "text",
    },
    {
      tab: [2],
      name: "country",
      placeHolder: "Country",
      type: "text",
    },
    {
      tab: [1, 2],
      name: "message",
      placeHolder: "Write a message",
      type: "textarea",
    },
  ];

  function renderForms() {
    const form = inputs.filter((input) => input.tab.includes(+activeTab));
    const buttons = document.querySelectorAll(`[data-tab]`);
    buttons.forEach((btn) => {
      const btnId = btn.attributes["data-tab"].value;
      if (+btnId === +activeTab) {
        btn.classList.add("active-btn");
      } else {
        btn.classList.remove("active-btn");
      }
    });
    // button.classList.add("active-btn");
    formGroup.innerHTML = "";
    form.forEach((input) => {
      const formElement = appendInput(input);
      formGroup.appendChild(formElement);
    });
  }

  function appendInput(input) {
    const { name, placeHolder, type } = input;
    const element = document.createElement(
      type === "textarea" ? "textarea" : "input"
    );
    element.classList.add(
      "bg-[#F0F0F0]",
      "text-[#818181]",
      "input",
      "border",
      "border-[#CCC]",
      "lg:rounded-[2rem]",
      "rounded-[3rem]",
      "lg:py-5",
      "py-7",
      "lg:placeholder:text-[1.2rem]",
      "placeholder:text-[1.5rem]",
      "lg:px-5",
      "px-7",
      "border-0"
    );
    if (type !== "textarea") {
      element.type = type;
    } else {
      element.classList.add("h-[10rem]");
    }
    element.name = name;
    element.placeholder = placeHolder;
    return element;
  }

  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const tabId = e.srcElement.attributes["data-tab"].value;
      activeTab = tabId;
      renderForms();
    });
  });

  renderForms();
});
