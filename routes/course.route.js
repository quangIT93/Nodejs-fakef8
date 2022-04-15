const express = require('express')
const router = express.Router()

const coursesController = require('../app/controllers/CoursesControllers'
)
// router.use('/:name/:slug', cardController.snew)
// router.use('/:slug', cardController.snew)
router.get('/create', coursesController.create)
router.post('/story', coursesController.story)
router.get('/:id/edit', coursesController.edit)
router.put('/:id', coursesController.update)
router.delete('/:id', coursesController.delete)
router.get('/:slug', coursesController.show)



module.exports = router;


    

