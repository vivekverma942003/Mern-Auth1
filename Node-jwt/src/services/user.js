const User=require("../models/user")

async function getUser(){
    const users= await User.find({
        
    })
    return users;
}

module.exports={getUser};