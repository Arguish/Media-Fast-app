const router = require('express').Router()


const { getAllPrivateInfo, getOnePrivateInfo, updatePrivateInfo, createPrivateInfo, deletePrivateInfo } = require('../controllers/private_info.controller')

router.get('/', getAllPrivateInfo)
//router.get('/me', getMyPrivateInfo)??
router.get('/:userId', getOnePrivateInfo)
//router.put('/me', updateMyPrivateInfo)
router.put('/:private_infoId', updatePrivateInfo)
router.post('/', createPrivateInfo)
//router.delete('/me', deleteMyPrivateInfo)
router.delete('/:private_infoId', deletePrivateInfo)


module.exports = router