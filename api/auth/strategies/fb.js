import passport from 'passport'
import passportFacebook from 'passport-facebook'
import to from 'await-to-js'
import _ from 'lodash'

import { signToken } from "../utils";
import { authorize, callback } from "../../controllers/v1/auth.ctrl"
import { getUserByProviderId, createUser } from "../../controllers/v1/users.ctrl"

const FacebookStrategy = passportFacebook.Strategy;

const strategy = (app) => {
    const strategyOptions = {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_APP_CALLBACK_URL,
        profileFields: ['id', 'displayName', 'emails', 'name', 'photos', 'gender','link', 'birthday'],
    }

    const verifyCallback = async(accessToken, refreshToken, profile, done) => {
        let [err, user] = await to(getUserByProviderId(profile.id))
        if(err || user) return done(err, user)

        const [createdError, createdUser] = await to(createUser(
            {
                last_name: _.get(profile, 'name.familyName'),
                first_name: _.get(profile, 'name.givenName'),
                username: `fb${_.get(profile, 'id')}`,
                providerId: _.get(profile, 'id'),
                providerName: _.get(profile, 'provider'),
                email: _.get(profile, 'emails[0].value'),
                avatar: _.get(profile, 'photos[0].value'),
            })
        )

        return done(createdError, createdUser)
    }

    passport.use(new FacebookStrategy(strategyOptions,verifyCallback));

    app.get(`${process.env.API_URL_PREFIX}/auth/fb/callback`, callback, (req,res)=>{
        return res
            .status(200)
            .cookie('jwt', signToken(req.user), {
                httpOnly: true
            })
            .redirect("http://localhost:3006/")
    })

    app.get(`${process.env.API_URL_PREFIX}/auth/fb`, authorize)

    return app
}

export {
    strategy
}