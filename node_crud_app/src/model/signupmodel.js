const mongoose= require("../configuration/dbconfig");
const userSchema= new mongoose.Schema({
    fullname: String,
    username : String,
    password: String,
    role: {type:String, enum:["normal user", "admin","editor"], default:"normal user"}

    
});
module.exports= mongoose.model("signeduser",userSchema);