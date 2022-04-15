const Course = require('../model/Course.model')

const { mongoseToObject, mutipleMongoseToObject } = require('../../util/mongooses')



class SiteControllers {
    index(req, res, next) {

        // Course.find({}, function (err, course) {
        //     if(!err) {

        //         res.json(course)
        //     } else {
        //         res.status(400).json({error: 'Failure'})
        //     }

        // });
        // Vì mongoose nó hỗ trợ callback và promise nên ta có thể viết promise
        Course.find({})
            .then(courses => {res.render('courses/card', {
                courses: mutipleMongoseToObject(courses)
            })})
            .catch(next)
        // res.render('home');
    }

    // search(req, res, next) {
    //     Course.find({})
    //         .then(courses => {
    //             courses = courses.map(course => course.toObject())
    //             res.render('search',
    //                 {courses}
    //             )

    //         })
    //         .catch(next)
    // }
}

module.exports = new SiteControllers;