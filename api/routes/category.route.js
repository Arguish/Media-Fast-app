const router = require('express').Router()
const { checkAdmin, checkAuth } = require('../middleware/auth')
const { getAllCategories, getOneCategory, updateCategory, createCategory, deleteCategory } = require('../controllers/category.controller.js')

router.get('/', checkAuth, getAllCategories)
router.get('/:categoryId', checkAuth, getOneCategory)
router.put('/:categoryId', checkAuth, checkAdmin, updateCategory)
router.post('/', checkAuth, checkAdmin, createCategory)
router.delete('/:categoryId', checkAuth, checkAdmin, deleteCategory)

module.exports = router
