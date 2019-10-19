const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Owner Login!");
  res.send("Hello from owner login page!");
});

module.exports = router;
