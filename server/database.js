const bcrypt = require('bcrypt');

const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

const getUserWithEmail = function(email) {
  console.log('This is the email entered:',email);
  const queryString = `SELECT * FROM users WHERE email = $1;`
  return db.query(queryString,[email])
  .then(res => {
    if(res) {
      return res.rows[0];
    } else {
      return null;
    }
  }).catch(err => console.error('query error', err.stack));
}
exports.getUserWithEmail = getUserWithEmail;

const login =  function(email, password) {
  return getUserWithEmail(email)
  .then(user => {
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
    console.log('insidegetuserfunc')
    return null;
  });
}
exports.login = login;

const populateSideBar = function (){
  // let resultArray = [];
  return db.query(`SELECT * FROM restaurants;`);
}
exports.populateSideBar = populateSideBar;

const addUser =  function(user) {
  const queryString =`
    INSERT INTO users (first_name, last_name, email, password, phone_number)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;`;

  return db.query(queryString, [user.first_name, user.last_name, user.email, user.password, user.phone_number])
}
exports.addUser = addUser;

const getMenu = function(id) {
  return db.query(`SELECT items.id, items.name as item_name, restaurants.name as restaurant_name, items.description as description, items.price as price, restaurants.id as restaurant_id FROM items
  JOIN menus ON menus.id = menu_id
  JOIN restaurants ON restaurant_id = restaurants.id
  WHERE restaurant_id = $1;`, [id])
}
exports.getMenu = getMenu;

const addOrder = function(customer_id, restaurant_id){
  return db.query(`INSERT INTO orders (customer_id, restaurant_id) VALUES
  ($1, $2) RETURNING orders.id;`, [customer_id, restaurant_id])
}
exports.addOrder = addOrder;

const addItems = function(order_id, item_id, quantity){
  return db.query(`INSERT INTO order_items (order_id, item_id, quantity) VALUES
  ($1, $2, $3);`, [order_id, item_id, quantity]);
}
exports.addItems = addItems;

const getOrderHistory = function(user_id){
  return db.query(`SELECT orders.time_entered, orders.time_promised, orders.id as order_id, items.id as item_id, items.name as item_name, order_items.quantity as quantity, restaurants.name as restaurant_name, restaurants.address as address, restaurants.category as category, restaurants.active as active, restaurants.image as image
  FROM orders
  JOIN users ON orders.customer_id = users.id
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN order_items ON orders.id = order_items.order_id
  JOIN items ON items.id = order_items.item_id
  WHERE users.id = $1
  GROUP BY orders.id, users.first_name, users.last_name, restaurants.name, items.id, order_items.quantity, restaurants.address, restaurants.category, restaurants.active, restaurants.image
  ORDER BY time_entered DESC;
  `, [user_id]);
 }
 exports.getOrderHistory = getOrderHistory;

 const getCategory = function(cat) {
  return db.query(`SELECT * FROM restaurants
  WHERE category LIKE $1;
  `, [cat.charAt(0).toUpperCase().concat(cat.slice(1).toLowerCase())])
 }
exports.getCategory = getCategory;
 const getPreviousOrder = function(user_id, restaurant_id){
  return db.query(`SELECT orders.time_entered, orders.time_promised, orders.id as order_id, items.id as item_id, items.name as item_name, order_items.quantity as quantity, restaurants.name as restaurant_name, restaurants.address as address, restaurants.category as category, restaurants.active as active
  FROM orders
  JOIN users ON orders.customer_id = users.id
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN order_items ON orders.id = order_items.order_id
  JOIN items ON items.id = order_items.item_id
  WHERE users.id = $1  AND restaurant_id = $2
  GROUP BY orders.id, users.first_name, users.last_name, restaurants.name, items.id, order_items.quantity, restaurants.address, restaurants.category, restaurants.active
  ORDER BY orders.id;`, [user_id, restaurant_id]);
 }
exports.getPreviousOrder = getPreviousOrder;
 /////// Owner ///////
 const getOwnerWithEmail = function(email) {
  const queryString = `SELECT * FROM users WHERE email = $1 AND role = 'owner';`
  return db.query(queryString,[email])
  .then(res => {
    if(res) {
      return res.rows[0];
    } else {
      return null;
    }
  }).catch(err => console.error('query error', err.stack));
}
exports.getOwnerWithEmail = getOwnerWithEmail;

const ownerLogin =  function(email, password) {
  return getOwnerWithEmail(email)
  .then(user => {
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
    console.log('insidegetuserfunc')
    return null;
  });
}
exports.ownerlogin = ownerLogin;

const getRestaurantOrders = function (owner_id, active) {
  return db.query (`SELECT orders.time_entered, orders.id as order_id, items.id as item_id, items.price as price, items.name as item_name, order_items.quantity as quantity, users.first_name, users.last_name
  FROM restaurants
  JOIN orders ON restaurants.id = orders.restaurant_id
  JOIN order_items ON orders.id = order_items.order_id
  JOIN items ON items.id = order_items.item_id
  JOIN users ON orders.customer_id = users.id
  WHERE restaurants.owner_id = $1 AND orders.active = $2
  GROUP BY orders.id, users.first_name, users.last_name, restaurants.name, items.id, order_items.quantity, users.first_name, users.last_name
  ORDER BY orders.id;`, [owner_id, active]);
};
exports.getRestaurantOrders = getRestaurantOrders;

const acceptOrder = function (time_promised, order_id) {
  console.log(time_promised);
  console.log(order_id);
  const query = `UPDATE orders SET active = FALSE, time_promised = CURRENT_TIMESTAMP + INTERVAL '${time_promised}' WHERE id = $1`;

  return db.query(query, [order_id]);
}
exports.acceptOrder = acceptOrder;
