const express = require('express');
const router = express.Router();
const db = require("../database");
const twilio = require('twilio');

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;


router.get('/', (req, res) => {
  res.render("ownerOrder");
});

router.post('/', (req, res) => {
  // res.render("ownerOrder");
  console.log(req.body)
  // query to make order active false
  const client = twilio(accountSid, authToken);
      client.messages
        .create({
          body: `Your order will be ready in ${req.body.timeSet} minutes!`,
          from: '+16476969370',
          to: '+16479902593'
          })
        .then(message => console.log(message.sid));
});

module.exports = router;
