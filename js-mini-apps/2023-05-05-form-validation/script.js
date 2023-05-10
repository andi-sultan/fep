"use strict";
const form = (() => {
  let elem = null;

  const start = (elemId) => {
    elem = document.getElementById(elemId);

    const inputs = elem.querySelectorAll(".input-text");
    inputs.forEach((input) => {
      const errMsg = input.nextElementSibling;
      // console.log(input.type);
      input.addEventListener("input", () => {
        input.classList.add("input-text-validate");
        if (input.validity.valueMissing || input.validity.patternMismatch) {
          errMsg.classList.add("show");
          if (input.type == "email") {
            errMsg.textContent = "* Please input valid email format";
          } else if (input.type == "tel") {
            errMsg.textContent = "* Please input valid phone number";
          } else if (input.type == "password") {
            errMsg.textContent =
              "* Password is at least 8 characters with numbers and one of special character: [@$!%?&]";
            const repeatPassword = elem.querySelector(
              '[data-type="repeat-password"]'
            );
            if (input.value != repeatPassword.value) {
            }
          } else if (input.getAttribute("data-type") == "repeat-password") {
          } else {
            errMsg.textContent = "* Input Required";
          }
        } else {
          const password = elem.querySelector("#password");
          if (
            input.getAttribute("data-type") == "repeat-password" &&
            input.value != password.value
          ) {
            // todo
            const errMsg = input.nextElementSibling;
            errMsg.classList.add("show");
            errMsg.textContent = "* Password not match";
          }
          errMsg.classList.remove("show");
        }
      });
    });

    elem.addEventListener("submit", (e) => {
      e.preventDefault();

      inputs.forEach((input) => {
        const errMsg = input.nextElementSibling;
        input.classList.add("input-text-validate");
        if (input.validity.valueMissing) {
          errMsg.classList.add("show");
        } else {
          errMsg.classList.remove("show");
        }
      });
    });
  };

  return { start };
})();

form.start("form");
