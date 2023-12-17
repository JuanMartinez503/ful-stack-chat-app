const {model,Schema }= require('mongoose')

const categorySchema = new Schema({
    name: {
        type:String
    },
    description:{
        type:String
    }
},{
    toJSON:{virtuals:true},
    id:false,
    timestamps:true
})

const Category = model('Category', categorySchema)
module.exports = Category