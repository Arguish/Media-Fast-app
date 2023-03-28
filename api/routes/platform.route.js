const { getPlatforms, getOnePlatform, updatePlatform, createPlatform, deletePlatform } = require('../controllers/platform.controller')

const router = require('express').Router()

router.get('/', getPlatforms)
router.get('/:platformId', getOnePlatform)
router.put('/:platformId', updatePlatform)
router.post('/', createPlatform)
router.delete('/:platformId', deletePlatform)

module.exports = router