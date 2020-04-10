
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



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();


    var size = parseInt($("#size").val());
    var toppings = parseInt($("#toppings").val());


    console.log(price);
  });
});