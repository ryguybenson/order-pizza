function Pizza(toppingResponses, size) {
  this.toppingResponses = toppingResponses,
  this.size = size,
  this.price = 0;
  console.log(this.toppingResponses);
  console.log(this.size);
}

Pizza.prototype.pizzaSize = function() {
  if (this.toppingResponses === "small") {
    this.price += 8;
 console.log(this.price);
  } else if (this.toppingResponses === "medium") {
    this.price += 12;
  } else if (this.toppingResponses === "large") {
    this.price += 16;
  }
  return (this.price);
}
//I AM SO CONFUSED WHY THIS.SIZE AND THIS.TOPPINGRESPONSES ARE BACKWARDS???????
Pizza.prototype.pizzaToppings = function() {
  if (this.size.includes("extra-cheese")) {
    this.price += 3;
  }
  if (this.size.includes("bacon")) {
    this.price += 2;
  }
   if (this.size.includes("olive")) {
    this.price += 1;
  }
   if (this.size.includes("pineapple")) {
    this.price += 1;
  }
   if (this.size.includes("anchovy")) {
    this.price += 1;
  }
   if (this.size.includes("pepperoni")) {
    this.price += 1;
  }
  return this.price;
  console.log(this.price);
}

Pizza.prototype.totalPrice = function() {
  return this.price;
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
    var myPizza = new Pizza(size, toppingResponses);
    myPizza.pizzaToppings();
    myPizza.totalPrice();
    myPizza.pizzaSize();
    Pizza();
    $("#ordered").text("Your " + size + " " + toppingResponses + " pizza will cost you " + this.price + " dollars");
    this.price = 0;
  });
});
