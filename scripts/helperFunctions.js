export {
  populateSelectOptions,
  filterByPropEquals,
  filterByIncludes,
  findByPropEquals,
  scrolledThemeChange,
};

function scrolledThemeChange(onlybutton = true) {
  const backToTopBtn = document.getElementById("backToTop");
  const navbarElem = document.getElementById("navbar");
  document.onscroll = () => {
    if (window.scrollY <= 0) {
      if (onlybutton) {
        navbarElem.setAttribute("data-bs-theme", "dark");
        navbarElem.classList.remove("bg-body");
        navbarElem.classList.remove("shadow-sm");
      }
      backToTopBtn.classList.add("d-none");
    } else {
      if (onlybutton) {
        navbarElem.setAttribute("data-bs-theme", "light");
        navbarElem.classList.add("bg-body");
        navbarElem.classList.add("shadow-sm");
      }
      backToTopBtn.classList.remove("d-none");
    }
  };
}

function populateSelectOptions(options, selectElem) {
  options.sort().forEach((option) => {
    selectElem.appendChild(new Option(option, option));
  });
}

function filterByPropEquals(array, property, value) {
  return array.filter((state) => state[property] === value);
}
function filterByIncludes(array, property, value) {
  return array.filter((state) => state[property].includes(value));
}
function findByPropEquals(array, property, value) {
  return array.find((state) => state[property] === value);
}
