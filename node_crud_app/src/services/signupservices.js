const User = require("../model/signupmodel");
const bcrypt = require("bcrypt");

async function signupuser(userData) {
  const { fullname, username, password, role } = userData;

  // Check if the role is valid, otherwise default to "editor"
  const validRoles = ["admin", "editor"];
  const userRole = validRoles.includes(role) ? role : "admin"; // Default to "editor" if invalid

  // Hash the password before saving
  const hashedpassword = await bcrypt.hash(password, 10);

  const createduser = new User({
    fullname,
    username,
    password: hashedpassword,
    role: userRole,
  });

  // Save the user to the database
  const saveUser = await createduser.save();
  return saveUser;
}

module.exports = { signupuser };
