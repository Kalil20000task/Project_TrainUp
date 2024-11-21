const mongoose = require('mongoose');

const uri ="mongodb+srv://teamekaleab925:kalilmongopassword@trainupcluster.1y7tu.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
// mongoose.connection.on("connected",() =>{
// const mongoose= require('mongoose');
// mongoose.connect("mongodb://localhost:27017/crud",{
    
// });

//     console.log("connected to mongo db");

// });
// mongoose.connection.on("error",(err) =>{
//     console.error(`mongodb conecttion error:${err}`);

// });
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
