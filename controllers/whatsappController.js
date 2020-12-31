// const Joi = require('Joi')
const Joi = require('@hapi/joi')
const HttpStatus=require("http-status-codes")
// const bcrypt = require('bcryptjs');

module.exports={
    SendMessage: async (req, res) => {
        var accountSid = 'ACa47e7c135d4271983b422299c7b52aaa'; // Your Account SID from www.twilio.com/console
        var authToken = '0c04b2c6e1fbc7b5c33701c1398506b6';   // Your Auth Token from www.twilio.com/console

        var twilio = require('twilio');
        var client = new twilio(accountSid, authToken);

        client.messages.create({
            body: req.body.body,
            to: `whatsapp:${req.body.to}`,  // Text this number
            from: `whatsapp:+14155238886` // From a valid Twilio number
        })
        .then((message) => {
            res.json({
                status: 'success', 
                data: message
                
            })
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
}