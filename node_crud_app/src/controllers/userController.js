const UserService= require("../services/userservice");
class userController{
    async createUser(req,res){
        try{
            const {name,email,phone,country,courselist}=req.body;
            const saveUser= await UserService.createUser(name,email,phone,country,courselist);
            res.json(saveUser);
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
    }

};
 
module.exports= new userController();