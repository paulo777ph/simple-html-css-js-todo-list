(function () {
  "use strict";

  var addButton = document.querySelector("#add-button");
  addButton.addEventListener("click", function () {
    var listElement = document.querySelector(".todo-list");
    var text = document.querySelector("#add-entry").value;

    AddModule.addEntry(listElement, text);
  });
})();
