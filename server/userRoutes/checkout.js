const express = require('express');
const router = express.Router();
const db = require("../database");

router.post('/', (req, res) => {
  // let orderObject =
  // { 4: {quantity: 4, },
  // restaurant_id: 3};
  // console.log(orderObject[restaurant_id]);
  let order = req.body;
  let currentTime = new Date().toLocaleString();
  // console.log("This is the cart", order);
  console.log(">>>>>>>>>>>>>This is the restaurant id", order.restaurant_id);
  console.log(currentTime);
  // console.log(order);
  // for (let items in order){
  //   console.log(items);
  //   console.log(order[items]);
  // }
  // db.query(`INSERT INTO orders(time_entered, time_promised, customer_id, restaurant_id, active) VALUES
  // ('2019-10-20 22:30:33.800', '2019-10-20 22:45:33.800', 1, 1, false); RETURNING orders.id`)
  db.addOrder(req.session.user_id, order.restaurant_id)
    .then(function (res) {
      // console.log("THIS IS THE ORDER ID", res.rows[0].id);
      for (let items in order) {
        if (items !== 'restaurant_id') {
          db.addItems(res.rows[0].id, items, order[items].quantity);
        }
      }
    });
  res.redirect("/history");

});

module.exports = router
