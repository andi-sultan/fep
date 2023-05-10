"use strict";
const form = (() => {
  let elem = null;

  const checkInputs = (input) => {
    let valid = false;
    const errMsg = input.nextElementSibling;
    input.classList.add("input-text-validate");
    if (
      input.validity.valueMissing ||
      input.validity.patternMismatch ||
      input.validity.tooShort
    ) {
      errMsg.classList.add("show");
      if (input.type == "email") {
        errMsg.textContent = "* Please input valid email format";
      } else if (input.type == "tel") {
        errMsg.textContent =
          "* Please input valid phone number (min. 12 of length)";
      } else if (input.type == "password" && !input.validity.valueMissing) {
        errMsg.textContent =
          "* Password is at least 8 characters with numbers and one of special character: [@$!%?&]";
      } else if (input.dataset.type == "zip" && !input.validity.valueMissing) {
        errMsg.textContent =
          "* Please input valid ZIP code (XXXXX or XXXXX-XXXX)";
      } else {
        errMsg.textContent = "* Input Required";
      }
    } else {
      valid = true;
      errMsg.classList.remove("show");
    }
    return valid;
  };

  const start = (elemId) => {
    elem = document.getElementById(elemId);

    const inputs = elem.querySelectorAll(".input-text");
    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        checkInputs(e.target);
      });
    });

    const pass = elem.querySelector("#password");
    const repass = elem.querySelector("#repeat-password");
    repass.addEventListener("input", () => {
      const errMsg = repass.nextElementSibling;

      repass.classList.add("input-text-validate");
      if (
        (repass.validity.valueMissing || repass.validity.patternMismatch) &&
        pass.value != repass.value
      ) {
        errMsg.textContent = "* Passwords did not match";
      } else if (pass.value == repass.value) {
        errMsg.textContent =
          "* Password is at least 8 characters with numbers and one of special character: [@$!%?&]";
      } else {
        errMsg.classList.remove("show");
      }
    });

    elem.addEventListener("submit", (e) => {
      e.preventDefault();
      let inputValidated = true;

      inputs.forEach((input) => {
        if (!checkInputs(input) && inputValidated) {
          inputValidated = false;
          input.focus();
        }
      });
      if (inputValidated) alert("✋!");
    });
  };

  return { start };
})();

form.start("form");
