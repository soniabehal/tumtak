const express=require("express");
const router=express.Router();
const userController=require("../Controller/user");
router.post("/register",userController.createNewUser);
router.post("/query/:userID",userController.createQuery);
module.exports=router;