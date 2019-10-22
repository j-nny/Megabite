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
  let allOrders = {};
  $(".item").click( function(evt) {
    let id = evt.target.parentNode.id;
    console.log("clicked on id: ", id);
    // The item was already clicked on before
    if (allOrders[id]) {
      allOrders[id].quantity += 1;
      $("#cart-item").empty();
      for (let id in allOrders) {
        $newInput = $(`<input id="item_${id}" class="quantity" type="number" value="${allOrders[id].quantity}" min="0"> ${allOrders[id].name} | Price: ${(allOrders[id].price * allOrders[id].quantity).toFixed(2)}</br>`);
        $("#cart-item").append($newInput);
      }

    } else {
      $("#cart-item").empty();
      // The item has never been clicked on yet
      allOrders[id] = { quantity: 1, price: $(this).children('span').text(), name: $(this).children('#item-name').text() }
      console.log(allOrders)
      for (let id in allOrders) {
        $newInput = $(`<input id="item_${id}" class="quantity" type="number" value="${allOrders[id].quantity}" min="0"> ${allOrders[id].name} | Price: ${(allOrders[id].price * allOrders[id].quantity).toFixed(2)}</br>`);
        $("#cart-item").append($newInput);
      }
      // $newInput.find('input').on("change", () => {
      //   alert('found it');
      // })
    }
    console.log(allOrders);
  });

  $("#quantity").keyup(function() {
    if ($("#quantity").html() <= 0) {

    }
  })
})
