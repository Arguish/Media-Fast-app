const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const PrivateInfo = require('../models/private_info.model')


const register = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const url = 'https://www.robohash.org/' + req.body.nickname
    req.body.img_url = url
    const user = await User.create(req.body)
    const privateinfo = await PrivateInfo.create(req.body)
    const result = await privateinfo.setUser(user)
    const token = jwt.sign({ email: privateinfo.email }, process.env.SECRET)
    res.status(200).json({user, privateinfo, token})
  } catch (error) {
    console.error(error)
    res.status(500).send('Error cannot create user')
  }
}

const login = async (req, res) => {
  try {
    const userInfo = await PrivateInfo.findOne({
      where: { email: req.body.email },
      include: [
        { model: User }
      ],
    })
    if (!userInfo) {
      return res.status(403).send('Email or password invalid')
    }
    bcrypt.compare(req.body.password, userInfo.password, (err, result) => {
      if (!result) {
        return res.status(403).send('Email or password invalid')
      }
      const token = jwt.sign({ email: userInfo.email }, process.env.SECRET)
      return res.status(201).json({ userInfo, token })
    })
  } catch (error) {
    console.error(error)
  }

}

module.exports = {
  register,
  login
}
