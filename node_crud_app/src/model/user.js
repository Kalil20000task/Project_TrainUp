const mongoose= require("../configuration/dbconfig");
const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    phone : String,
    country: String,
    courselist: String
});

const User=mongoose.model("User",userSchema);
module.exports= User; 