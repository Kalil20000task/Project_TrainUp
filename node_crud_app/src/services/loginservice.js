const User= require("../model/signupmodel");
const bcrypt= require("bcrypt");
const {generateToken}= require("../utils/utils");

 async function loginuser(username,password) {
    try{
       const existinguser= await User.findOne({username})
       if(!existinguser){
        throw new Error("No user with the given username! ");
       }
       const ispasswordvalid=bcrypt.compare(password,existinguser.password)
       if(!ispasswordvalid){
        throw new Error("No user with the given password! ");
       }
       const token=generateToken(existinguser);
       return token;
    }
    catch(error){
        throw new Error("Invalid credentials");

    }
 }
module.exports={loginuser};