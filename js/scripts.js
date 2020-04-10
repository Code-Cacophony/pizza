
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0
}

Pizza.prototype.displayPrice = function () {
  if (this.size === 1) {
    this.price = 12.00;
  } else {
    this.price = 15.00;
  }
}

Pizza.prototype.displayPizza = function () {
  var size = this.size;
  var toppings = this.toppings;
  var price = this.price;
}



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();


    var size = parseInt($("#size").val());
    var toppings = parseInt($("#toppings").val());

    var pizza = new Pizza(size, toppings);


    console.log(size);
    console.log(toppings);

    pizza.displayPrice();

    pizza.displayPizza();
  });
});