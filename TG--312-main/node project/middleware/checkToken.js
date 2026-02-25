const jwt=require('jsonwebtoken');
const jwt_secret="manish@123";

const authToken = async(req , res , next)=>{
    try{
    let token=req.headers.authorization;
    let verify = jwt.verify(token, jwt_secret);
    req.user= verify._id
    next()
        
    }catch(error){
        return res.status(401).json({msg:"unauthorized user"})
    }  

}

module.exports = authToken;