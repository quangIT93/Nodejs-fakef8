const Course = require('../model/Course.model')
const { mongoseToObject, mutipleMongoseToObject } = require('../../util/mongooses')

class MeControllers {


    meStoryCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('../../resources/views/me/stored-courses', {
                    courses: mutipleMongoseToObject(courses)
                })
            })
            .catch(next)
    }

    meSnew(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('../../resources/views/me/snew-courses', {
                    courses: mutipleMongoseToObject(courses)
                })
            })
            .catch(next)
    }



}




module.exports = new MeControllers;