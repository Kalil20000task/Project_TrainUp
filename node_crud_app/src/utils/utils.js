// jwtUtil.js
const jwt = require('jsonwebtoken');

// Secret key (keep this secure and in an environment variable)
const {secretkey} = require("../configuration/jwtconfig");

// Function to generate a JWT
function generateToken(user) {
    const payload={
        id:user._id,
        username:user.username,
        role:user.role
    }
  return jwt.sign(payload, secretkey, { expiresIn:"1h" });
}



module.exports = {
  generateToken,
};
