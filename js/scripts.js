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
  if (toppingResponses.includes("extraCheese")) {
    price += 5;
  }
  if (toppingResponses.includes("bacon")) {
    price += 1;
  }
   if (toppingResponses.includes("olives")) {
    price += 1;
  }
   if (toppingResponses.includes("pineapple")) {
    price += 1;
  }
   if (toppingResponses.includes("anchovy")) {
    price += 1;
  }
   if (toppingResponses.includes("pepperoni")) {
    price += 1;
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
