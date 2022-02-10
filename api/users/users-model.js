const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

const users = [
  { id: getId(), username: 'kimnivore1', password: 'kimnivore' },
  { id: getId(), username: 'curtis1', password: 'curtis' },
  { id: getId(), username: 'keane1', password: 'keane' },
  { id: getId(), username: 'tristin1', password: 'tristin' },
];

module.exports = {

async get() {
  return users;
},

async getById(id){
  const user = users.find(u => u.id === id)
  return user
},

async register({ username, password }) {
  const user = { id: getId(), username, password }
  users.push(user)
  return user
},

async login({ username, password }) {
  if(!username || !password){
    return 'Please input correct username & password'
  } else {
    return 'Welcome user!';
  }
}
}

