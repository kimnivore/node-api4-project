const express = require('express');
const Users = require('./users-model');


const router = express.Router();


router.get('/users', (req, res, next) => {
    Users.get(req.query)
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
})


module.exports = router;