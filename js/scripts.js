function Pizza(toppingResponses, size) {
  this.toppingResponses = toppingResponses,
  this.size = size,
  this.price = 0;
  console.log(this.size);
}

Pizza.prototype.pizzaSize = function() {
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 16;
  }
}
//I AM SO CONFUSED WHY THIS.SIZE AND THIS.TOPPINGRESPONSES ARE BACKWARDS???????
Pizza.prototype.pizzaToppings = function() {
  if (this.toppingResponses.includes("extra-cheese")) {
    this.price += 3;
  }
  if (this.toppingResponses.includes("bacon")) {
    this.price += 2;
  }
   if (this.toppingResponses.includes("olive")) {
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
  }
}

Pizza.prototype.totalPrice = function() {
  return "Your " + this.size + " " + this.toppingResponses + " pizza will cost " + this.price + " dollars"
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
    var myPizza = new Pizza(toppingResponses, size);
    myPizza.pizzaToppings();
    myPizza.pizzaSize();
    myPizza.totalPrice();
    $("#ordered").text(myPizza.totalPrice());
    this.price = 0;
  });
});
