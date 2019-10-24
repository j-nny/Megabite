const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  if (!req.session.user_id) {
    let templateVar = { user: req.session.user_id };
    res.render("login", templateVar);
  } else {
    res.redirect("/browse");
  }
});

module.exports = router;
