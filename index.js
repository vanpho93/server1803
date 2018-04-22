const express = require('express');
const { json } = require('body-parser');
const { hash } = require('bcryptjs');
require('./connectDatabase');
const { User } = require('./User');

const app = express();
app.use(json());

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const encryptedPassword = await hash(password, 8);
        const user = new User({ name, email, password: encryptedPassword });
        await user.save();
        const userInfo = user.toObject();
        delete userInfo.password;
        res.send({ success: true, user: userInfo });
    } catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
});

app.post('/signin', (req, res) => {});

// app.post('/check', (req, res) => {});
app.listen(3000, () => console.log('Server started.'));
