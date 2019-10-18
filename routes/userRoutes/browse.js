const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("browse");
  res.render("user_search");
});

module.exports = router;
