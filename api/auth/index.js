import * as utils from './utils'
import * as strategies from './strategies'

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const initAuth = app => {
    utils.passportUserSerializeDeserialize()

    pipe(
        //@TODO: for other strategies
        strategies.FaceBookStrategy
    )(app)
}

export { utils, initAuth, strategies }