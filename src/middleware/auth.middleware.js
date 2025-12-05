
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
async function authMiddleware (req,res,next){
    const token = req.cookies.token

    if(!token){
        res.status(401).json({
           message:"Please login to create a post"
        })
    }

    try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    const user = await userModel.findOne({
        _id:decoded.id
    })
        
    req.body = user
    

    // res.status(200).json({
    //     message:"login successfull user",
        
    // })
    }

     
    catch(err){
          res.status(401).json({
            message:"Invalid token cant login"
          })
    }
    next()
}

module.exports = authMiddleware