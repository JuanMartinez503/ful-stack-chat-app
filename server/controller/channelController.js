const Channel = require('../models/Channel')

module.exports = {
    async getAllChannels (req, res){
       try {
        const channels = await Channel.find()
        res.status(200).json(channels)
       } catch (err) {
        res.status(500).json({message: err})
       }
    }
}