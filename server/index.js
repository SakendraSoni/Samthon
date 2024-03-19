const express = require("express");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

const url = "mongodb+srv://admin:admin@cluster0.lfcoyq4.mongodb.net/samthon"
mongoose.connect(url);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/", (req, res) => {
    res.send(`Express is running on port ${PORT}`)
});

const Users = mongoose.model('Users', {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    cartData: { type: Object },
    purchaseHistory: { type: Object },
    date: { type: Date, default: Date.now },
})

app.get('/getCode', async (req, res) => {
    await fetch('http://13.48.136.54:8000/api/api-code/', {
        method: 'POST',
        headers: { Authorization: 'Bearer b236308d-6214-4566-a8ad-dd4e1f00aed5' },
    }).then((response) => response.json())
        .then((data) => res.json({ data }));
})

//Creating Endpoint for registering users
app.post('/signup', async (req, res) => {
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "user",
        cartData: [],
        purchaseHistory: [],
    });
    await user.save();
    res.json({ success: true })
})

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});