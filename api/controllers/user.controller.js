const User = require('../models/user.model')
const Media = require('../models/media.model')
const Category = require('../models/category.model')
const PrivateInfo = require('../models/private_info.model')
const getUsers = async (req, res) => {
    try {
        const result = await User.findAll({
            include: [PrivateInfo]
        })
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
        const result = await User.findByPk(req.params.userId, {
            include: [PrivateInfo, Media, Category]
        })
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
        const [updated] = await User.update(req.body, {
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

const updateOwnUser = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: {
                id: res.locals.privateInfo.userId
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

const deleteOwnUser = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: {
                id: res.locals.privateInfo.userId
            }
        })
        return res.status(200).json({ message: 'User deleted.' })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const getOwnUser = async (req, res) => {
    try {
        const userId = res.locals.privateInfo.userId
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Category,
                    attributes: {
                        exclude: ["updatedAt", "createdAt", "user_category"]
                    }
                },
                {
                    model: Media,
                    attributes: ['title', 'type'],
                    include: {
                        model: Category,
                        attributes: ['category_name'],
                    }
                },
                {
                    model: PrivateInfo,
                    attributes: {
                        exclude: ['password']
                    }
                }
            ], required: true
        })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).send('User wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getUserMedia = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Category
                },
                {
                    model: Media,
                    attributes: ['title', 'type'],
                    include: {
                        model: Category,
                        attributes: ['category_name'],
                    }
                },
            ], required: true
        })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).send('User wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getOwnUserMedia = async (req, res) => {
    try {
        const userId = res.locals.privateInfo.userId
        const user = await User.findByPk(userId, {
            include: [{
                model: models.Media,
                include: [{
                    model: models.Category
                }]
            }], required: true
        })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).send('User wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getOwnUserMediaLimited = async (req, res) => {
    try {
        const userId = res.locals.privateInfo.userId
        const user = await User.findByPk(userId)
        const result = await user.getMedia({ limit: 4 })
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).send('User wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const addMediaToOwnUser = async (req, res) => {
    try {
        const userId = res.locals.privateInfo.userId
        const user = await User.findByPk(userId)
        const media = await Media.findByPk(req.params.mediaId)
        await user.addMedia(media)
        if (user && media) {
            return res.status(200).send('Media added to user!')
        } else {
            return res.status(400).send('User or media wasnt found')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const addCategoryToOwnUser = async (req, res) => {
    try {
        const userId = res.locals.privateInfo.userId
        const categories = req.body
        const user = await User.findByPk(userId, {
            include: [{
                model: Category
            }], required: true
        })
        categories.map(async (el) => {
            const category = await Category.findByPk(el.id)
            return category
        })
        await user.setCategories([])
        categories.forEach(async (el) => {
            await user.addCategory(el.id)
        })
        if (user) {
            return res.status(200).send('Category added to user')
        } else {
            return res.status(400).send('User or category wasnt found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUserCategories = async (req, res) => {
    try {
        const userId = res.locals.privateInfo.userId
        const categories = req.body
        const user = await User.findByPk(userId, {
            include: [{
                model: Category
            }], required: true
        })
        categories.map(async (el) => {
            const category = await Category.findByPk(el.id)
            return category
        })
        await user.setCategories([])
        categories.forEach(async (el) => {
            await user.addCategory(el.id)
        })
        return res.status(210).send('User categories updated')
    } catch (error) {
        return res.status(400).send('User or category wasnt found')
    }
}


module.exports = {
    getOneUser, getUsers, updateUser, createUser, deleteUser, getOwnUser, getOwnUserMedia, addMediaToOwnUser, getUserMedia, updateOwnUser, deleteOwnUser, addCategoryToOwnUser, updateUserCategories
}