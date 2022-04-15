const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/MeControllers'
)
router.get('/stored/snew', meController.meSnew)

router.get('/stored/courses', meController.meStoryCourses)







module.exports = router;