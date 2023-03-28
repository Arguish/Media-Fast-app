const Category = require('../models/category.model')


async function getAllCategories(req, res) {
    try {
        const category = await Category.findAll()
        if (category) {
            return res.status(200).json(category)
        } else {
            return res.status(404).send('No categories found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneCategory(req, res) {
    try {
        const category = await Category.findByPk(req.params.id)
        if (category) {
            return res.status(200).json(Category)
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = { getAllCategories, getOneCategory }