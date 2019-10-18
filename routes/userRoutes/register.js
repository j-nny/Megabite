const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("register page!");
  // Render login page because it contains login/register form
  res.send("Hello from register");
});

module.exports = router;
