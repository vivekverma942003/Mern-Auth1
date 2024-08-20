const User= require("../models/user");

const bcrypt=require("bcrypt");

async function createAdminAccount(){
    try{
        const existingUser=await User.findOne({email:"vivekverma942003@gmail.com"});
        if(!existingUser){
         const newAdmin =new User({
            name:"Vivek",
            email:"vivekverma942003@gmail.com",
            password:await bcrypt.hash("Vivek@1234",10),
            role:"admin"
         })
         await newAdmin.save()
         console.log("Admin account has created successfully");
        }
        else{
            console.log("Admin already exists")
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports=createAdminAccount;