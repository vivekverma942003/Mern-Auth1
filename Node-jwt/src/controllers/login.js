const authService = require("../services/Login");

async function login(req,res){
    const{email,password} = req.body;
    
    try{
        const token=await authService.Login(email,password);
        res.status(200).json({
            token
        })
    }
    catch(error){
        res.status(400).json({
            message:"Invalid User credentials"
        })
    }
}
module.exports ={
    login
}