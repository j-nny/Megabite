const express = require('express');
const router = express.Router();
const db = require("../database");
const twilio = require('twilio');

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;


router.post('/', (req, res) => {
  let order = req.body;
  // console.log(">>>>>>>>>>>>>This is the restaurant id", order.restaurant_id);
  db.addOrder(req.session.user_id, order.restaurant_id)
    .then(function (res) {
      // console.log("THIS IS THE ORDER ID", res.rows[0].id);
      for (let items in order) {
        if (items !== 'restaurant_id') {
          db.addItems(res.rows[0].id, items, order[items].quantity);
        }
      }
  /////////////// Twilio //////////////////
      const client = twilio(accountSid, authToken);

      client.messages
        .create({
          body: 'A customer has made an order!',
          from: '+16476969370',
          to: '+16479902593'
          })
        .then(message => console.log(message.sid));
    });
  res.redirect("/history");
});

module.exports = router
