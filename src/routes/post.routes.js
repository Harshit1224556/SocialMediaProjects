const express = require('express')

const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')


router.post('/', async(req,res)=>{

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

    res.status(200).json({
        message:"login successfull user",
        user
    })
    }


    catch(err){
          res.status(401).json({
            message:"Invalid token cant login"
          })
    }
})
module.exports = router