const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

const users = [
  { id: getId(), username: 'kimnivore1', password: Date.now()},
  { id: getId(), username: 'curtis1', password: Date.now()},
  { id: getId(), username: 'keane1', password: Date.now()},
  { id: getId(), username: 'tristin1', password: Date.now()},
];

module.exports = {

async get() {
  return users;
},

async register({ username, password }) {
  const newUser = { id: getId(), username, password }
  users.push(newUser)
  return newUser
},

// function login({ username, password }) {
//   if(!username || !password){
//     return 'Please input correct username & password'
//   } else {
//     return username;
//   }
// }
}

