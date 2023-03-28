const router = require('express').Router()

router.use('/platform', require('./platform.route'))

module.exports = router
