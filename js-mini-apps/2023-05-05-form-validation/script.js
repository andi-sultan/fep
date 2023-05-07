"use strict";
const form = (() => {
  let elem = null;

  const start = (elemId) => {
    elem = document.getElementById(elemId);

    const submitBtn = elem.querySelector(".btn-submit");
    submitBtn.addEventListener("click", () => {
      const name = elem.querySelector("#first-name");
      name.classList.remove("input-text-error");
      if (name.validity.valueMissing) {
        name.setCustomValidity("Field Required");
        name.classList.add("input-text-error");
      } else {
        name.setCustomValidity("");
      }
    });
  };

  return { start };
})();

form.start("form");
