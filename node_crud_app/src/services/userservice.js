const User=require('../model/user');
class Userservice{
    async createUser(name,email,phone,country,courselist){
        const newUser= new User ({name,email,phone,country,courselist})
        return await newUser.save();
    }
} ;

module.exports= new Userservice(); 