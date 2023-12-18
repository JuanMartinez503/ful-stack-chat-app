
const {model,Schema}=require('mongoose')

const serverSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    severOwner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    category:{
        type:Schema.Types.ObjectId,
        ref: 'Category'
    },
    members:[
        {
            type: Schema.Types.ObjectId,
            ref:'User'

        }
    ]
        
       
},
{
    toJSON:{virtuals:true},
    id:false,
    timestamps:true
})
const Server = model('Server', serverSchema)

module.exports = Server