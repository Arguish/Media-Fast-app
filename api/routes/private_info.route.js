const router = require('express').Router()


const { getAllPrivate_Info, getOnePrivate_Info, updatePrivate_Info, createPrivate_Info, deletePrivate_Info } = require('../controllers/private_info.controller')

router.get('/', getAllPrivate_Info)
//router.get('/me', getMyPrivate_Info)??
router.get('/:userId', getOnePrivate_Info)
//router.put('/me', updateMyPrivate_Info)
router.put('/:private_infoId', updatePrivate_Info)
router.post('/', createPrivate_Info)
//router.delete('/me', deleteMyPrivate_Info)
router.delete('/:private_infoId', deletePrivate_Info)


module.exports = router