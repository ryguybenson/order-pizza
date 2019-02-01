function Pizza(toppingResponses, size) {
  this.toppingResponses = toppingResponses,
  this.size = size,
  this.price = 0;
  console.log(this.price);
}

Pizza.prototype.pizzaSize = function() {
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 16;
  } return this.price;
  console.log(this.price);
}
Pizza.prototype.pizzaToppings = function() {
  if (this.toppingResponses.includes("extra-cheese")) {
    this.price += 3;
  }
  if (this.toppingResponses.includes("bacon")) {
    this.price += 2;
  }
   if (this.toppingResponses.includes("olives")) {
    this.price += 1;
  }
   if (this.toppingResponses.includes("pineapple")) {
    this.price += 1;
  }
   if (this.toppingResponses.includes("anchovy")) {
    this.price += 1;
  }
   if (this.toppingResponses.includes("pepperoni")) {
    this.price += 1;
  } return this.price;
  console.log(this.price);
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
    console.log(toppingResponses);
      var myPizza = new Pizza(size, toppingResponses);
    myPizza.pizzaToppings();
    myPizza.pizzaSize();
    console.log(this.price);
    $("#ordered").text("Your " + size + " pizza with " + toppingResponses + " will cost you " + this.price + " dollars");
  });
});
