function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
};
var price = 0;
Pizza.prototype.pizzaPrice = function (inputtedSize, inputtedToppings) {
  if (inputtedSize === "small") {
    price += 8;
  } else if (inputtedSize === "medium") {
    price += 12;
  } else {
    price += 16;
  }
  if (inputtedToppings = "pepperoni") {
    price += 1;
  } else if (inputtedToppings = "bacon") {
    price += 1;
  } else if (inputtedToppings = "olives") {
    price += 1;
  } else if (inputtedToppings = "pineapple") {
    price += 1;
  } else if (inputtedToppings = "anchovy") {
    price += 1;
  } else if (inputtedToppings = "extraCheese") {
    price += 2;
  }
}

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
