var EditModule = (function () {
  function createEditButton() {
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "edit-button list-button";

    editButton.addEventListener("click", function (event) {
      var list = this.parentElement;
      var text = list.querySelector("span").innerHTML;

      // Remove exising elements on the list and add elements for editing list item.
      list
        .querySelectorAll("span, .edit-button, .delete-button")
        .forEach(function (element) {
          element.remove();
        });

      list.appendChild(ListModule.createInputText(text));
      list.appendChild(SaveModule.createSaveButton());
      list.appendChild(CancelModule.createCancelButton(text));
    });

    return editButton;
  }

  return {
    createEditButton,
  };
})();
