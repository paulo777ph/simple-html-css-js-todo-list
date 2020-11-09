var AddModule = (function () {
  "use strict";
  console.log("Add function is called!");

  function addEntry(element, text) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    console.log(li, span, deleteButton);

    span.innerHTML = text;
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    if (!element) {
      var todoListContainer = document.querySelector("#todo-list-container");
      var ol = document.createElement("ol");
      ol.className = "todo-list";

      ol.appendChild(li);
      todoListContainer.appendChild(ol);
    } else {
      element.appendChild(li);
    }
  }

  return {
    addEntry: addEntry,
  };
})();
