const twilio = require('twilio');

const accountSid = 'ACd3a128e7be76db91459eabd05f4f7c23';
const authToken = '03dd70c59fb29f0770fa4c897873fc1e';
const client = twilio(accountSid, authToken);

client.messages
  .create({
     body: 'Testing from node js',
     from: '+16476969370',
     to: '+16479902593'
   })
  .then(message => console.log(message.sid));

