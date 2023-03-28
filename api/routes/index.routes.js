const router = require('express').Router()

router.use('/platform', require('./platform.route'))
router.use('/user', require('./user.route'))
module.exports = router
