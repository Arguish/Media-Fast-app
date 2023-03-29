const { getUsers, getOneUser, updateUser, createUser, deleteUser, getOwnUser, getOwnUserMedia, addMediaToOwnUser, getUserMedia, updateOwnUser, deleteOwnUser } = require('../controllers/user.controller')
const { checkAdmin, checkAuth } = require('../middleware/auth')

const router = require('express').Router()

router.get('/', checkAdmin, getUsers)
router.get('/me', checkAuth, getOwnUser)
router.get('/me/user_media', getOwnUserMedia)

router.get('/:userId', checkAuth, checkAdmin, getOneUser)
router.get('/:userId/user_media', checkAuth, checkAdmin, getUserMedia)

router.put('/me', checkAuth, updateOwnUser)
router.put('/:userId', checkAuth, checkAdmin, updateUser)
router.post('/', checkAdmin, createUser)
router.post('/me/user_media/:mediaId', checkAuth, addMediaToOwnUser)
router.delete('/me', checkAuth, deleteOwnUser)
router.delete('/:userId', checkAuth, checkAdmin, deleteUser)

module.exports = router