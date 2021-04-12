import express from 'express'
import User from '../../models/User'
import httpStatus from 'http-status'

//mongoose heplers
const {startSession} = require('../../helpers/dbTransactions')

async function getAllUsers(req,res,next){
    try{
        //@TODO: implement pagination, getting data from frontend
        const skip = 0;
        const limit = 10;
        const users = await User.find({})
            .sort('-createdAt')
            .skip(skip)
            .limit(limit)
            .lean();

        res.status(httpStatus.OK).json({return:"ok",users})
    } catch(e){
        next(e)
    }
}

async function getUserByProviderId(id){
    return await User.findOne({
        providerId: id
    }).exec()
}

async function getUserByEmail(email){
    return await User.findOne({ email }).exec()
}

async function createUser (fields){
            const fieldsValidation = (body) => {
                //@TODO: implement
                //body.map(e => e in veryfiedList)
                return body;
            }
            //validation fields
            const validatedUserFields = fieldsValidation(fields);



            return new Promise(async(resolve, reject) => {
                const user = await User.findOne({ email: fields.email })

                if (user) {
                    return reject("Email is already taken")
                }

                resolve(
                    await User.create({
                        ...validatedUserFields
                    })
                )
            })

}

export {
    getAllUsers,
    createUser,
    getUserByProviderId,
    getUserByEmail
}