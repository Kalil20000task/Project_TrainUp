const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/crud",{
    
});
mongoose.connection.on("connected",() =>{
    console.log("connected to mongo db");

});
mongoose.connection.on("error",(err) =>{
    console.error(`mongodb conecttion error:${err}`);

});
module.exports=mongoose;



// const connectedtomongo= async() =>{
//     try{
//        await mongoose.connect("mongodb://localhost:27017/crud")
//        console.log("connected to database");
//      }
//     catch(error)
//     {
//         console.error(`couldnot connect to database ${error}`)
//     }
// }
// module.exports={mongoose,connectedtomongo};