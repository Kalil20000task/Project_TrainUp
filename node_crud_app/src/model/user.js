const mongoose= require("../configuration/dbconfig");
const userSchema= new mongoose.Schema({
    fullName: String,
    email: String,
    telephone : String,
    country: String,
    course: String
   
});

const User=mongoose.model("User",userSchema);
module.exports= User; 