const router = require('express').Router()
const {getAllServers} = require('../../controller/serverController')

router.route('/').get(getAllServers)

module.exports = router