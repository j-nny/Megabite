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
    // let id = evt.target.parentNode.id;
    let id = $(this).data('id');
    console.log("clicked on id: ", id);
    // The item was already clicked on before
    if (allOrders[id]) {
      allOrders[id].quantity += 1;
      $("#cart-item").empty();
      for (let id in allOrders) {
        $newInput = $(`<input id="item_${id}" class="quantity" type="number" value="${allOrders[id].quantity}" min="1"> ${allOrders[id].name} | Price: ${(Number(allOrders[id].price) * allOrders[id].quantity).toFixed(2)}</br>`);
        $("#cart-item").append($newInput);
        $newBtn = $(`<button type="button" class="remove-btn">Remove</button></br>`)
        $("#cart-item").append($newBtn);
        $($newBtn).on("click", function(evt) {
          // evt.preventDefault();
          console.log(">>>>", evt.target)
        })
        $($newInput).on("change", (evt) => {
          // console.log($(this).val());
          console.log(evt);
          console.log(allOrders);
          allOrders[id].quantity = parseInt(evt.target.value)
        })
      }

    } else {
      // The item has never been clicked on yet
      $("#cart-item").empty();
      allOrders[id] = { quantity: 1, price: $(this).children('span').text(), name: $(this).children('#item-name').text() }
      console.log(allOrders)
      for (let id in allOrders) {
        $newInput = $(`<div class="cart${id}"><input id="${id}" class="quantity" type="number" value="${allOrders[id].quantity}" min="1"> ${allOrders[id].name} | Price: ${(Number(allOrders[id].price) * allOrders[id].quantity).toFixed(2)}</br>`);
        $("#cart-item").append($newInput);
        $newBtn = $(`<div><button type="button" class="cart${id} remove-btn">Remove</button></br></div>`)
        $("#cart-item").append($newBtn);
        $($newBtn).on("click", function(evt) {
          delete allOrders[id];
          $(`.cart${id}`).empty();
        })

        $($newInput).bind("mouseup", (evt) => {
          console.log(evt);
          console.log(allOrders);
          allOrders[id].quantity = parseInt(evt.target.value)
        })
      }
    }

    console.log(allOrders);
  });


})
