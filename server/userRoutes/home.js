const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  if (!req.session.user_id) {
<<<<<<< HEAD
    let templateVar = { user: req.session.user_id };
    res.render("login", templateVar);
  } else {
    res.redirect("/browse");
=======
  let templateVar = { user: req.session.user_id };
  res.render("login", templateVar);
} else {
  res.redirect("/browse");
>>>>>>> origin/master
  }
});

module.exports = router;
