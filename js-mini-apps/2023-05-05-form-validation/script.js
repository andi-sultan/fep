"use strict";
const form = (() => {
  let elem = null;

  const start = (elemId) => {
    elem = document.getElementById(elemId);
    // todo
  };

  return { start };
})();

form.start("form");
