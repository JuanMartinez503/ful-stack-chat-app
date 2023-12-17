
const {model,Schema}=require('mongoose')

const serverSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    severOwner:{
        type:String
    },
    category:{
        type:string
    }
},
{
    toJSON:{virtuals:true},
    id:false,
    timestamps:true
})
const Server = model('Server', serverSchema)

module.exports = Server