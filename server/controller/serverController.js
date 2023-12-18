const Server = require('../models/Server')

module.exports = {
    async getAllServers (req, res){
    try {
        const servers = await Server.find()
        res.status(200).json(servers)
        
    } catch (err) {
        res.status(500).json({message:err})
    }
    }
}