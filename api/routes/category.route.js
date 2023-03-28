const router = require('express').Router()

const { getAllCategories, getOneCategory } = require('../controllers/category.controller.js')

router.get('/', getAllCategories)
 router.get('/:categoryId', getOneCategory)
// router.put('/:id', updateCategory)
// router.post('/', createCategory)
// router.delete('/:id', deleteCategory)

module.exports = router
