const router = require('express').Router()

const {getAllCategories}= require('../../controller/categoryController')

router.route('/').get(getAllCategories)

module.exports = router