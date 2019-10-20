const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("Owner Login!");
  res.render("ownerLogin");
});

module.exports = router;
