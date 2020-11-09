var SaveModule = (function () {
  function createSaveButton() {
    var saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.className = "save-button";

    saveButton.addEventListener("click", function (event) {
      var list = this.parentElement;
      var text = this.parentElement.querySelector(".input-text").value;

      // Remove exising elements on the list and add elements for displaying list item.
      list
        .querySelectorAll(".input-text, .save-button, .cancel-button")
        .forEach(function (element) {
          element.remove();
        });

      list.appendChild(ListModule.createListItem(text));
      list.appendChild(EditModule.createEditButton());
      list.appendChild(DeleteModule.createDeleteButton());
    });

    return saveButton;
  }

  return { createSaveButton };
})();
