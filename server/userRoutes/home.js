const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Hello there");
  res.redirect('login');
});

module.exports = router;
