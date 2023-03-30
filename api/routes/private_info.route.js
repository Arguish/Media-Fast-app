const router = require('express').Router()


const { getAllPrivateInfo, getMyPrivateInfo, getOnePrivateInfo, updateMyPrivateInfo, updatePrivateInfo, createPrivateInfo,
    deleteMyPrivateInfo, deletePrivateInfo } = require('../controllers/private_info.controller')
const { checkAdmin, checkAuth } = require('../middleware/auth')

router.get('/', checkAuth, checkAdmin, getAllPrivateInfo)
router.get('/me', checkAuth, getMyPrivateInfo)
router.get('/:userId', checkAuth, checkAdmin, getOnePrivateInfo)
router.put('/me', checkAuth, updateMyPrivateInfo)
router.put('/:private_infoId', checkAuth, checkAdmin, updatePrivateInfo)
router.post('/', checkAuth, checkAdmin, createPrivateInfo)
router.delete('/me', checkAuth, deleteMyPrivateInfo)
router.delete('/:private_infoId', checkAuth, checkAdmin, deletePrivateInfo)


module.exports = router