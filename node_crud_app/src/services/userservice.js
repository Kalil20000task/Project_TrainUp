const User=require('../model/user');
class Userservice{
    async createUser(fullName,telephone,email,country,course,date){
        const newUser= new User ({fullName,telephone,email,country,course,date})
        return await newUser.save();
    }
    async getallusers(){
        return await User.find();
    }
} ;

module.exports= new Userservice(); 