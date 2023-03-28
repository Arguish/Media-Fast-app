const router = require('express').Router()

router.use('/category', require('./category.route'))
router.use('/private_info', require('./private_info.route'))



module.exports = router
