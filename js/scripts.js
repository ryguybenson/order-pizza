var pizza = new Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
};
var price = 0;
pizza.prototype.pizzaPrice = function (inputtedSize, inputtedToppings) {
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
