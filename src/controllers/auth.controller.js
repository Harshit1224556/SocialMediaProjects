const userModel = require('../models/user.model')
const { use } = require('../routes/auth.routes')

const jwt = require('jsonwebtoken')
async function registerController(req,res){

    const {username,password} = req.body

    const existinguser = await userModel.findOne({
        username
    })

    if(existinguser){
        return res.status(209).json({
            message:"Username Already Exists"
        })
    }

    const user = await userModel.create({
        username,password
    })

    const token  = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    
    res.cookie("Token",token)
    res.status(201).json({
        message:"User Accout Created Successfully",
        user
    })
}

async function loginController(req,res){

    const {username,password} = req.body

    const user = await userModel.findOne({
        username
    })

    if(!user){
       return  res.status(401).json({
            message:"User not found"
        })
    }

    const ispasswordvalid = user.password === password

    if(!ispasswordvalid){
       return  res.status(401).json({
            message:"Invalid Password"
        })
    }
 
    return res.status(200).json({
        message:"User login Successfull"
    })

}

module.exports={
    registerController,
    loginController
}
