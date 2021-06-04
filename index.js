const replacementPhrase = "45";

/**
 * 
 * @param {HTMLElement} element
 */
const purge45 = (element) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(purge45);
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(/trump/gi, replacementPhrase);
  };
};

purge45(document.body);
