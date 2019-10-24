const express = require('express');
const router = express.Router();

// use middleware to add user to res.locals

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect("login");
  } else {
    let templateVar = { user: req.session.user_id };
    res.render("history", templateVar);
  }
});

module.exports = router;
