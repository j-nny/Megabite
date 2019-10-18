const twilio = require('twilio');

const accountSid = 'ACed734727cb1b9cb11c97bb2938667823';
const authToken = '9f6fbdbce6c139d0d193dd77548ac590';
const client = twilio(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16473701007',
     to: '+16479902593'
   })
  .then(message => console.log(message.sid));
