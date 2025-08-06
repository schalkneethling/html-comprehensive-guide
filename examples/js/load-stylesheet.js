const disabledStylesheet = document.querySelector("link[disabled]");
const loadStylesheetButton = document.querySelector("#load-stylesheet");

if (disabledStylesheet && loadStylesheetButton) {
  loadStylesheetButton.addEventListener("click", () => {
    disabledStylesheet.removeAttribute("disabled");
  });
}
