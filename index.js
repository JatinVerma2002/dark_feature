const htmlTag = document.querySelector("html");

const darkLogo = document.querySelector(".dark-logo");

const lightLogo = document.querySelector(".light-logo");

const addDarkTheme = () => {
  htmlTag.classList.add("dark");
  darkLogo.classList.add("hidden");
  lightLogo.classList.remove("hidden");
};

const addLightTheme = () => {
  htmlTag.classList.remove("dark");
  darkLogo.classList.remove("hidden");
  lightLogo.classList.add("hidden");
};

darkLogo.addEventListener("click", addDarkTheme);

lightLogo.addEventListener("click", addLightTheme);
