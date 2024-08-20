    const bcrypt = require("bcrypt");
    const User = require("../models/user")

    const {generateToken} = require("../utils/jwtUtils");

    async function Login(email,password){
        try{
        const existingUser = await User.findOne({email});
        
        if(!existingUser){
            console.log("User not found")
            throw new Error("User not found");
        }
        const isPasswordValid =  await bcrypt.compare(password,existingUser.password);
        
        if(!isPasswordValid){
            throw new Error("Password is not valid");
        }
        const jwtToken = await generateToken(existingUser);
        // console.log(jwtToken)
        return jwtToken;
        }
        catch(error){
            console.log("Login Error" , error.message);
            throw new Error("Invalid user try with correct credentials");
        }

    }

    module.exports ={
        Login
    }