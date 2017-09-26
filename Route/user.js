const express=require("express");
const router=express.Router();
const userController=require("../Controller/user");
router.get("/:userID",userController.getUser);
router.post("/register",userController.createNewUser);
router.post("/query/:userID",userController.createQuery);
router.put("/:surveyID",userController.reviews);
module.exports=router;