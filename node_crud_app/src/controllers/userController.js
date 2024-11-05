const UserService= require("../services/userservice");
class userController{
    async createUser(req,res){
        try{
            const {fullName,telephone,email,country,course}=req.body;
            const saveUser= await UserService.createUser(fullName,telephone,email,country,course);
            res.json(saveUser);
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
    }

};
 
module.exports= new userController();
