const Course = require('../model/Course.model')
const { mongoseToObject, mutipleMongoseToObject } = require('../../util/mongooses')

class SnewControllers {


    index(req, res, next) {
            Course.find({})
                .then(courses => {
                    res.render('../../resources/views/courses/show', {
                        courses: mutipleMongoseToObject(courses)
                    })
                })
                .catch(next)
        }
    



}

module.exports = new SnewControllers;