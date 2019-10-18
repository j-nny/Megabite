const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("browse");
  res.send("Hello from browse page!");
});

module.exports = router;
