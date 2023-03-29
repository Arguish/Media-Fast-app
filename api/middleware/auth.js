const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const PrivateInfo = require('../models/private_info.model')
const checkAuth = (req, res, next) => {
    const token = req.headers.token

    jwt.verify(token, process.env.SECRET, async (err, payload) => {
        if (err) {
            return res.status(400).send('Invalid token')
        }

        const privateInfo = await PrivateInfo.findOne({ where: { email: payload.email } })

        if (!privateInfo) {
            return res.status(400).send('Invalid token')
        }
        res.locals.privateInfo = privateInfo
        next()
    })

}

const checkAdmin = async (req, res, next) => {
    const user = await User.findOne({
        where: {
            id: res.locals.privateInfo.userId
        }
    })
    if (user.role === 'admin') {
        next()
    } else {
        return res.status(401).send('Unauthorized')
    }
}

module.exports = {
    checkAuth,
    checkAdmin
}
