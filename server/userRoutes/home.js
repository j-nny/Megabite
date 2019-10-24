const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  router.get("/", (req, res) => {
    if (!req.session.user_id) {
      res.redirect("/login");
    } else {
      let templateVar = { user: req.session.user_id };
      res.render("user_search", templateVar);
    }
  });
});

module.exports = router;
