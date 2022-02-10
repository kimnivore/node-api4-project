const express = require('express');
const Users = require('./users-model');
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
    let body = req.body
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



module.exports = router;