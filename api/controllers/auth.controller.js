const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const PrivateInfo = require('../models/private_info.model')
const register = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const user = await User.create(req.body)
        const privateinfo1 = await PrivateInfo.create(req.body)
        const result = await privateinfo1.setUser(user)
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error cannot create user')
    }
}

const login = async (req, res) => {

    try {
        const user = await PrivateInfo.findOne({ where: { email: req.body.email } })

        if (!user) {
            return res.status(403).send('Email or password invalid')
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {

            if (!result) {
                return res.status(403).send('Email or password invalid')
            }

            const token = jwt.sign({ email: user.email }, process.env.SECRET)

            return res.status(201).json({ token })
        })

    } catch (error) {
        console.error(error)
    }

}

module.exports = {
    register,
    login
}
