const { getUsers, getOneUser, updateUser, createUser, deleteUser } = require('../controllers/user.controller')
const { checkAdmin, checkAuth } = require('../middleware/auth')

const router = require('express').Router()

router.get('/', checkAdmin, getUsers)
// /me pending
// router.get('/me', getUsers)
// router.get('/me/user_media', getUsers)

router.get('/:userId', checkAdmin, getOneUser)
// router.get('/:userId/user_media', getUserMedia)

// router.put('/me', updateMe)
router.put('/:userId', checkAdmin, updateUser)
router.post('/', checkAdmin, createUser)
// router.post('/me/user_media/:mediaId', addUserMedia)
// router.delete('/me', deleteMe)
router.delete('/:userId', checkAuth, checkAdmin, deleteUser)

module.exports = router