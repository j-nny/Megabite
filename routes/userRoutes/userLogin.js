const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Login page!");
  res.send("Hello from login!");
});

module.exports = router;
