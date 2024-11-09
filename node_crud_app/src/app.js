const express= require("express");
const app= express();
const cors=require("cors");
const PORT= process.env.PORT || 5000;
// const {connectedtomongo}= require('./configuration/dbconfig')
const userRoutes=require("./routes/userRoute");
const signRoutes=require("./routes/signuproutes");
const loginRoutes=require("./routes/loginroute");
const bodyParser=require("body-parser");


app.use(bodyParser.json());
app.use(cors()); 

app.use("/api/user",userRoutes);
app.use("/api/signusers",signRoutes);
app.use("/api/loginusers",loginRoutes);

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});


