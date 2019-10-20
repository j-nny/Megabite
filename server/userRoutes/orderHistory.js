const express = require('express');
const router = express.Router();

// use middleware to add user to res.locals

router.get('/', (req, res) => {
  console.log("Order history!");
  res.render("history");
});

module.exports = router;
