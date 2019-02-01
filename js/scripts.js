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
}
