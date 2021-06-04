const replacementPhrase = "45";
const regex = new RegExp(/trump|donald j. trump|donald trump|donald\s*j.*\s*trump|donald \w* trump/, 'gi');

/**
 * 
 * @param {HTMLElement} element
 */
const purge45 = (element) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(purge45);
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(regex, replacementPhrase);
  };
};

purge45(document.body);