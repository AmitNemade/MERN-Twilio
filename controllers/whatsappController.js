// const Joi = require('Joi')
const Joi = require('@hapi/joi')
const HttpStatus=require("http-status-codes")
const { MessagingResponse } = require('twilio').twiml;
const goodBoyUrl = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?'
  + 'ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

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
    RecieveMessage: async (req, res) => {
        const { body } = req;

        let message;
        console.log("1==>",body)
      
        if (body.NumMedia > 0) {
          message = new MessagingResponse().message("Thanks for the image! Here's one for you!");
          message.media(goodBoyUrl);
        } else {
          message = new MessagingResponse().message('Send us an image!');
        }
      
        res.set('Content-Type', 'text/xml');
        res.send(message.toString()).status(200);
    }
}






