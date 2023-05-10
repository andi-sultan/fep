"use strict";
const form = (() => {
  let elem = null;

  const checkInputs = (input) => {
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
      } else {
        errMsg.textContent = "* Input Required";
      }
    } else {
      errMsg.classList.remove("show");
    }
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

      inputs.forEach((input) => {
        checkInputs(input);
      });
    });
  };

  return { start };
})();

form.start("form");
