const User=require('../model/user');
class Userservice{
    async createUser(fullName,
        //telephone,
        whatsappNumber,email,country,course,learningMode,date){
        const newUser= new User ({fullName,
            //telephone,
            whatsappNumber,email,country,course,learningMode,date})
        return await newUser.save();
    }
    async getallusers(){
        return await User.find();
    }
} ;

module.exports= new Userservice(); 