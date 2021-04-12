import passport from 'passport'
import { signToken } from '../../auth/utils'

const authorize = passport.authenticate('facebook', { scope :
        [
            'email',
            'public_profile',
        ]
});

const callback =  passport.authenticate('facebook',
    {
        failureRedirect: '/login'
    })

export {
    callback,
    authorize
}