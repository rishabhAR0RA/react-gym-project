const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

mongoose.connect('mongodb+srv://mongouser:mongouser@cluster0.bj1wuxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/signup', async (req, res) => {
    const email = req.body.userEmail;
    const password = req.body.userPassword;

    const formData = new User({
        email: email,
        password: password
    });

    try {
        const user = await formData.save();
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating user');
    }
});

app.post('/login', async (req, res) => {
    console.log('Received login request');
    const email = req.body.userEmail;
    const password = req.body.userPassword;

    try {
        const user = await User.findOne({ email: email, password: password });
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error logging in');
    }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));