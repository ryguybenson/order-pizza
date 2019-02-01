function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
};
var price = 0;
Pizza.prototype.pizzaPrice = function (inputtedSize, toppingResponses) {
  if (inputtedSize === "small") {
    price += 8;
    console.log(price);
  } else if (inputtedSize === "medium") {
    price += 12;
  } else {
    price += 16;
  }
  if (toppingResponses.split("").includes("pepperoni")) {
    price += 1;
  } else if toppingResponses.split("").includes("bacon")) {
    price += 1;
  } else if (toppingResponses.split("").includes("olives")) {
    price += 1;
  } else if (toppingResponses.split("").includes("pineapple")) {
    price += 1;
  } else if (toppingResponses.split("").includes("anchovy")) {
    price += 1;
  } else if (toppingResponses.split("").includes("extraCheese")) {
    price += 2;
  }
}
console.log(price);
$(document).ready(function() {
  $("formOne").submit(function(event) {
    event,preventDefault();
    var inputtedSize = $("size").val();
    var toppingResponses = [];
    $("input:checkbox[name=topping]:checked").each(function(){
    var inputtedToppings = $(this).val();
    toppingResponses.push(inputtedToppings);
    myPizza = new Pizza(inputtedSize, inputtedToppings);
    myPizza.pizzaPrice(inputtedSize, inputtedToppings);
    console.log(price);
    });
  });
});
