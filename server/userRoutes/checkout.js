const express = require('express');
const router = express.Router();
const db = require("../database");

<<<<<<< HEAD
router.post('/', async(req, res) => {
  let currentTime = new Date().toLocaleString();
=======
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
  res.redirect("/login");
>>>>>>> origin/master

  // console.log(data)
  // try {
  //   await db
  //     .query(
  //       `INSERT INTO orders(time_entered, time_promised, customer_id, restaurant_id)
  //         VALUES (${currentTime}, NULL, ${req.session.user_id},${req.body[restaurant_id]}) RETURNING *;`,
  //     );
      // .then(res => {
      //   console.log(res.rows[0]);
      // })
      // console.log(data[0].restaurant_id)
      // console.log(req.body)
  // } catch (error) {
  //   console.log(error);
  // }
  // id SERIAL PRIMARY KEY NOT NULL,
  // time_entered DATE NOT NULL,
  // time_promised DATE NOT NULL,
  // customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  // restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  // active BOOLEAN NOT NULL DEFAULT FALSE
});

module.exports = router
