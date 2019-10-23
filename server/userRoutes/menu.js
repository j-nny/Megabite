const express = require('express');
const router = express.Router();
const db = require("../database");
const stripe = require('stripe')('pub_key');

router.get('/', (req, res) => {
  db.getMenu()
  .then(res => {
    if (res) {
      return res.rows;
    } else {
      return null;
    };
  })
  .then(data => {
    console.log({data});
    res.render("menu", {data});
  })
  .catch(err => console.error(err));

  (async () => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'usd',
      source: 'tok_visa',
      receipt_email: 'jenny.rosen@example.com',
    });
  })();
});

module.exports = router;
