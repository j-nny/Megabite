// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const path       = require('path');
const db         = require('./server/database')

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(cookieSession({
  name: 'session',
  keys: ["key"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./server/users");

const home = require("./server/userRoutes/home");
const userLogin = require("./server/userRoutes/userLogin");
const register = require("./server/userRoutes/register");
const orderHistory = require("./server/userRoutes/orderHistory");
const menu = require("./server/userRoutes/menu");
const browse = require("./server/userRoutes/browse");
const checkout = require("./server/userRoutes/checkout");
const ownerlogin = require("./server/ownerRoutes/ownerLogin");
const ownerOrder = require("./server/ownerRoutes/ownerOrder");
// const orders = require("./server/userRoutes/orders");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

app.use("/", home);
app.use("/login", userLogin);
app.use("/register", register);
app.use("/history", orderHistory);
app.use("/menu", menu);
app.use("/browse", browse);
app.use("/checkout", checkout);
app.use("/ownerLogin", ownerlogin);
app.use("/ownerOrder", ownerOrder);
// app.use("/orders", orders);

// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/restaurants/:id/menu", (req, res) => {
  console.log(">>>>>>", req.params.id)
  console.log(req.body)
  db.getMenu(req.params.id)
  .then(res => {
    if (res) {
      return res.rows;
    } else {
      return null;
    }
  })
  .then(data => {console.log(data); res.render("menu", {data});});
  // SELECT * FROM menu_items WHERE menu_items.restaurants.id = req.params.id
  // put the result into to template vars
  // res.render( menu_items)
  // in there loop through items in template vars, and print eaach item on the screen (USE EJS templating <%= %>)
  // res.json([
  //   {item_name: 'Pork Chop'}
  // ])
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
