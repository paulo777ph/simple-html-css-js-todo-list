var AddModule = (function () {
  function init() {
    var addButton = document.querySelector(".add-button");
    addButton.addEventListener("click", function (event) {
      var orderedList = document.querySelector(".todo-list");
      var text = document.querySelector("#add-container > .input-form");

      ListModule.createList(orderedList, text.value);

      text.value = "";
    });
  }

  return {
    init: init,
  };
})();
