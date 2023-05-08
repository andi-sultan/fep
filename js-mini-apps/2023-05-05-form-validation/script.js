"use strict";
const form = (() => {
  let elem = null;

  const start = (elemId) => {
    elem = document.getElementById(elemId);

    const name = elem.querySelector("#first-name");
    const errMsg = name.nextElementSibling;

    name.addEventListener("input", () => {
      name.classList.add("input-text-validate");
      if (name.validity.valueMissing) {
        errMsg.classList.add("show");
      } else {
        errMsg.classList.remove("show");
      }
    });
    
    elem.addEventListener("submit", (e) => {
      name.classList.add("input-text-validate");
      e.preventDefault();

      if (name.validity.valueMissing) {
        errMsg.classList.add("show");
      } else {
        errMsg.classList.remove("show");
      }
    });
  };

  return { start };
})();

form.start("form");
