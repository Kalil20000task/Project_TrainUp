const express= require("express");
const userController=require("../controllers/signupcontroller");
const router=express.Router();
router.post("/",userController.createUser);
module.exports= router; 