const Users = require('./users-model');

async function validateLogin(req, res, next) {
   const id = req.params.id;
   const { username, password } = req.body;
   const user = await Users.getById(id);
   if(!user) {
       res.status(400).json({
           message: "User not found"
       })
   }
   if(username && password ){
       next()
   } else {
       next({
           status: 422,
           message: 'Requires a valid username and password',
       })
   }
}

module.exports = { validateLogin };