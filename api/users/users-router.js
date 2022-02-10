const express = require('express');
const Users = require('./users-model');
// const { validateLogin } = require('./users-middleware');

const router = express.Router();


router.get('/users', (req, res, next) => {
    Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            console.log(error);
            next(error);
            res.status(500).json({
                message: "Error retrieving users",
            })
        })
});

router.post('/register', (req, res, next) => {
    const body = req.body
    if(!body.username || !body.password) {
        res.status(500).json({ message: 'username and password are required' });
    } else {
        Users.register(body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch((error) => {
            next(error);
            res.status(500).json({ message: 'could not create a new user' });
        })
    }
});

router.post('/login', (req, res) => {
    const {username, password } = req.body;
    if(username && password) {
        res.status(200).json({ message: `Welcome ${username}` });
    } else {
        res.status(400).json({ message: 'Incorrect username/password' });
    }
});




module.exports = router;