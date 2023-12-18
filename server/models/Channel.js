const { model, Schema } = require("mongoose");

const channelSchema = new Schema({
  name: {
    type: String,
    required:true
  },

  description: {
    type: String,
  },
  channelOwner:{
    type:String,
    required:true
  },
  topic:{
    type:String,
    required:true
  },
  server:{
    type:String
  }
},{
    toJSON:{virtuals:true},
    id:false,
    timestamps:true
});
const Channel = model('Channel',channelSchema)

module.exports=Channel
