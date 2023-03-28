const { getUsers, getOneUser, updateUser, createUser, deleteUser } = require('../controllers/user.controller')

const router = require('express').Router()

router.get('/', getUsers)
// /me pending
// router.get('/me', getUsers)
// router.get('/me/user_media', getUsers)

router.get('/:userId', getOneUser)
// router.get('/:userId/user_media', getUserMedia)

// router.put('/me', updateMe)
router.put('/:userId', updateUser)
router.post('/', createUser)
// router.post('/me/user_media/:mediaId', addUserMedia)
// router.delete('/me', deleteMe)
router.delete('/:userId', deleteUser)

module.exports = router