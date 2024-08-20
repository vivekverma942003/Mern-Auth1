const jwt= require("jsonwebtoken");

const {secretKey} = require("../configuration/jwtConfig");

function authenticationToken(req,res,next){
    const authHeader=req.header("Authorization")
    if(!authHeader){
        return res.status(401).json({
            message:"Unatuhorizes :Missing token"
        })
    }

    const [bearer,token]=authHeader.split(" ");
    if(bearer!=="Bearer" || !token){
        return res.status(401).json({
            message:"Invalid token format"
        })
    }
    jwt.verify(token,secretKey,(err,user)=>{
        if(err){
            return res.status(402).json({
                message:"Forbidden :Invalid token"
            })
        }
        req.user=user;
        next();
    })

}
function verifyToken(token){
    return jwt.verify(token,secretKey);
}

module.exports={
    authenticationToken
}