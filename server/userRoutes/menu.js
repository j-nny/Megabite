const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Menu");
  res.send("Hello from restaurant menu!");
});

module.exports = router;
