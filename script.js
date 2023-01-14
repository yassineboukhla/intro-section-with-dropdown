// ####################################################################### Up & Down JS handling
let featuresIconDown = document.querySelector(".features-icon-down");
let featuresIconUp = document.querySelector(".features-icon-up");
let featuresList = document.querySelector(".features-list");

let companyIconDown = document.querySelector(".company-icon-down");
let companyIconUp = document.querySelector(".company-icon-up");
let companyList = document.querySelector(".company-list");

// Function to show or delete hidden class (Up & Down icons)
function iconToggle(elem) {
  switch (elem) {
    case featuresIconDown:
      elem.classList.add("hidden");
      featuresIconUp.classList.remove("hidden");
      featuresList.classList.remove("hidden");
      featuresList.classList.add("flex");
      break;
    case featuresIconUp:
      elem.classList.add("hidden");
      featuresIconDown.classList.remove("hidden");
      featuresList.classList.remove("flex");
      featuresList.classList.add("hidden");
      break;
    case companyIconDown:
      elem.classList.add("hidden");
      companyIconUp.classList.remove("hidden");
      companyList.classList.remove("hidden");
      companyList.classList.add("flex");
      break;
    case companyIconUp:
      elem.classList.add("hidden");
      companyIconDown.classList.remove("hidden");
      companyList.classList.remove("flex");
      companyList.classList.add("hidden");
      break;
    default:
      break;
  }
}
// ######################################################################## END

// ####################################################################### Open & Close Menu JS handling
let openMenu = document.querySelector(".header-open");
let closeMenu = document.querySelector(".nav-wrapper-close");
let navbar = document.querySelector(".nav-wrapper");
// Function to open & close menu
function menuToggle(elem) {
  if (elem == openMenu) {
    navbar.classList.remove("hidden");
    navbar.classList.add("flex");
  } else if (elem == closeMenu) {
    navbar.classList.add("hidden");
    navbar.classList.remove("flex");
  }
}
// ########################################################################### END
