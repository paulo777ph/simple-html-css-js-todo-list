var DeleteModule = (function () {
  function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function (event) {
      this.parentElement.remove();
    });

    return deleteButton;
  }

  return {
    createDeleteButton,
  };
})();
