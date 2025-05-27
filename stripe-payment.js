const express = require('express');
const stripe = require('stripe')('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');
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    try {
        const { payment_method_id, amount, currency, customer_email } = req.body;
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            payment_method: payment_method_id,
            customer_email: customer_email,
            confirm: true,
            return_url: 'https://yoursite.com/return'
        });
        
        res.json({ success: true, payment_intent: paymentIntent });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});
