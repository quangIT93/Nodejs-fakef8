const express = require('express')
const router = express.Router()

const siteControllers = require('../app/controllers/SiteControllers'
)

// router.use('/:slug', siteControllers.search)
router.get('/', siteControllers.index)

module.exports = router;