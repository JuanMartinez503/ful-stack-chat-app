const Category =require('../models/Category')

module.exports = {
    async getAllCategories(req, res){
        try {
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch (err) {
            res.status(500).json({message:err})
        }
    }
}