const authService= require("../services/loginservice");
async function login(req,res) {
      try{
            const {username,password}=req.body;
            const token= await authService.loginuser(username,password);
            res.json({ token:token });
        }
        catch(error){
            console.log(error);
            res.status(401).json({message:"invalid credential!"})
        }
    }
 
module.exports= {login};
