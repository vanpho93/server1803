const express = require('express');
const { json } = require('body-parser');
require('./connectDatabase');
const { User } = require('./User');

const app = express();
app.use(json());

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    user.save()
    .then(() => res.send({ success: true, user }))
    .catch(error => res.status(400).send({ success: false, error: error.message }));
});

app.post('/signin', (req, res) => {});

// app.post('/check', (req, res) => {});
app.listen(3000, () => console.log('Server started.'));
