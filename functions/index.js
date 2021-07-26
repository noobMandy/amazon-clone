const functions = require("firebase-functions");
const express= require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51JGffISE2JrOwJbVayX7WL3Vrq8BjmgS9eOtGhPgKfLH5JZJtZlHPclN60XTZOGyKqQfFINnq3k84zE1Ob8yMKYS00eGAbihnx')


const app=express();

app.use(cors({origin:true}));
app.use(express.json());


app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('/payments/create', async (request,response) =>{
    const total =request.query.total;
    console.log('Payment request recieved',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)
//http://localhost:5001/clone-8fb77/us-central1/api