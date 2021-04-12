const express = require("express");
const router = express.Router()

import userRoutes from './v1/userRoutes'
import postRoutes from './v1/postRoutes'


//routes
// /api/v1/user
router.use('/user', userRoutes)
// /api/v1/message
router.use('/post', postRoutes)

module.exports = router