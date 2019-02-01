function Pizza(topping,size) {
  this.topping = topping;
  this.size = size;
};
var price = 0;
Pizza.prototype.pizzaPrice = function(size, toppingResponses) {
  if (size === "small") {
    price += 8;
    console.log(price);
  } else if (size === "medium") {
    price += 12;
  } else if (size === "large") {
    price += 16;
  }
  if (toppingResponses.includes("extraCheese")) {
    price += 3;
  }
  if (toppingResponses.includes("bacon")) {
    price += 2;
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
    var size = $("#size").val();
      alert(size);
    var toppingResponses = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var inputtedToppings = $(this).val();
      console.log(inputtedToppings);
      toppingResponses.push(inputtedToppings);
    });
    console.log(toppingResponses);
    myPizza = new Pizza(size,toppingResponses);
    myPizza.pizzaPrice(size, toppingResponses);
    console.log(price);
  });
});
