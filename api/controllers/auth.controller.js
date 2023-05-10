const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const PrivateInfo = require('../models/private_info.model')


const register = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const url = 'https://www.robohash.org/' + req.body.nickname
    req.body.img_url = url
    const userList = await User.findAll({
      include: [PrivateInfo]
    })
    const emails = userList.map((el) => el.dataValues.private_info.dataValues.email)
    const nicknames = userList.map((el) => el.dataValues.nickname)
    if (nicknames.includes(req.body.nickname) || emails.includes(req.body.email)) {
      return res.status(501).send('DATA ALREADY USED.')
    } else {
      const user = await User.create(req.body)
      const privateinfo = await PrivateInfo.create(req.body)
      const result = await privateinfo.setUser(user)
      const token = jwt.sign({ email: privateinfo.email }, process.env.SECRET)
      return res.status(200).json({ user, privateinfo, token })
    }
  } catch (error) {
    return res.status(500).send('Error cannot create user', error)
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
