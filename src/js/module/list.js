var ListModule = (function () {
  function createList(orderedList, text) {
    var li = document.createElement("li");

    li.appendChild(createListItem(text));
    li.appendChild(EditModule.createEditButton());
    li.appendChild(DeleteModule.createDeleteButton());

    if (!orderedList) {
      var todoListContainer = document.querySelector("#todo-list-container");
      var ol = document.createElement("ol");
      ol.className = "todo-list";

      ol.appendChild(li);
      todoListContainer.appendChild(ol);
    } else {
      orderedList.appendChild(li);
    }
  }

  function createListItem(text) {
    var span = document.createElement("span");
    span.innerHTML = text;

    return span;
  }

  function createInputText(text) {
    var inputText = document.createElement("input");
    inputText.className = "input-form list-input";
    inputText.type = "text";
    inputText.value = text;

    return inputText;
  }

  return { createList, createListItem, createInputText };
})();
