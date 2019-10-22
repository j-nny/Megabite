// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((data) => {
//     for(user of data.users) {
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

//cart quantity goes to 0, removes from cart
$(document).ready(function() {
  let allOrders = [];
  let currentOrder = {id: null,
    menu
  }
  $(".item").click( function() {
    if (currentOrder.id) {
      currentOrder.quantity = (currentOrder.quantity + 1);
    } else {
      currentOrder.id = "findID"
      currentOrder.quantity = 1;
      $("#cart-item").append(`<input class="quantity" type="number" value="${currentOrder.quantity}" min="0"> Cha Siu Bao | Price:</br>`);
    }
    console.log(currentOrder);
  })

  $("#quantity").keyup(function() {
    if ($("#quantity").html() <= 0) {

    }
  })
})
