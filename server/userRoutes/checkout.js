const express = require('express');
const router = express.Router();
const db = require("../database");

router.post('/', async(req, res) => {
  let currentTime = new Date().toLocaleString();

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
