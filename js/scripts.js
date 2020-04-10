
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0
}

Pizza.prototype.displayPrice = function () {
  if (this.size === "small") {
    this.price = 12.00;
  } else {
    this.price = 15.00;
  }
  if (this.toppings == "pineapple") {
    this.price = this.price * 80;
  }
}

Pizza.prototype.displayPizza = function () {
  var size = this.size;
  var toppings = this.toppings;
  var price = this.price;
  $("#results").html("<p> Size:" + size + "<br>" + "Toppings:" + toppings + "<br>" + "Price: $" + price + "</p>")
}



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();


    //var size = parseInt($("#size").val());
    //var toppings = parseInt($("#toppings").val());

    var size = $("#size").val();
    var toppings = $("#toppings").val();

    var pizza = new Pizza(size, toppings);


    console.log(size);
    console.log(toppings);

    pizza.displayPrice();

    pizza.displayPizza();
  });
});