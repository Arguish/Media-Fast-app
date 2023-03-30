const { getPlatforms, getOnePlatform, updatePlatform, createPlatform, deletePlatform } = require('../controllers/platform.controller')
const { checkAdmin, checkAuth } = require("../middleware/auth");
const router = require('express').Router()

router.get('/', checkAuth, getPlatforms)
router.get('/:platformId', checkAuth, getOnePlatform)
router.put('/:platformId', checkAuth, checkAdmin, updatePlatform)
router.post('/', checkAuth, checkAdmin, createPlatform)
router.delete('/:platformId', checkAuth, checkAdmin, deletePlatform)

module.exports = router