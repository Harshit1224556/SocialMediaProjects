const express = require('express')

const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const authMiddleware=require('../middleware/auth.middleware')
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})
 const createPostController = require('../controllers/post.controller')
router.post('/', authMiddleware,upload.single("image"),createPostController)
module.exports = router