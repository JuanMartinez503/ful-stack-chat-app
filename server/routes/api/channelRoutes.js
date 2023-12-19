const {getAllChannels} = require('../../controller/channelController')
const router = require('express').Router()

router.route('/').get(getAllChannels)

module.exports = router