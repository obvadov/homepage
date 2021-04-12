import jwt from 'jsonwebtoken'
import passport from 'passport'
import User from '../models/User'

const passportUserSerializeDeserialize = () => {
    passport.serializeUser((user, cb) => cb(null, user._id));
    passport.deserializeUser(async (id, cb) => {
        try{
            const user = await User.findById(id)
            return cb(null, user);
        } catch (err) {
            cb(err, null)
        }
    });
}

const signToken = (user) =>{
    return jwt.sign({data: user}, process.env.JWT_SECRET, {
        expiresIn: 604800
    })
}

export {
    signToken,
    passportUserSerializeDeserialize
}