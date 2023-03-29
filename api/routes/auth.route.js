const router = require('express').Router()

const { register, login } = require('../controllers/auth.controller')
const { checkAuth } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)

module.exports = router
