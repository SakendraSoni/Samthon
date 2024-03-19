const port = 4000;
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { GridFsStorage } = require("multer-gridfs-storage")
const path = require('path');
const cors = require('cors');
const { GridFSBucket, ObjectId, MongoClient } = require('mongodb');

app.use(express.json());
app.use(cors());

const BASE_URL = process.env.PROTOCOL + process.env.HOST_URL;
const url = process.env.MONGODB_URI;

// Database Connection With MongoDB
mongoose.connect(process.env.MONGODB_URI);
console.log("Server Running On :", BASE_URL);

const mongoClient = new MongoClient(url)
mongoClient.connect()

const database = mongoClient.db("samthon")

const imageBucket = new GridFSBucket(database, {
    bucketName: "photos",
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// API Creation

app.get('/', (req, res) => {
    res.send('Express is running');
})

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
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, message: "Email Already Exists" })
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "user",
        cartData: [],
        purchaseHistory: [],
    });
    await user.save();
    const data = {
        user: {
            id: user.id,
        }
    }
    const token = jwt.sign(data, 'secret_ecom')
    res.json({ success: true, token })
})

//Creating Endpoint for login users
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Password" })
        }
    } else {
        res.json({ success: false, message: "Invalid Email" })
    }
});


app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port ${port}`);
    } else {
        console.log(error);
    }
})