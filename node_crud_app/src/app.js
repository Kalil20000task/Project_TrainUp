const express= require("express");
const app= express();
const PORT= process.env.PORT || 5000;
// const {connectedtomongo}= require('./configuration/dbconfig')
const userRoutes=require("./routes/userRoute");
const bodyParser=require("body-parser");


app.use(bodyParser.json());
app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});


app.use("/api/user",userRoutes);