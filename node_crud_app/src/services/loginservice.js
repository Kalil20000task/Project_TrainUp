const bcrypt = require("bcrypt");
const User = require("../model/signupmodel");
const { generateToken } = require("../utils/utils");

async function loginuser(username, password) {
  try {
    const existinguser = await User.findOne({ username });
    if (!existinguser) {
      throw new Error("No user with the given username!");
    }

    // Await the bcrypt comparison to correctly check the password
    const ispasswordvalid = await bcrypt.compare(password, existinguser.password);

    if (!ispasswordvalid) {
      throw new Error("Incorrect password!");
    }

    const token = generateToken(existinguser);
    return token;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
}

module.exports = { loginuser };
