const express = require('express');
const router = express.Router();
const db = require("../database");
const twilio = require('twilio');

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;


router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/ownerLogin");
  }
  Promise.all([db.getRestaurantOrders(req.session.user_id, false), db.getRestaurantOrders(req.session.user_id, true) ])
    .then(([result1, result2]) => {
      let falseOrder =  result1.rows.reduce(function(acc, order){
            if(acc[order.order_id]){
              acc = Object.assign(acc, {[order.order_id]: [...acc[order.order_id], order]});
            }
            else{
              acc = Object.assign(acc, {[order.order_id]: [order]});
            }

            return acc
          }, {});
          console.log(falseOrder);
          let falseProperties = Object.keys(falseOrder).reverse();

      let trueOrder =  result2.rows.reduce(function(acc, order){
        if(acc[order.order_id]){
          acc = Object.assign(acc, {[order.order_id]: [...acc[order.order_id], order]});
        }
        else{
          acc = Object.assign(acc, {[order.order_id]: [order]});
        }

        return acc
      }, {});
      console.log(falseOrder);
      let trueProperties = Object.keys(trueOrder).reverse();
          let templateVar = {
            user: req.session.user_id,
            trueOrder,
            falseOrder,
            trueProperties,
            falseProperties
          }
      res.render("ownerOrder", templateVar);
    })
  // db.getRestaurantOrders(req.session.user_id)
  // .then(data => {
  //   let orderObject = data.rows.reduce(function(acc, order){
  //     if(acc[order.order_id]){
  //       acc = Object.assign(acc, {[order.order_id]: [...acc[order.order_id], order]});
  //     }
  //     else{
  //       acc = Object.assign(acc, {[order.order_id]: [order]});
  //     }

  //     return acc
  //   }, {});
  //   console.log(orderObject);
  //   let properties = Object.keys(orderObject).reverse();
  //   let templateVar = {
  //     user: req.session.user_id,
  //     orderObject,
  //     properties
  //   }
  //   res.render("ownerOrder", templateVar);
  //   properties.forEach(function (prop) {
  //     for (let i = 0; i < orderObject[prop].length; i++){
  //     console.log(`"PropertyName: ${prop}, its Value: ${orderObject[prop][i].order_id}`)
  //     }
  //   });

  // })
});


router.post('/', (req, res) => {
  // res.render("ownerOrder");
  console.log(req.body)
  // query to make order active false
  const client = twilio(accountSid, authToken);
      client.messages
        .create({
          body: `Your order will be ready in ${req.body.timeSet} minutes!`,
          from: '+16476969370',
          to: '+16479902593'
          })
        .then(message => console.log(message.sid));
});

module.exports = router;
