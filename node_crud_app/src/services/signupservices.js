const User= require("../model/signupmodel");
const bcrypt= require("bcrypt");
 
async function signupuser(userData) {
    const {fullname,username,password}= userData;
    const hashedpassword= await bcrypt.hash(password,10);
    const createduser= new User({
        fullname,
        username,
        password:hashedpassword,
        role: "normal user"

    });

    const saveUser= await createduser.save();
    return saveUser;
    
 }
module.exports={signupuser};