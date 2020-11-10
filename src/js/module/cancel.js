var CancelModule = (function () {
  function createCancelButton(text) {
    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.className = "cancel-button list-button";

    cancelButton.addEventListener("click", function (element) {
      var list = this.parentElement;

      // Remove exising elements on the list and add elements for displaying list item.
      list
        .querySelectorAll(".input-form, .save-button, .cancel-button")
        .forEach(function (element) {
          element.remove();
        });

      list.appendChild(ListModule.createListItem(text));
      list.appendChild(EditModule.createEditButton());
      list.appendChild(DeleteModule.createDeleteButton());
    });

    return cancelButton;
  }

  return { createCancelButton };
})();
