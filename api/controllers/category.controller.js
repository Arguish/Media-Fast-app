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
        const category = await Category.findByPk(req.params.categoryId)
        if (category) {
            return res.status(200).json(category)
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function updateCategory(req, res) {
    try {
        const [updated] = await Category.update(req.body, {
            where: {
                id: req.params.categoryId,
            },
        })
        if (updated) {
            return res.status(200).json({ message: 'Category updated' })
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createCategory(req,res){
    try{
        const category = await Category.create(req.body)
        return res.status(200).json({message: 'Category created', category: category})
    } catch (error){
        res.status(500).send(error.message)
    }
}

async function deleteCategory (req, res){
    try{
        const category = await Category.destroy({
            where: {
                id: req.params.categoryId,
            }
        })
        if(category){
            return res.status(200).send('Category deleted')
        } else {
            return res.status(500).send('Category not found')
        }
    } catch (error){
        return res.status(500).send(error.message)
    }
}




module.exports = { getAllCategories, getOneCategory, updateCategory, createCategory, deleteCategory }