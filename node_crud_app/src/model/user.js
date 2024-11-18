const mongoose= require("../configuration/dbconfig");
const userSchema= new mongoose.Schema({
    fullName: String,
  //  telephone : String,
    email: String,
    country: String,
    course: [String],
    learningMode:[String],
    date: { type: Date, default: Date.now },
    whatsappNumber: String
    
   
});

const User=mongoose.model("User",userSchema);
module.exports= User; 