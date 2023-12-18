const {model,Schema }= require('mongoose')

const categorySchema = new Schema({
    name: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    toJSON:{virtuals:true},
    id:false,
    timestamps:true
})

const Category = model('Category', categorySchema)
module.exports = Category