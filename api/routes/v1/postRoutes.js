import express from 'express'
const router = express.Router();

import { getAllPosts, createPost } from '../../controllers/v1/post.ctrl'



router.route("/")
    .get(
        /*list of accesControl, Validation Functions*/
        getAllPosts
    )
    .post(/*list of accesControl, Validation Functions*/
        createPost)

export default router;