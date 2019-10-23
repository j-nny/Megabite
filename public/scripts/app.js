//cart quantity goes to 0, removes from cart
$(document).ready(function () {
  // prevent user to refresh page on enter
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  let allOrders = {};
  let sum = 0;
  let restaurant_id = $(".menu-container h1").data("restaurant_id");
  // console.log(restaurant_id);
  $(".item").click(function (evt) {
    let totalSum = 0;
    let id = $(this).data('id');
    // The item was already clicked on before
    if (allOrders[id]) {
      allOrders[id].quantity += 1;
      refreshCartTotal(allOrders)

      $("#cart-item").empty();
      for (let id in allOrders) {
        $newInput = $(`<div class="cart${id}"><input id="${id}" class="cart${id} quantity" type="number" value="${allOrders[id].quantity}" min="1"> ${allOrders[id].name} | Price: <span class="cart-item-price${id}">${(Number(allOrders[id].price) * allOrders[id].quantity).toFixed(2)}</span></br></div>`);
        $("#cart-item").append($newInput);
        $newBtn = $(`<div><button type="button" class="cart${id} remove-btn">Remove</button></br></div>`)
        $("#cart-item").append($newBtn);
        $($newBtn).on("click", function (evt) {
          delete allOrders[id];
          $(`.cart${id}`).empty();
          refreshCartTotal(allOrders)
        })

        $($newInput).bind("input", (evt) => {
          evt.target.parentNode.children[1].innerHTML = (evt.target.value * allOrders[id].price).toFixed(2);
          allOrders[id].quantity = evt.target.value;
          refreshCartTotal(allOrders)
        })
      }

    } else {
      // The item has never been clicked on yet
      $("#cart-item").empty();
      allOrders[id] = { quantity: 1, price: Number($(this).children('span').text()), name: $(this).children('#item-name').text() }
      // console.log($(".menu-container").data("restaurant_id"));
      for (let id in allOrders) {

        $newInput = $(`<div class="cart${id}"><input id="${id}" class="cart${id} quantity" type="number" value="${allOrders[id].quantity}" min="1"> ${allOrders[id].name} | Price: <span class="cart-item-price${id}">${(Number(allOrders[id].price) * allOrders[id].quantity).toFixed(2)}</span></br></div>`);
        $("#cart-item").append($newInput);
        $newBtn = $(`<div><button type="button" class="cart${id} remove-btn">Remove</button></br></div>`)
        $("#cart-item").append($newBtn);
        $($newBtn).on("click", function (evt) {
          delete allOrders[id];
          $(`.cart${id}`).empty();
          refreshCartTotal(allOrders)
        })

        $($newInput).bind("input", (evt) => {
          evt.target.parentNode.children[1].innerHTML = (evt.target.value * allOrders[id].price).toFixed(2);
          allOrders[id].quantity = evt.target.value;
          refreshCartTotal(allOrders)
        })
      }
    }
    console.log(allOrders)
    for (let id in allOrders) {
      totalSum += (allOrders[id].quantity * allOrders[id].price);
    }
    console.log(totalSum);
    $('.cart-total').text(totalSum.toFixed(2));
  });

  $('form').on("submit", function (event) {
    event.preventDefault();
    allOrders["restaurant_id"] = Number(restaurant_id);
    $.ajax({
      url: "/checkout",
      type: "POST",
      data: allOrders
    }).then(function () {window.location.replace("/checkout")})
  });
})


function refreshCartTotal(cart) {
  const total = calculateCartTotal(cart)
  updateCartTotalOnPage(total)
}

// Pass in Current Cart, and function will return sum
function calculateCartTotal(cart) {
  return Object.keys(cart).reduce((acc, curr) => acc + (cart[curr].quantity * cart[curr].price), 0)
}

function updateCartTotalOnPage(newTotal) {
  $('.cart-total').text(newTotal.toFixed(2));
}
