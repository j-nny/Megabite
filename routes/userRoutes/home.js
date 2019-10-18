const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Hello there");
  res.send("Hello!");
});

module.exports = router;
