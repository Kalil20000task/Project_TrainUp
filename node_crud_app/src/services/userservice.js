const User=require('../model/user');
class Userservice{
    async createUser(fullName,telephone,email,country,course){
        const newUser= new User ({fullName,telephone,email,country,course})
        return await newUser.save();
    }
} ;

module.exports= new Userservice(); 