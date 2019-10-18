const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Order history!");
  res.send("Hello from order history!");
});

module.exports = router;
