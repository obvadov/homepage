import express from 'express'
import Post from '../../models/Post'
import httpStatus from "http-status";

//mongoose helpers
const {startSession} = require('../../helpers/dbTransactions')

async function getAllPosts(req,res,next){
    try{
        //@TODO: implement pagination, getting data from frontend
        const skip = 0;
        const limit = 10;
        const posts = await Post.find({})
            .sort('-createdAt')
            .skip(skip)
            .limit(limit)
            .lean();

        res.status(httpStatus.OK).json({return:"ok",posts})
    } catch(e){
        next(e)
    }
}

async function createPost(req,res,next) {
    const session = await startSession();
    try{
        const fieldsValidation = (post)=>{
            //@TODO: implement
            return post;
        }
        //validation fields
        const validatedUserFields =  fieldsValidation(req.body);

        const newPost = new Post({
            ...validatedUserFields
        });

        const transactionResult = await session.withTransaction(async()=>await newPost.save({session}));

        return res.status(httpStatus.CREATED).json({_id: newPost._id})
    }catch(e){
        next(e)
    }

}

module.exports = {
    getAllPosts,
    createPost
}