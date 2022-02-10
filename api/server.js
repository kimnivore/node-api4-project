const express = require('express');
const cors = require('cors');
const usersRouter = require('./users/users-router');
const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', usersRouter);

server.get('/', (req, res) => {
    res.send(`<h1> Hello user </h1>`)
});

server.use('*', (req, res) => {
    res.send(`<h1> Hello from Heroku </h1>`);
});

server.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})


module.exports = server;