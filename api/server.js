const express = require('express');
const server = express();
const usersRouter = require('./users/users-router')

server.use(express.json());

server.use('/api', usersRouter);

server.get('/', (req, res) => {
    res.send(`<h1> Users API </h1>`)
});

server.use('*', (req, res) => {
    res.send(`<h1> Hello from Heroku </h1>`);
});

module.exports = server;