const User = require('../models/user.model')


const getUsers = async (req, res) => {
    try {
        const result = await User.findAll()
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).send('There are not Users.')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getOneUser = async (req, res) => {
    try {
        const result = await User.findByPk(req.params.userId)
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).send('User wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const updated = await User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        if (updated) {
            res.status(200).json({ message: 'User updated' })
        } else {
            res.status(400).send('User wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const createUser = async (req, res) => {
    try {
        const newEntry = await User.create(req.body)
        return res.status(200).json({ message: 'User created!', User: newEntry })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: {
                id: req.params.userId
            }
        })
        return res.status(200).json({ message: 'User deleted.' })
    } catch (err) {
        return res.status(500).send(err)
    }
}




module.exports = {
    getOneUser, getUsers, updateUser, createUser, deleteUser
}