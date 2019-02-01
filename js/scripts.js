function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
};
var price = 0;
Pizza.prototype.pizzaPrice = function(inputtedSize, toppingResponses) {
  if (inputtedSize === "small") {
    price += 8;
    console.log(price);
  } else if (inputtedSize === "medium") {
    price += 12;
  } else if (inputtedSize === "large") {
    price += 16;
  }
  for (i = 0; i < toppingResponses.length + 1; i ++) {
  if (toppingResponses.includes("pepperoni")) {
    price += 1;
  } else if (toppingResponses.includes("bacon")) {
    price += 1;
  } else if (toppingResponses.includes("olives")) {
    price += 1;
  } else if (toppingResponses.includes("pineapple")) {
    price += 1;
  } else if (toppingResponses.includes("anchovy")) {
    price += 1;
  } else if (toppingResponses.includes("extraCheese")) {
    price += 2;
  }
  }
}
console.log(price);
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("size").val();
      alert(inputtedSize);
    var toppingResponses = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var inputtedToppings = $(this).val();
      console.log(inputtedToppings);
      toppingResponses.push(inputtedToppings);
    });
    console.log(toppingResponses);
    myPizza = new Pizza(inputtedSize,toppingResponses);
    myPizza.pizzaPrice(inputtedSize, toppingResponses);
    console.log(price);
  });
});
