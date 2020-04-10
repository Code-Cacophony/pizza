
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0
}

Pizza.prototype.displayPrice = function () {
  if this
}



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();


    var size = parseInt($("#size").val());
    var toppings = parseInt($("#toppings").val());

    var price = new price(size, toppings);
  });
});