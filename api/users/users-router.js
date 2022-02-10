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

router.post('/login', (req, res) => {
    const {username, password } = req.body;
    if(username && password) {
        res.status(200).json({ message: `Welcome ${username}` });
    } else {
        res.status(400).json({ message: 'Incorrect username/password' });
    }
});

// router.post('/login', validateLogin, async (req, res, next) => {
//     const user = req.user;
//     const { username, password }  = req.body;

//     try {
//     const user = await Users.findBy({ username })
//     if(!user) return res.status(400).json({ message: "User was not found" });
//     const validPassword = await bcrypt.compare(password, user.password);
//     if(!validPassword) return res.status(400).json({ message: "Password is invalid" });

//     user.password = undefined;
    
//     res.send(user);
//     } catch (err) {
//         next(err)
//     }
// });





module.exports = router;