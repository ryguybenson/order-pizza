function Pizza(toppingResponses, size) {
  this.toppingResponses = toppingResponses,
  this.size = size;
  console.log(this.toppingResponses);
  console.log(this.size);
}
var price = 0;
Pizza.prototype.pizzaSize = function(Pizza) {
  if (this.toppingResponses === "small") {
    price += 8;
    console.log(price);
  } else if (this.size === "medium") {
    price += 12;
  } else if (this.size === "large") {
    price += 16;
  } return price;
  console.log(price);
}
//I AM SO CONFUSED WHY THIS.SIZE AND THIS.TOPPINGRESPONSES ARE BACKWARDS???????
Pizza.prototype.pizzaToppings = function(Pizza) {
  if (this.size.includes("extra-cheese")) {
    price += 3;
  }
  if (this.size.includes("bacon")) {
    price += 2;
  }
   if (this.size.includes("olives")) {
    price += 1;
  }
   if (this.size.includes("pineapple")) {
    price += 1;
  }
   if (this.size.includes("anchovy")) {
    price += 1;
  }
   if (this.size.includes("pepperoni")) {
    price += 1;
  } return price;
  console.log(price);
}
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var toppingResponses = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var inputtedToppings = $(this).val();
      console.log(inputtedToppings);
      toppingResponses.push(inputtedToppings);
    });
      var myPizza = new Pizza(size, toppingResponses);
    myPizza.pizzaToppings();
    myPizza.pizzaSize();
    $("#ordered").text("Your " + size + " pizza with " + toppingResponses + " will cost you " + price + " dollars");
  });
});
