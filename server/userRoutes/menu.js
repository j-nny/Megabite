const express = require('express');
const router = express.Router();
const db = require("../database");
const stripe = require('stripe')("pk_test_uo8K69V2jUSIOYo0kLyqk4tk005kzM0VPH");

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  }
  db.getMenu()
  .then(res => {
    if (res) {
      return res.rows;
    } else {
      return null;
    };
  })
  .then(data => {
    let templateVar = { user: req.session.user_id, data: data }
    res.render("menu", templateVar);
  })
  .catch(err => console.error(err));

  // (async () => {
  //   const charge = await stripe.charges.create({
  //     amount: 0,
  //     currency: 'cad',
  //     source: 'tok_visa',
  //     receipt_email: 'j.nguy809@gmail.com',
  //   });
  // })();
});

module.exports = router;
