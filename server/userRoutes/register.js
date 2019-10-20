const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("register page!");
  // Render login page because it contains login/register form
  res.render("login");
});

module.exports = router;
