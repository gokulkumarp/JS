var budgetController = (function () {
  //some code
})();

var UIController = (function () {
  //some code

  return {
    getType: function (params) {
      return {
        type: document.querySelector(".add__type").value,
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value,
      };
    },
  };
})();

var controller = (function (budgetCtrl, UICtrl) {
  var clickEvent = function () {
    var a = UICtrl.getType();

    console.log(a);
  };

  document.querySelector(".add__btn").addEventListener("click", clickEvent);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      clickEvent();
    }
  });
})(budgetController, UIController);
