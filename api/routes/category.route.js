const router = require('express').Router()

const { getAllCategories, getOneCategory, updateCategory, createCategory, deleteCategory } = require('../controllers/category.controller.js')

router.get('/', getAllCategories)
 router.get('/:categoryId', getOneCategory)
router.put('/:categoryId', updateCategory)
router.post('/', createCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router
