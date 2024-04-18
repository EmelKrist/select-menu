let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

/**
 * Method to toggle (close/open) select menu.
 */
function toggleSelectMenu() {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
}

/**
 * Listener for select field.
 */
selectField.onclick = function () {
  toggleSelectMenu();
};

/**
 * Listeners for select menu options.
 */
for (let option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    toggleSelectMenu();
  };
}
