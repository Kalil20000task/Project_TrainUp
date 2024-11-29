const express= require("express");
const app= express();
const cors=require("cors");
require('dotenv').config();
const PORT= process.env.PORT || 10000;
// const {connectedtomongo}= require('./configuration/dbconfig')
const userRoutes=require("./routes/userRoute");
const signRoutes=require("./routes/signuproutes");
const loginRoutes=require("./routes/loginroute");
const deleteRoute=require("./routes/deleteRoute");


const bodyParser=require("body-parser");


app.use(bodyParser.json());
app.use(cors()); 

app.use("/api/user",userRoutes);
app.use("/api/signusers",signRoutes);
app.use("/api/loginusers",loginRoutes);
app.use("/api/deleteusers", deleteRoute);


app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});


