
function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0
}



$(document).ready(function () {
  $("form#user-input").submit(function (event) {
    event.preventDefault();

  });
});