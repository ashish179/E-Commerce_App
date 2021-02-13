const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe= require("stripe")('sk_test_51IK6y2EKFza0otyXeLDm2qtvWVbO2sSP7ogM8rbS0DSmOA6VvwAkGgQs2JE6kXTYVQUM5dovogECstMOqXYBLKUD004Gwi92C9');

//

const app= express();

app.use(cors({origin:true}));
app.use(express.json());






app.get('/', (req,res)=>  res.status(200).send('hello'))

app.post('/payment/create',async(req,res)=> {

    const total= req.query.total;

    console.log(total);

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


//http://localhost:5001/clone-941df/us-central1/api


exports.api = functions.https.onRequest(app);


