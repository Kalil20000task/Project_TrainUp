const mongoose= require('mongoose');
const connectedtomongo= async() =>{
    try{
       await mongoose.connect("mongodb://localhost:27017/crud_db")
       console.log("connected to database");
     }
    catch(error)
    {
        console.error(`couldnot connect to database ${error}`)
    }
}
module.exports={mongoose,connectedtomongo};