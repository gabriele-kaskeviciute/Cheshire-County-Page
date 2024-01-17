const navLink = document.querySelectorAll(".link");
// const columnBoxes = document.querySelectorAll(".box");

//============== NAV ==============//

navLink.forEach((linkEl) => {
  linkEl.addEventListener("click", () => {
    document.querySelector(".special")?.classList.remove("special");
    linkEl.classList.add("special");
  });
});

//============= FEATURES ============//

// columnBoxes.forEach((colBoxClick) => {
//   colBoxClick.addEventListener("click", () => {
//     document
//       .querySelector(".column-boxes-clicked")
//       ?.classList.remove("column-boxes-clicked");
//     colBoxClick.classList.add("column-boxes-clicked");
//   });
// });

let selectedButton = null;

//============= Define text content for each box ================
const boxTexts = {
  "box-top": {
    title:
      "Tabs with soft transitioning effect. Explained propriety of out perpetual his you.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet",
  },
  "box-middle": {
    title: "Maiores corrupti impedit libero.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores corrupti impedit libero optio repellendus alias, odio nam, minima enim corporis unde, distinctio voluptatibus. Porro dolorem voluptatum provident nesciunt error recusandae!.",
  },
  "box-bottom": {
    title: "Atque quidem iusto dolores.",
    content:
      "Ipsum dolor sit amet consectetur, adipisicing elit. Atque quidem iusto dolores perspiciatis iste officia nostrum in error ipsam corrupti, modi totam, ea repellat, doloribus quas neque odio veritatis temporibus!.",
  },
  about: {
    title: "About Section Title",
    content: "About Section Content.",
  },
};

// Function to change color on button click
function changeColor(button, boxType) {
  // Check if the clicked element has the appropriate class
  if (
    button.classList.contains("box-top") ||
    button.classList.contains("box-middle") ||
    button.classList.contains("box-bottom")
  ) {
    // Reset the style of the previously selected button
    if (selectedButton !== null && selectedButton !== button) {
      selectedButton.style.backgroundColor = "#a37169";
      selectedButton.style.color = "rgba(255, 255, 255, 0.69)";
    }

    // Change the style of the clicked button
    button.style.backgroundColor = "#e27866";
    button.style.color = "#ffffff";

    // Update the selected button
    selectedButton = button;

    // Update the description content based on the clicked box
    const descriptionTitle = document.querySelector(".center_title");
    const descriptionContent = document.querySelector(".description p");

    const boxInfo = boxTexts[boxType] || { title: "", content: "" };
    descriptionTitle.textContent = boxInfo.title;
    descriptionContent.innerHTML = boxInfo.content;
  }
}

document.addEventListener("DOMContentLoaded", setInitialStyles);

//========== STYLE ON LOAD ========================

// Function to set initial styles on page load
function setInitialStyles() {
  const boxTop = document.querySelector(".box-top");
  changeColor(boxTop, "box-top");
}

// Scroll to the top on page reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// ================================== scrollspy code below your existing code

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".link");
  const sections = document.querySelectorAll("section");

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to update active link based on scroll position
  function updateActiveLink() {
    sections.forEach((section, index) => {
      if (isInViewport(section)) {
        navLinks.forEach((link) => link.classList.remove("special"));
        navLinks[index].classList.add("special");
      }
    });
  }

  // Attach event listener for scroll
  window.addEventListener("scroll", updateActiveLink);

  // Initial update on page load
  updateActiveLink();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const firstNameInput = document.querySelector(".first-name");
  const lastNameInput = document.querySelector(".last-name");
  const phoneNumberInput = document.querySelector(".phone-number");
  const errorContainers = document.querySelectorAll(".error-container");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate First Name
    if (!/^[a-zA-Z]+$/.test(firstNameInput.value)) {
      displayError(firstNameInput, "Please enter a valid first name.");
      isValid = false;
    } else {
      clearError(firstNameInput);
    }

    // Validate Last Name
    if (!/^[a-zA-Z]+$/.test(lastNameInput.value)) {
      displayError(lastNameInput, "Please enter a valid last name.");
      isValid = false;
    } else {
      clearError(lastNameInput);
    }
    //
    // Validate Phone Number
    if (!/^\d{10}$/.test(phoneNumberInput.value)) {
      displayError(phoneNumberInput, "Please enter a valid phone number.");
      isValid = false;
    } else {
      clearError(phoneNumberInput);
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });

  function displayError(input, message) {
    const errorContainer = input.nextElementSibling;
    errorContainer.textContent = message;
    errorContainer.style.color = "red";
  }

  function clearError(input) {
    const errorContainer = input.nextElementSibling;
    errorContainer.textContent = "";
  }
});
