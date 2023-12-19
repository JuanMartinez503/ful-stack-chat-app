const router = require('express').Router()
const categoryRoutes = require('./categoryRoutes')
const channelRoutes = require('./channelRoutes')
const serverRoutes = require('./serverRoutes')
const userRoutes = require('./userRoutes')

router.use('/category',categoryRoutes)
router.use('/channel',channelRoutes)
router.use('/server', serverRoutes)
router.use('/user', userRoutes)

module.exports = router